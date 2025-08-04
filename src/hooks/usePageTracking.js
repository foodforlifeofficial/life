import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-1GVGWJWXY2", {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default usePageTracking;
