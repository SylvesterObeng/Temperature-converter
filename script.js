// Get all the DOM elements
const submitButton = document.getElementById('submit__btn')
const userInput = document.getElementById('user__input')
const celsius = document.getElementById('celsius')
const fahrenhiet = document.getElementById('fahrenhiet')
const displayResult = document.getElementById('display__text')

// displayResult.style.display = 'none'

let temp;

function checkTemp(){
    if(fahrenhiet.checked){

        temp = Number(userInput.value)
        temp = temp * 9 / 5 + 32
        // displayResult.style.display = 'block'
        displayResult.style.transition = '.2s all cubic-bezier(0.56, 0.12, 0.36, 1.19)'
        displayResult.textContent = `Temp: from ${userInput.value}℃ To: ${temp.toFixed()}℉`

    }

    else if(celsius.checked){
        temp = Number(userInput.value)
        displayResult.style.display = 'inline-block'
        temp = (temp - 32) * (5/9)
        displayResult.textContent = `Temp: from ${userInput.value}℉ To: ${temp.toFixed()}℃`
    }

    else{
        console.log('Please');
    }
}

submitButton.addEventListener('click', checkTemp)