import { useEffect, useState } from 'react';

function useDesktopCursor() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
      const mediaQuery = window.matchMedia('(pointer: fine)');

      const update = () => {
          setIsDesktop(mediaQuery.matches);
      };

      update();

      mediaQuery.addEventListener('change', update);

      return () => {
          mediaQuery.removeEventListener('change', update);
      };
  }, []);

  return isDesktop;
}

export default useDesktopCursor;