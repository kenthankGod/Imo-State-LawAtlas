import { useEffect, useState } from "react";

export const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set isMounted to true when the component is mounted
    setIsMounted(true);

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      setIsMounted(false);
    };
  }, []);

  // Return whether the component is currently mounted
  return isMounted;
};
