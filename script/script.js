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
     return products.find(({productid}) => productid === id)};
      console.log(getProduct());
    

// 2) создать функцию getTotalPrice, которая не получает аргументов и возвращает общую сумму всех товаров. Произмедение кол-ва на цену и сумма этого значения у всех товаров. 
function getTotalPrice(){
    return products.reduce((pre, {price, count}) => pre + price * count, 0)
}
    /*
    const sum = products.reduce(function getTotalPrice (accumulator, currentValue) {
        return accumulator + currentValue.price * currentValue.count;
    }, 0);

    console.log(sum); 
*/

// 3) создать функцию, getAvgMark  которая получает в качестве аргумента id продукта и возвращает среднюю оценку данного продукта.
function getAvgMark(id) {
    const target = products.find(({productid}) => productid === id).marks;
    return target.reduce((a, b) => a+b) / target.length;
    // return target.reduce((prev, id) => prev + id.marks, 0) / id.length;
  }
  console.log(target);

// 4) создать функцию, getAvgMarkByCategory которая получает в качестве аргумента id категории и возвращает среднюю оценку всех товаров данной категории.
function getAvgMarkByCategory(id) {
    const target = products.find(({categoryid}) => categoryid === id)
                        .reduce(({prev, marks}) => [...prev, ...marks], [])
    return target.reduce((a, b) => a+b) / target.length;
    //return products.reduce((prev, id) => prev + id.categoryid, 0) / id.length;
  }
  console.log(getAvgMarkByCategory(target));

// 5) создайте функцию getLovelyProduct которая возвращает продукт с наибольшим рейтингом
const getLovelyProduct = () =>
     products.map(product =>({...product,
        avg_mark: product.marks.reduce((a, b) => a + b) / product.marks.length
})).reduce((prev, item) => prev.avg_mark > item.avg_mark ? prev : item);


// function getLovelyProduct() {
    // const new_arr = products.map(product =>{
    //     const marks_sum = product.marks.reduce((a, b) => a + b);
    //     product.avg_mark = marks_sum / product.marks.length;
    //     return product
    // })
    // const target = new_arr.reduce((prev, item) => prev.avg_mark > item.avg_mark ? prev : item);
    // return target;



