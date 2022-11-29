import PocketBase from 'pocketbase';

function Authenticate() {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const login = async () => {
        const authData = await pb.admins.authWithPassword(
            'test@example.com',
            '1234567890'
        );
        return authData;
    };

    login();

    return <></>;
}

export default Authenticate;
