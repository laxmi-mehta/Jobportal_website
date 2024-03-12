// var debounce = function(fn, t = 1000) {
//     let timer;
//     return function(...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => fn(...args), t);
//     }
// };
// Get Variables
const toggleMenuClicked = () => {
    const body = document.body;
    const openIcon = document.getElementById("open-icon");
    const closeIcon = document.getElementById("close-icon");
  
    body.classList.toggle("open");
  
    if (body.classList.contains("open")) {
      openIcon.style.display = "none";
      closeIcon.style.display = "flex";
    } else {
      openIcon.style.display = "flex";
      closeIcon.style.display = "none";
    }
  };
  