
class XClicked{
    constructor(){
        this.overlay = document.querySelector('.overlay')
        this.links = document.querySelectorAll('.link')
        this.close = document.querySelectorAll('.close')

        this.links.forEach(l => l.addEventListener('click', e => this.process(e)))
        this.close.forEach(c => c.addEventListener('click', () => this.removeClasses()))
        this.overlay.addEventListener('click', () => this.removeClasses())
    }

    process(e){
        e.preventDefault()
        const el = e.target
        const id = el.getAttribute('data-id')

        this.overlay.setAttribute('data-place', id)
        this.removeClasses()
        this.addClassess(el, id)
    }

    removeClasses(){
        this.overlay.classList.remove('active')

        const id = this.overlay.getAttribute('data-place')
        const el = document.querySelector(`[data-id="${id}"]`)
        const de = document.getElementById(id)

        const contents = de.parentElement.children
        const links = el.closest('.links').querySelectorAll('.link');

        [...links, ...contents].forEach(item => item.classList.remove('active'))
    }

    addClassess(el, id){
        const de = document.getElementById(id)
        el.parentElement.classList.add('active')
        de.classList.add('active')

        const tab = de.parentElement.getAttribute('data-overlay')
        if (tab === 'true') this.overlay.classList.add('active')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new XClicked()
})
