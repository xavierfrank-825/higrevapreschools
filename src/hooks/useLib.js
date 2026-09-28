import { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'select2';
import 'select2/dist/css/select2.min.css';

export function useSelect2(ref, options = {}) {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const jq = $(el);
    jq.select2(options);
    jq.on('change', (e) => setSelected(e.target.value));
    return () => {
      try { jq.select2('destroy'); } catch {}
    };
  }, [ref, options]);

  return selected;
}

export function useScrollHide(ref, threshold = 300) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShow(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    setShow(window.scrollY > threshold);
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref, threshold]);
  return show;
}
