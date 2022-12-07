/*
First level: Существует массив объектов products. Вам необходимо написать несколько функций, которые выполняют задачи из пунктов ниже. При выполнении задач постарайтесь максимально использовать методы массивов. 
*/

const products = [
    {
        productid: 1,
        categoryid: 1,
        title: "велосипед",
        price: 45000,
        count: 13,
        marks: [1, 4, 3, 5, 4, 3]
    },
    {
        productid: 2,
        categoryid: 1,
        title: "ролики",
        price: 25000,
        count: 22,
        marks: [3, 4, 3, 5]
    },
    {
        productid: 3,
        categoryid: 2,
        title: "стол",
        price: 10000,
        count: 7,
        marks: [4, 4, 5, 4, 5, 5, 5]
    },
    {
        productid: 4,
        categoryid: 3,
        title: "шкаф",
        price: 27000,
        count: 17,
        marks: [3, 2, 4, 3, 4, 3, 2, 4]
    },
    {
        productid: 5,
        categoryid: 3,
        title: "дверь",
        price: 7000,
        count: 1,
        marks: [2, 3, 1, 4, 3]
    }
];

// 1) создать функцию getProduct, которая в качестве аргумента получает id продукта и возвращает его
function getProduct(id) {
    
     return products.find(obj => obj.id === id)};
      console.log(getProduct());
    

// 2) создать функцию getTotalPrice, которая не получает аргументов и возвращает общую сумму всех товаров. Произмедение кол-ва на цену и сумма этого значения у всех товаров. 

    const sum = products.reduce(function getTotalPrice (accumulator, currentValue) {
        return accumulator + currentValue.price * currentValue.count;
    }, 0);

    console.log(sum); 

// 3) создать функцию, getAvgMark  которая получает в качестве аргумента id продукта и возвращает среднюю оценку данного продукта.
function getAvgMark(id) {
    return products.reduce((prev, id) => prev + id.marks, 0) / id.length;
  }
  console.log(getAvgMark(products));

// 4) создать функцию, getAvgMarkByCategory которая получает в качестве аргумента id категории и возвращает среднюю оценку всех товаров данной категории.
function getAvgMarkByCategory(id) {
    return products.reduce((prev, id) => prev + id.categoryid, 0) / id.length;
  }
  console.log(getAvgMarkByCategory(products));

// 5) создайте функцию getLovelyProduct которая возвращает продукт с наибольшим рейтингом
function getLovelyProduct(users) {
    return users.reduce((prev, item) => prev > item.productid ? prev : item) ;
  }
  console.log(getLovelyProduct(products));

// Готовую работу опубликуйте в github и сдайте ссылку на него.


