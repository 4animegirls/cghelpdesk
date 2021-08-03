export const Login = async (userLogin) => {
    try {
        const response = await fetch('http://192.168.1.164/HelpDeskServer/api/Login',
        {
            method: "POST",
            mode: "cors",
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userLogin)
        });
        return await response.json()

    } catch (e) {
        throw new Error('Chyba vo fetchi loginu' + e);
    }
}