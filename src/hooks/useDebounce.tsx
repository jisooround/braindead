import { useEffect, useState } from "react";
import { debounce } from "lodash";

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedValue(value);
    }, delay);
    handler();
    return () => {
      handler.cancel();
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
