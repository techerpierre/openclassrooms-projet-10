import { useContext, useEffect, useState } from 'react'
import { ToastContext } from './ToastContext';

const Toast = ({ id, message, content, type }) => {

    const { removeToast } = useContext(ToastContext);
    const [desapear, setDesapear] = useState(false);

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setDesapear(true);
        }, 1500);

        const deletionTimeout = setTimeout(() => {
            removeToast(id);
        }, 1700);

        return () => {
            clearTimeout(animationTimeout);
            clearTimeout(deletionTimeout);
        }
    }, [])

    return <div className={["toast", desapear ? "toast--desapear" : ""].join(" ")}>
        <p className="toast__message">{ message }</p>
        <small className="toast__content">{ content }</small>
        <div className={["toast__progress-bar", `toast__progress-bar--${type}`].join(" ")}></div>
    </div>
}

export default Toast