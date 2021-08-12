const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
})

let removeActiveClasses = () => {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}