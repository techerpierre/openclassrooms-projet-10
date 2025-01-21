class AccountsApi {
    async listSelfAccount() {
        const response = await fetch("/mocks/accounts.json", {
            method: "GET",
        });

        return response.json();
    }
}

export default AccountsApi