import "../styles/index.scss";
const age = 17;
if (age >= 18 && age <= 21) {
  console.log("Your age is 18-21 years");
} else {
  console.log("Your age is not 18-21 years");
}
// 1) Проверьте переменную age и если возраст больше или равен 18 и меньше или равен 21, выведите в консоль соответсвующее сообщение

const users = [
  {
    name: "Roman",
    age: 28,
    visitedPark: true,
    boughtItems: false
  },
  {
    name: "Maya",
    age: 14,
    visitedPark: false,
    boughtItems: true
  },
  {
    name: "Alex",
    age: 45,
    visitedPark: false,
    boughtItems: false
  },
  {
    name: "Tonia",
    age: 32,
    visitedPark: true,
    boughtItems: true
  }
];
const filtered2Users = users.filter(
  user => user.visitedPark == true || user.boughtItems == true
);

if (filtered2Users) {
  console.table(filtered2Users);
}

const usersVisitedBought = users.map(user => {
  const newUser = {
    name: `${user.name} `,
    visitedPark: `${user.visitedPark}`,
    boughtItems: `${user.boughtItems}`
  };
  return newUser;
});
console.table(usersVisitedBought);

// 2) Для каждого элемента массива users выведите сообщение в консоль, только если пользователь посетил парк или совершил покупку
// Используйте foreach или for, а потом if внутри петли

let iterationCounter = "Each iteration adds a *: ";

for (let i = 0; i < 10; i++) {
  iterationCounter += "*";
}
console.log(iterationCounter);
// 3) Используя assigment operator(+=) поменяйте значение переменоой iterationCounter, добавляя по одной звездочке при каждой итерации

// 4) Выведите в консоль значение iterationCounter. Ожидаемый результат "Each iteration adds a *: * * * * * * * * * *"
