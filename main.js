document.querySelector('.btn').addEventListener('click', function() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    
    document.querySelector('.hex-code').innerHTML = randomColor
    document.body.style.backgroundColor = '#' + randomColor
})