
export function $(selector, root = document) {
    return root.querySelector(selector);
  }
  
export function formatDate(date) {
const h = "0" + date.getHours();
const m = "0" + date.getMinutes();

return `${h.slice(-2)}:${m.slice(-2)}`;
}