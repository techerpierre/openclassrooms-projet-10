import useEventListener from './useEventListener';

export default function useClickOutside(ref, callback) {
    useEventListener('mousedown', (event) => {
        if (ref.current && event.target === ref.current) {
            callback(ref.current);
        }
    });
}