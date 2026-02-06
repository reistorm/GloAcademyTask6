'use strict'

let number;

const game = function (number) {
    const givenNumber = Math.floor(Math.random() * 100) + 1;
    console.log(givenNumber);
    //do {
    const asking = function () {
        const number = prompt('Введите число от 1 до 100');
        if (number === null) {
            alert("Игра окончена");
            return
        }

        const userNumber = parseInt(number, 10)
        if (isNaN(userNumber)) {
            alert("Введите число")
            asking();
        } else {
            if (userNumber > givenNumber) {
                alert("Загаданное число меньше");
                asking();
            } else if (userNumber < givenNumber) {
                alert("Загаданное число больше");
                asking();
            } else {
                alert("Поздравляю, Вы угадали!!!");
            }
        }
    };
    asking()
}

game();

