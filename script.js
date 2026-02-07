'use strict'

let number;

const game = function (number) {
    const givenNumber = Math.floor(Math.random() * 100) + 1;
    let attempt = 10;
    const asking = function () {
        const number = prompt('Введите число от 1 до 100');
        const userNumber = parseInt(number, 10)
        attempt = attempt - 1;
        
        if (number === null) {
            alert("Игра окончена");
            return
        }
        if (attempt <= 0 && userNumber !== givenNumber) {
            alert("Попытки закончились, хотите сыграть еще?")
            return game();
        }
        if (isNaN(userNumber)) {
            alert("Введите число")
            asking();
        } else {
            if (userNumber > givenNumber) {
                alert(`Загаданное число меньше, осталось попыток ${attempt}`);
                asking();
            } else if (userNumber < givenNumber) {
                alert(`Загаданное число больше, осталось попыток ${attempt}`);
                asking();
            } else {
                alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                return game();
            }
        }
    }
    asking();
}
game();


