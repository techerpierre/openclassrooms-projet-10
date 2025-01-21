import { useState } from "react";

export default function useToggle(defaultValue = false) {
    const [toggle, setToggle] = useState(defaultValue);

    const toggleAction = () => {
        setToggle(prevToggle => !prevToggle);
    }

    return [toggle, toggleAction, setToggle];
}