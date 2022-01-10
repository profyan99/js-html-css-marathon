const ACTIVE_CLASS_NAME = 'active'
const DISABLED_ATTRIBUTE_NAME = 'disabled'

const progress = document.getElementById('progress')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

const circleAmount = circles.length
let currentStep = 1

const handleStepChange = () => {
    circles.forEach((circle, index) => {
        if(index < currentStep) {
            circle.classList.add(ACTIVE_CLASS_NAME)

        } else {
            circle.classList.remove(ACTIVE_CLASS_NAME)
        }
    })

    progress.style.width = `${(currentStep - 1) / (circleAmount - 1) * 100}%`

    prevBtn[DISABLED_ATTRIBUTE_NAME] = currentStep === 1;
    nextBtn[DISABLED_ATTRIBUTE_NAME] = currentStep === circleAmount;
}

nextBtn.addEventListener('click', () => {
    currentStep = Math.min(circleAmount, currentStep + 1);

    handleStepChange()
})

prevBtn.addEventListener('click', () => {
    currentStep = Math.max(1, currentStep - 1);

    handleStepChange()
})