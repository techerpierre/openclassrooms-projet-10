import { useEffect } from 'react'

export default function useEventListener(
  event,
  handler,
  element = window
) {
  useEffect(() => {
    if (element && element.addEventListener) {
      element.addEventListener(event, handler);
    }

    return () => {
      element.removeEventListener(event, handler);
    };
  }, [event, handler, element]);
}
