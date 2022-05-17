function expandir(t) {
    let id = t.getAttribute('id')
    let img = document.getElementById(id)

    if (img.classList.contains('compact')) {
        for (let i = 0; i <= 5; i++) {
            let card = document.getElementsByClassName('img')[i]
            if (card.hasChildNodes()) {
                card.removeChild(card.firstChild)
            }
            card.classList.remove('compact')
            card.classList.remove('expanded')
            card.classList.add('compact')
        }
        img.classList.remove('compact')
        img.classList.add('expanded')
    }
}

function loadContent() {
    for (let i = 1; i <= 6; i++) {
        let img = document.getElementById('img' + i)
        if (img.classList.contains('expanded') && !img.hasChildNodes()) {
            let title = document.createElement('h1')
            title.setAttribute('class', 'title')
            title.innerHTML = img.title
            document.querySelector('.expanded').appendChild(title)
            setTimeout(opacityTimer, 250)
            addEventListener('click', loadContent)
        }
        img.style.backgroundImage = "url(images/img" + i + ".jpg)"
    }
}

function opacityTimer() {
    document.querySelector('.title').classList.add('opacity')
}

function changeLightningMode() {
    let btn = document.getElementById('btn')
    btn.style.transitionDuration = '0.3s'
    document.body.style.transitionDuration = '1s'

    if (btn.classList.contains('dark-mode')) {
        btn.classList.remove('dark-mode')
        btn.classList.add('light-mode')
        btn.value = 'Light Mode'
        document.body.style.background = 'black'
    } else {
        btn.classList.remove('light-mode')
        btn.classList.add('dark-mode')
        btn.value = 'Dark Mode'
        document.body.style.background = 'white'
    }
}