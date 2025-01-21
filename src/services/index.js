import AuthApi from "./authApi"
import ProfileApi from "./profileApi"
import AccountsApi from "./accountsApi"

export default {
    authApi: new AuthApi(),
    profileApi: new ProfileApi(),
    accountsApi: new AccountsApi()
}