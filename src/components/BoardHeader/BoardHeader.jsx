import { useProfile } from "../../store/hooks/profileHooks"

const BoardHeader = () => {

    const { currentProfile } = useProfile();

    return <header className="board-header">
        <h1 className="board-header__title">Welcome back</h1>
        <h1 className="board-header__title">{ `${currentProfile?.firstName} ${currentProfile?.lastName}` }!</h1>
    </header>
}

export default BoardHeader