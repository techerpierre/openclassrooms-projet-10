import { useEffect } from 'react';

export default function usePreventScroll(isDisabled) {
    useEffect(() => {
        const preventScroll = (e) => {
            e.preventDefault();
        };

        if (isDisabled) {
            window.addEventListener('wheel', preventScroll, { passive: false });
            window.addEventListener('touchmove', preventScroll, { passive: false });
        } else {
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        }

        return () => {
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        };
    }, [isDisabled]);
};