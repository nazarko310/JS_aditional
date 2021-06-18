// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
//     const users = [
//         {name: 'vasya', age: 31, isMarried: false},
//         {name: 'petya', age: 30, isMarried: true},
//         {name: 'kolya', age: 29, isMarried: true},
//         {name: 'olya', age: 28, isMarried: false},
//         {name: 'max', age: 30, isMarried: true},
//         {name: 'anya', age: 31, isMarried: false},
//         {name: 'oleg', age: 28, isMarried: false},
//         {name: 'andrey', age: 29, isMarried: true},
//         {name: 'masha', age: 30, isMarried: true},
//         {name: 'olya', age: 31, isMarried: false},
//         {name: 'max', age: 31, isMarried: true}
//     ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// d) відсортувати його за індентифікатором
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];
// // let sort1 = users.sort((user1, user2) => user1.age - user2.age);
// // let sort2 = users.sort((user1, user2) => user2.age - user1.age);
// //
// //
// // console.log(sort1);
// // console.log(sort2);
//
//
// // let sort = users.sort((user1, user2)=>user1.name.length-user2.name.length);
// // console.log(sort);
// // let sort1 = users.sort((user1, user2)=>user2.name.length-user1.name.length);
// // console.log(sort1);
//
//
// // let mapArray = JSON.parse(JSON.stringify(users));
// // mapArray.map((value, index) => {
// //     value.id = index + 1;
// //     return value;
// // })
// // console.log(mapArray);
// //
// // let sortMapArray = mapArray.sort((user1, user2) => user2.id - user1.id);
// // console.log(sortMapArray);
//
//
// // let newUsers = JSON.parse(JSON.stringify(users));
// //
// // let usersWithFlat = newUsers.reduce((acc, value) => {
// //     if (value.isMarried) {
// //         value.flat = true;
// //         acc.push(value);
// //     }
// //     return acc;
// // }, [])
// //
// // console.log(usersWithFlat);

// -- Порахувати загальний вік всіх людей. (reduce)
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// - взять слдующий массив
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// let countAge = usersWithAddress.reduce((acc, value) => {
//     return acc + value.age;
// }, 0)
//
// console.log(countAge);
let children = [
    {
        name: 'Vania',
        age: 3
    },
    {
        name: 'Dima',
        age: 1
    },
    {
        name: 'Anna',
        age: 12
    },
    {
        name: 'Karina',
        age: 15
    },
]
let newUsersWithAddress = JSON.parse(JSON.stringify(usersWithAddress));

let userWithChild = newUsersWithAddress.reduce((acc, value) => {
    if (value.isMarried && value.age >= 30) {
        for (const child of children) {
            value.children = {
                name: child.name,
                age: child.age
            }
        }
        acc.push(value)
    }
    return acc;
}, [])

console.log(userWithChild);


