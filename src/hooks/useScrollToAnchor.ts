'use client';

import { useEffect, useRef } from 'react';

const useScrollToAnchor = () => {
  const scrolledRef = useRef(false);
  const hash = window && window.location.hash;
  const hashRef = useRef(hash);

  useEffect(() => {
    if (hash && hashRef.current !== hash) {
      hashRef.current = hash;
      scrolledRef.current = false;
    }

    if (hash && !scrolledRef.current) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        scrolledRef.current = true;
      }
    }
  });
};

export default useScrollToAnchor;
