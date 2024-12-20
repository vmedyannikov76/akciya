//получим список товаров из корзины
function getProducts() {
  const number = 3; //каждый третий товар по наименьшей стоимости
  let products = tcart.products;
  //отсортируем список товаров по цене в порядке возрастания
  let productsSort = products.sort((a, b) => a.price - b.price);
  console.log("Список товаров", productsSort);
  let list = [];

  //общее количество товаров
  const countProducts = products.reduce(
    (akkumulator, value, index) => akkumulator + value.quantity,
    0
  );
  //считаем сумму товаров
  productsSort.forEach((element) => {
    for (let i = 0; i < element.quantity; i++) {
      list.push(element.price);
    }
  });

  console.log(list);

  console.log("Общее количество товаров", countProducts);

  if (countProducts < number) {
    //если общее кол-во товаро меньше чем бесплатное кратное ничего не делаем
    console.log(
      "нет бесплатных продуктов, нужно проверить меняется ли стоимость продуктов"
    );
    //возвращаем неизмененный список товаров

    return;
  }
  const freeProduct = countProducts / 3; //количество бесплатных товаров
  console.log("Количество бесплатных товаров", freeProduct);

  //итоговая сумма
  let sum = 0;
  list.forEach((e, i) => {
    if (i < freeProduct) return;
    sum += e;
  });
  console.log("Сумма всех товаров", sum);
  tcart.prodamount = sum
  tcart__updateTotalProductsinCartObj();
  tcart__reDrawCartIcon();
  tcart__reDrawTotal();
  tcart__saveLocalObj();
//   tcart__reDrawProducts();

  // return freeProduct
}
getProducts();
