console.log('Hello bubku')


const darkStyle = document.querySelector('.button--js');
const root = document.documentElement;
let isDark = false;

darkStyle.addEventListener('click', () => {
    if (isDark) {
        root.style.setProperty('--background-color', '#18191a');
        root.style.setProperty('--text-color', '#b0946c');
        root.style.setProperty('--main-background', '#242526');
        isDark = false;
    } else  {
        root.style.setProperty('--background-color', '#cbeef3');
        root.style.setProperty('--text-color', '#31493C');
        root.style.setProperty('--main-background', '#fff');
        isDark = true;
    }
    
})
 
console.log(darkStyle)


