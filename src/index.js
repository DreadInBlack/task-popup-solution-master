import focusableElements from "./helpers/focusableElements";

const ESCAPE_KEY = 27;
const TAB_KEY = 9;

const POPUP_SELECTOR = "details.dialog";

let focusables = [];
let isPopupOpen = false;

function moveFocus(direction) {
  const currentIdx = focusables.indexOf(document.activeElement);
  const nextIdx = currentIdx + (direction ? 1 : -1);
  const indexNewActiveElement =
    (nextIdx + focusables.length) % focusables.length;
  focusables[indexNewActiveElement].focus();
}

function handleKeyDown(e) {
  const popup = e.target.closest(POPUP_SELECTOR);
  if (!isPopupOpen || !popup) {
    return;
  }

  if (e.keyCode === ESCAPE_KEY) {
    isPopupOpen = false;
    popup.removeAttribute("open");
  }

  if (e.keyCode === TAB_KEY) {
    moveFocus(!e.shiftKey);
    e.preventDefault();
  }
}

function init(popup) {
  focusables = [...popup.querySelectorAll(focusableElements.join(","))];
  if (focusables[0]) {
    focusables[0].focus();
  }
}

function handleToggle(e) {
  const popup = e.target.closest(POPUP_SELECTOR);
  if (popup === null) {
    return;
  }

  isPopupOpen = popup.hasAttribute("open");
  if (isPopupOpen) {
    init(popup);
  }
}

document.addEventListener("toggle", handleToggle, true);
document.addEventListener("keydown", handleKeyDown);
