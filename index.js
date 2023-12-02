let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            let percentage = false
            let arr = []
            for (let i = 0; i < screen.value.length; i++) {
                arr.push(screen.value.slice(i, i + 1))
            }
            arr.forEach(function (element) {
                if (element == '%') {
                    percentage = true
                }
            })
            if (percentage) {
                let split = screen.value.split('%')
                screenValue = parseInt(split[0]) / 100 * parseInt(split[1])
                screen.value = screenValue

            } else {
                screen.value = eval(screenValue);
            }
        }
        else if (buttonText == 'C') {
            screenValue = screen.value.slice(0, screen.value.length - 1)
            screen.value = screenValue;
        }
        else if (buttonText == '%') {
            screenValue += buttonText
            screen.value = screenValue
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}