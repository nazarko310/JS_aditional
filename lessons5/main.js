// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===
// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.


class Computer {
    constructor(nameCPU, powerCPU, RAM) {
        this.nameCPU = nameCPU;3
        this.powerCPU = powerCPU;
        this.RAM = RAM;
    }

}


Computer.prototype.ComputerOn = function () {
    console.log('Комп`ютер включений');

}
Computer.prototype.СomputerUpgrade = function () {
    let CpuUpgrade = prompt('Введіть нове значення процесора');
    let RamUpgrade = prompt('Введіть нове значення оперативки');
    if (((CpuUpgrade < this.powerCPU) || (CpuUpgrade > (0.1 * this.powerCPU + this.powerCPU))) || ((RamUpgrade < this.RAM) || (RamUpgrade > (2 * this.RAM)))) {
        console.log('Таке значення параметрів не допустиме');
    } else {
        this.powerCPU = CpuUpgrade;
        this.RAM = RamUpgrade;
    }
}

class Laptop extends Computer {
    constructor(nameCPU, powerCPU, RAM, diagonal) {
        super(nameCPU, powerCPU, RAM)
        this.diagonal = diagonal;
        this.powerBattery = this.powerCPU / (this.diagonal * this.RAM);
    }

}


class Ultrabook extends Laptop {
    constructor(nameCPU, powerCPU, RAM, diagonal, weight) {
        super(nameCPU, powerCPU, RAM, diagonal)
        this.weight = weight;
    }

    ComputerOn() {
        if (this.weight > 2) {
            console.log(`Батарея тримає менше 4 годин`)
        }
    }
}

class PC extends Computer {
    constructor(nameCPU, powerCPU, RAM, gameName) {
        super(nameCPU, powerCPU, RAM)
        this.gameName = gameName;
        this.FPS = this.powerCPU * this.RAM;
    }

}

PC.prototype.goPlay = function () {
    console.log(`Ви граєте ${this.gameName} з ${this.FPS} FPS`)
}

class GamePC extends PC {
    constructor(nameCPU, powerCPU, RAM, gameName) {
        super(nameCPU, powerCPU, RAM, gameName)
    }

    goPlay() {
        this.FPS = 2 * this.FPS;
        this.powerCPU *= 0.001+this.powerCPU;
        if (this.powerCPU < 1 && this.RAM < 8) {
            console.log('На цьому відрі ігри не запускаються');
        }
    }

}
