import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = (config = {}) => {
  useEffect(() => {
    const defaultConfig = {
      delay: 100,
      duration: 500,
      once: true,
      easing: 'ease-in-out',
      disable: 'mobile',
      ...config,
    };

    AOS.init(defaultConfig);

    return () => {
      AOS.refresh();
    };
  }, [config]);
};

export default useAOS;