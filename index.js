const darkStyle = document.querySelector('.checkbox--js')

darkStyle.addEventListener('change', () => {
    const body = document.querySelector('.body')
    document.body.classList.toggle('body--js')
})

console.log(darkStyle)
  

let isDark = false
