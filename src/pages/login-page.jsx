import React, { useState, useContext, useEffect } from 'react';
import FormButton from '../ui/form-button/form-button';
import FormInput from '../ui/form-input/form-input';
import pb from '../pocketbase';
import { AccessTokenContext } from '../context/access-token-context';

function LoginPage() {
    const { accessToken, setAccessToken } = useContext(AccessTokenContext);
    // const { setUser } = useContext(UserContext);
    const [formData, setFormData] = useState();
    console.log('accessToken -', accessToken);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        if (pb.authStore.isValid) {
            pb.authStore.clear();
        }
    }, []);

    useEffect(() => {
        if (accessToken) {
            console.log('redirect');
        }
    }, [accessToken]);

    // .authWithPassword(
    //     import.meta.env.VITE_USER_EMAIL,
    //     import.meta.env.VITE_USER_PASSWORD
    // )

    // TODO - can authWithPassword take an object or only strings?
    const handleSignIn = () => {
        const authData = pb
            .collection('users')
            .authWithPassword(formData.username, formData.password)
            .then((res) => {
                console.log(res);
                localStorage.setItem('access_token', res.token);
                setAccessToken(res.token);
            })
            .catch((err) => {
                console.log(err);
            });
        return authData;
    };
    console.log(pb.authStore.isValid, pb.authStore.token);

    return (
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-36 w-auto mb-0"
                        src="/src/assets/hand-holding-dumbbell-front.png"
                        alt="Active logo"
                    />
                    <h2 className="mt-0 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <a
                            href="/register"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Register
                        </a>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" action="#" method="POST">
                            <FormInput
                                htmlFor="email"
                                label="Email address"
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                onChange={handleChange}
                            />

                            <FormInput
                                htmlFor="password"
                                label="Password"
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                onChange={handleChange}
                            />

                            <div>
                                <FormButton
                                    label="Sign in"
                                    onClick={handleSignIn}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
