#!/bin/bash


# generate a random name for the builder
BUILDER_NAME=$(LC_ALL=C tr -dc a-z </dev/urandom | head -c 8)

# Function to clean up background processes
cleanup() {
  echo "Cleaning up..."
  docker buildx rm "$BUILDER_NAME"
}

# Trap EXIT signal to run cleanup function
trap cleanup EXIT

SHORT_SHA=$(git rev-parse --short HEAD)
REF_NAME=$(git rev-parse --abbrev-ref HEAD)
DIR_NAME=$(basename $(pwd))
DOCKER_REGISTRY_HOST=docker-registry.docker-registry.svc.cluster.local:5000
IMAGE_NAME="$DOCKER_REGISTRY_HOST/$DIR_NAME"
PLATFORMS="linux/arm64,linux/amd64"
TEMP_CONFIG_FILE=$(mktemp)

cat <<EOF > "${TEMP_CONFIG_FILE}"
[registry."docker-registry.docker-registry.svc.cluster.local:5000"]
  http = true
EOF

echo "Creating builder $BUILDER_NAME"

docker buildx create --name "$BUILDER_NAME" --config "$TEMP_CONFIG_FILE" --use --platform "$PLATFORMS" > /dev/null

LATEST_IMAGE_TAG="$IMAGE_NAME:latest"
BRANCH_IMAGE_TAG="$IMAGE_NAME:$REF_NAME"
HASH__IMAGE_TAG="$IMAGE_NAME:$SHORT_SHA"

printf "Building images:\n%s\n%s\n%s\n" "$LATEST_IMAGE_TAG" "$BRANCH_IMAGE_TAG" "$HASH__IMAGE_TAG"

docker buildx build \
          --builder "$BUILDER_NAME" \
          --platform "$PLATFORMS" \
          -t "$LATEST_IMAGE_TAG" \
          -t "$BRANCH_IMAGE_TAG" \
          -t "$HASH__IMAGE_TAG" \
          --push .