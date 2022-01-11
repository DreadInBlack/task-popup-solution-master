/* перечень элементов которые могут получать фокус по спецификации */

export default [
  '[tabindex]:not([tabindex^="-"]):not([inert])',
  '[contenteditable]:not([tabindex^="-"]):not([inert])',
  'a[href]:not([tabindex^="-"]):not([inert])',
  "input:not([disabled]):not([inert])",
  "button:not([disabled]):not([inert])",
  "textarea:not([disabled]):not([inert])",
  "select:not([disabled]):not([inert])",
  'area[href]:not([tabindex^="-"]):not([inert])',
  'iframe:not([tabindex^="-"]):not([inert])',
  'audio:not([tabindex^="-"]):not([inert])',
  'video:not([tabindex^="-"]):not([inert])'
];
