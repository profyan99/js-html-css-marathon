const options = {
    rootMargin: '0px',
    threshold: 0,
}
const onObserve = function (entries, observer) {
    entries.forEach((entry) => {
        console.log('entry: ', entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('active')
        } else {
            entry.target.classList.remove('active')
        }
    })
};

const observer = new IntersectionObserver(onObserve, options);

document.querySelectorAll('.content').forEach((el) => {
    observer.observe(el)
})
