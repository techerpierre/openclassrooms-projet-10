import { getToken } from "../helpers/functions";

class ProfileApi {
    async getProfile() {
        const response = await fetch(import.meta.env.VITE_API_URL + "/user/profile", {
            headers: {
                "authorization": "Bearer " + getToken(),
                "Content-Type": "application/json"
            },
        });
        const data = await response.json();
        return data?.body;
    }

    async updateProfile({ userName }) {
        const response = await fetch(import.meta.env.VITE_API_URL + "/user/profile", {
            method: "PUT",
            headers: {
                "authorization": "Bearer " + getToken(),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userName }),
        });
        const data = await response.json();
        return data?.body;
    }
}

export default ProfileApi