import { generateRandomID } from "../../helpers/functions";
import { useAccounts } from "../../store/hooks/accountsHooks"
import AccountListCard from "./AccountListCard";

const AccountList = () => {

    const { accounts } = useAccounts();

    return <section className="account-list">
        {Array.isArray(accounts) ? (
            accounts.map(account => (
                <AccountListCard
                    key={generateRandomID()}
                    type={account.type}
                    number={account.number}
                    balance={account.balance.available || account.balance.current}
                    currency={account.currency}
                    balanceType={account.balance.available ? "Available" : "Current"}
                />
            ))
        ) : null}
    </section>
}

export default AccountList