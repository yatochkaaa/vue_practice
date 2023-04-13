type FocusableElement = HTMLInputElement | HTMLTextAreaElement;

export default {
  mounted(el: FocusableElement) {
    el.focus();
  },
  name: "focus",
};
