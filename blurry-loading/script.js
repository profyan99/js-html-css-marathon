const loadingText = document.querySelector('.loading-text')
const background = document.querySelector('.bg')

let loading = 0

const blurring = () => {
    loading++
    loadingText.innerText = `${loading}%`
    background.style.filter = `blur(${30 - 30 * loading / 100}px)`
    loadingText.style.opacity = `${1 - loading / 100}`

    if (loading === 100) {
        clearInterval(timer)
    }
}

let timer = setInterval(blurring, 30)
