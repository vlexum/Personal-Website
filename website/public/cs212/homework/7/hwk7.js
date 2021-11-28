const GAME_START_BTN = document.querySelector("game-start-btn");

var number;

function runGame()
   {
    let isPrime = true;
    let index;

    number = document.getElementById('target-box').value;
    
    if (number <= 1) 
       {
        document.getElementById('answer').innerHTML = "DONT ASK ABOUT ME, Try Another Number";
        document.getElementById('reaction').src = "1orless.jpg";
       }

    
    else if (number > 1) 
       {
        for (index = 2; index < number; index++) 
           {
            if (number % index == 0) 
               {
                isPrime = false;
                break;
               }
           }

        if (isPrime) 
           {
            document.getElementById('answer').innerHTML =`${number} Is A Prime Number!`;
            document.getElementById('reaction').src = "primeNumbers.jpg";
           } 

        else 
           {
            document.getElementById('answer').innerHTML =`${number} Is Not A Prime Number!`;
            document.getElementById('reaction').src = "notPrime.jpg";
           }
      }

   }
   

