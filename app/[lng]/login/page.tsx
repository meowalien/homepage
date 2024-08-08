"use client";
import {CredentialResponse, GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import axios from "axios";


type PageProps = { params: { lng: string } };
export default function Page({params: {lng}}: PageProps) {
    const handleLogin = (credentialResponse: CredentialResponse) => {
        console.log('Login Success: ', credentialResponse);
        axios
            .post(`${process.env.NEXT_PUBLIC_AUTHORIZATION_ENDPOINT}/login/google`, credentialResponse, {
                headers: {
                    Accept: 'application/json'
                },
                withCredentials: true
            })
            .then((res) => {
                console.log("response", res);
            })
            .catch((err) => console.log(err));
    };

    return (
        <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_OAUTH2_CLIENT_ID}`}>
            <GoogleLogin
                onSuccess={handleLogin}
            />
        </GoogleOAuthProvider>
    );
}