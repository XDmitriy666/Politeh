const cols = document.querySelectorAll('.col');

document.addEventListener('keydown',(event) => {
    if(event.code.toLowerCase() === 'space'){
        setRandomColors()
    }
})

function generateRandomColor(){
    const randColor = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += randColor[Math.floor(Math.random() * randColor.length)]

    }
    return '#' + color
}

function setRandomColors(){
    cols.forEach(col => {
        const text = col.querySelector('h2')
        const button = col.querySelector('button')
        text.textContent = color
        col.style.background = color
        setTextColor(text, color)
        setTextColor(button, color)
    })
}

function  setTextColor(text, color) {


    
}