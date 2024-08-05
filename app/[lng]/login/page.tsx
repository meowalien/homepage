"use client";
// import {useTranslation} from "@/i18n";
import {googleLogout, GoogleOAuthProvider, useGoogleLogin} from '@react-oauth/google';
import {useEffect, useState} from "react";
import axios from "axios";


type PageProps = { params: { lng: string } };
export default function Page({params: {lng}}: PageProps) {
    const [user, setUser] = useState<any>(null);
    const [token, setToken] = useState<any>(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log('codeResponse: ', codeResponse);
            setUser(codeResponse)
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .post(`${process.env.NEXT_PUBLIC_AUTHORIZATION_ENDPOINT}/oauth/google`, user, {
                        headers: {
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        console.log(res.data);
                        setToken(true);
                        // setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setToken(null);
    };

    return (
        <GoogleOAuthProvider clientId="90019900383-hrnd5ft427hfooa19671h29u5qt7gi3n.apps.googleusercontent.com">
            <div>
                <h2>React Google Login</h2>
                <br/>
                <br/>
                {token ? (
                    <div>
                        Token: {token}<br/>
                        <a href="http://localhost:8081/i18n/en/client-page">aaaaaaaaa</a><br/>
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
                                fetch("http://localhost:8081/i18n/en/client-page", requestOptions)
                                    .then((response) => response.text())
                                    .then((result) => console.log(result))
                                    .catch((error) => console.error(error));
                            }}
                        >
                            Send Post Request
                        </button>
                        {/*<button onClick={logOut}>Log out</button>*/}
                    </div>
                ) : (
                    // @ts-ignore
                    <button onClick={login}>Sign in with Google 🚀 </button>
                )}
            </div>
        </GoogleOAuthProvider>
    );
}