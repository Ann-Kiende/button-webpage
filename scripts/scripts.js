const startButton = document.getElementById('start-button')

const backButton = document.getElementById('back-button')

if(startButton){ 
    startButton.addEventListener('click', () => {
        window.open('loaded.html', '_self')
    })
}

if(backButton) {
    backButton.addEventListener('click', () => {
        window.open('index.html', '_self')
    })
}
