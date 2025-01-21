class AuthApi {
    async login(email, password) {
        const response = await fetch(import.meta.env.VITE_API_URL + "/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password }),
        })
        if (!response.ok) {
            throw new Error("Connexion Failed!");
        }
        const data = await response.json();
        return data?.body;
    }
}

export default AuthApi