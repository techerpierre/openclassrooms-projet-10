import { useContext } from 'react'
import ReactDOM from 'react-dom'
import Toast from './Toast'
import { ToastContext } from './ToastContext'
import { getToastContainer } from '../../helpers/functions'

const ToastContainer = () => {
    const { toasts } = useContext(ToastContext);

    return ReactDOM.createPortal(
        <div className='toast-container'>
            { toasts.map((toast) => {
                return (
                    <Toast
                        key={toast.id}
                        id={toast.id}
                        type={toast.type}
                        message={toast.message}
                        content={toast.content}
                    />
                )
            }) }
        </div>,
        getToastContainer(),
    );
}

export default ToastContainer