"use client";
import {CredentialResponse, GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import axios from "axios";


type PageProps = { params: { lng: string } };
export default function Page({params: {lng}}: PageProps) {
    const handleLogin = (credentialResponse: CredentialResponse) => {
        console.log('Login Success: ', credentialResponse);
        axios
            .post(`${process.env.NEXT_PUBLIC_AUTHORIZATION_ENDPOINT}/oauth/google`, credentialResponse, {
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
            <div>
                <h2>React Google Login</h2>
                <br/>
                <br/>

                <div>
                    {/*Token: {token}<br/>*/}
                    <a href={`${process.env.NEXT_PUBLIC_I18N_ENDPOINT}/en/client-page`}>aaaaaaaaa</a><br/>
                    <button
                        onClick={() => {
                            const myHeaders = new Headers();
                            myHeaders.append("Content-Type", "application/json");

                            const raw = JSON.stringify({
                                "_id": "66af2fa9fad611293405ff5f",
                                "back-to-home": "Back to home",
                                "counter_one": "one selected",
                                "counter_other": "{{count}} selected",
                                "counter_zero": "none selected",
                                "title": "Client page"
                            });

                            const requestOptions: RequestInit = {
                                mode: "cors",
                                credentials: 'include',
                                method: "POST",
                                headers: myHeaders,
                                body: raw,
                                redirect: "follow",
                            };
                            fetch(`${process.env.NEXT_PUBLIC_I18N_ENDPOINT}/en/client-page`, requestOptions)
                                .then((response) => response.text())
                                .then((result) => console.log(result))
                                .catch((error) => console.error(error));
                        }}
                    >
                        Send Post Request
                    </button>
                    {/*<button onClick={logOut}>Log out</button>*/}
                </div>

            </div>
        </GoogleOAuthProvider>
    );
}