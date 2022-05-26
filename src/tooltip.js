import tippy from 'tippy.js';

tippy('.nextSlideBtn', {
  content: 'بعدی',
  placement: 'bottom',
  animation: 'shift-toward-subtle',
});

tippy('.previousSlideBtn', {
  content: 'قبلی',
  placement: 'bottom',
  animation: 'shift-toward-subtle',
});

export { tippy };
