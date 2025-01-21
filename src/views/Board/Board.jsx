import AccountList from "../../components/AccountList/AccountList"
import BoardHeader from "../../components/BoardHeader/BoardHeader"
import ProfileEdition from "../../components/ProfileEdition/ProfileEdition"

const Board = () => {
    return <div className="board-view">
        <BoardHeader/>
        <ProfileEdition/>
        <AccountList/>
    </div>
}

export default Board