const ACTIVE_CLASS_NAME = 'active'

const panels = document.querySelectorAll('.panel')
let activePanel = null

panels.forEach((currentPanel) => {
    currentPanel.addEventListener('click', () => {
        if (activePanel) {
            activePanel.classList.remove(ACTIVE_CLASS_NAME)
        }
        currentPanel.classList.add(ACTIVE_CLASS_NAME)
        activePanel = currentPanel
    })
})