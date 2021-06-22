let mood;
let money = 0;

function GetUp(isDreamWasGood) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDreamWasGood) {
                mood = 'top'
                resolve('Сьогодні я виспався. Прокинувся в 8:00 ')
            } else {
                reject('Night recharge is very low')
            }
        }, 2568)
    })
}

function GoRun(moodForRun) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (moodForRun === 'top') {
                resolve('Сьогодні пробіг 10 км. Тренування в 8:30')
            } else {
                reject('Без трені ніяк, але всього лиш 6 км')
            }
        }, 200)
    })
}

function GoShower() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Пішов в душ в 9:40')
        }, 1258)
    })
}

function GoEat(isMealTasty) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isMealTasty) {
                resolve('Сніданок о 10:00 був смачний')
            } else {
                reject('Сніданок трошки підгорів')
            }
        }, 500)
    })
}

function Study() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('11:00-13:00, навчання')
        }, 125)
    })
}

function GoWork(isWorkDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorkDone) {
                money += 500
                resolve('14-19 Робота');
            } else {
                reject('Сьогодні вихідний')
            }
        }, 2684);
    })
}

function GoShop(moneyAfterShopping) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 100) {
                moneyAfterShopping = money - 100;
                resolve(`В 19:30 магазині купив снікерс і пепсі. У мене залишилось ${moneyAfterShopping}`);
            } else {
                reject('Сьогодні без десерту')
            }
        }, 689)
    })
}

GetUp(true)
    .then(result => {
        console.log(result);
        return GoRun(mood)
    })
    .then(result => {
        console.log(result);
        console.log(`Настрій - ${mood}`);
        return GoShower();
    })
    .then(result => {
        console.log(result);
        return GoEat(true);
    })
    .then(result => {
        console.log(result);
        return Study();
    })
    .then(result => {
        console.log(result);
        return GoWork(true);
    })
    .then(result => {
        console.log(result);
        console.log(`${money} - гроші пілся роботи`);
        return GoShop(money);
    })
    .then(result => {
        console.log(`${result}`);
    })