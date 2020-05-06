import {
  nativeSmoothScroll
} from '@smoovy/scroller';

// const throttle =  (fn, delay) => {
// 	let timer;
// 	return () => {
// 		var context = this, args = arguments;
// 		clearTimeout(timer);
// 		timer = setTimeout(function () {
// 			fn.apply(context, args);
// 		}, delay);
// 	};
// };

window.onload = () => {
  const wrapper = document.getElementById('scroll-wrapper');
  const progress = document.getElementById('progress');
  progress.style['transform'] = `scaleX(0)`;
  let scroller = nativeSmoothScroll({
    element: wrapper
  });

  let h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

  scroller.onScroll((position) => {
    scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
    progress.style['transform'] = `scaleX(${scroll})`;
  })

  document.getElementById('loader').remove();

}