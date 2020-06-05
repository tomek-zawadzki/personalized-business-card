console.log("Hello my friend");

const darkStyle = document.querySelector(".button--js");
const root = document.documentElement;
let isDark = false;

darkStyle.addEventListener("click", () => {
  if (isDark) {
    darkStyle.innerHTML = "CIEMNO";
    root.style.setProperty("--background-color", "#18191a");
    root.style.setProperty("--text-color", "#b0946c");
    root.style.setProperty("--main-background", "#242526");
    root.style.setProperty("--button-color", "#001a23");
    root.style.setProperty("--button-background", "#D6D1CD");
    isDark = false;
  } else {
    darkStyle.innerHTML = "JASNO";
    root.style.setProperty("--background-color", "#cbeef3");
    root.style.setProperty("--text-color", "#31493C");
    root.style.setProperty("--main-background", "#fff");
    root.style.setProperty("--button-color", "#D6D1CD");
    root.style.setProperty("--button-background", "#001a23");
    isDark = true;
  }
});

console.log(darkStyle);
