const age = 17;

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

// 2) Для каждого элемента массива users выведите сообщение в консоль, только если пользователь посетил парк или совершил покупку
// Используйте foreach или for, а потом if внутри петли

let iterationCounter = "Each iteration adds a *: ";

for (let i = 0; i < 10; i++) {
  console.log(i);
  // 3) Используя assigment operator(+=) поменяйте значение переменоой iterationCounter, добавляя по одной звездочке при каждой итерации
}
// 4) Выведите в консоль значение iterationCounter. Ожидаемый результат "Each iteration adds a *: * * * * * * * * * *"
