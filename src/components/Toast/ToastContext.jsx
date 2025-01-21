import { createContext, useContext, useState } from 'react'
import ToastContainer from './ToastContainer';
import { generateRandomID } from '../../helpers/functions';

export const ToastContext = createContext();

export function useToast() {
    const { addToast } = useContext(ToastContext);
    return addToast;
}

const ToastProvider = ({ children }) => {

    const [toasts, setToasts] = useState([]);
    const addToast = ({ message, content, type }) => {
        setToasts((prev) => {
            if (prev.length >= 3) {
                removeToast(prev[0].id);
            }
            return [...prev, {
                id: generateRandomID(),
                message,
                content,
                type,
            }];
        });
    }
    const removeToast = (id) => {
        setToasts((prev) => {
            const current = prev.filter((toast) => toast.id !== id);
            return [ ...current ];
        });
    }

    return <ToastContext.Provider
        value={{
            toasts,
            addToast,
            removeToast,
        }}
    >
        <ToastContainer/>
        { children }
    </ToastContext.Provider>
}

export default ToastProvider