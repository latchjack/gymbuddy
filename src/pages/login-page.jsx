import React from 'react';
import FormButton from '../ui/form-button/form-button';
import FormCheckbox from '../ui/form-checkbox/form-checkbox';
import FormInput from '../ui/form-input/form-input';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

function LoginPage() {
    const handleSignIn = () => {
        console.log('sign in');
        const authData = pb.admins.authWithPassword(
            'test@example.com',
            '1234567890'
        );
        console.log(authData);
        return authData;
    };

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
                            href="#"
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
                            />

                            <FormInput
                                htmlFor="password"
                                label="Password"
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                            />

                            <div className="flex items-center justify-between">
                                <FormCheckbox
                                    id="remember-me"
                                    name="remember-me"
                                    htmlFor="remember-me"
                                    label="Remember me"
                                />
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

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
