import { Link } from "react-router-dom"
import { getCurrencySymbol } from "../../helpers/functions"

const AccountListCard = ({
    type,
    number,
    balance,
    currency,
    balanceType
}) => {
    return <article className="account-list__card">
        <div className="account-list__card__wrapper">
            <h3 className="account-list__card__title">Argent Bank {type} ({number})</h3>
            <p className="account-list__card__amount">{ getCurrencySymbol(currency) }{ balance }</p>
            <p className="account-list__card__amount-description">{ balanceType } Balance</p>
        </div>
        <Link to="/board" className="account-list__card__link">
            <button className="account-list__card__btn">View transactions</button>
        </Link>
    </article>
}

export default AccountListCard