// exercise
{
  const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: [],
  };
  const book = {
    name: 'book',
    price: 10,
  };

  const pipe = (...fns) => (initialData) => fns.reduce((v, fn) => fn(v), initialData);
  const purchaseItem = pipe(
    addToCartCurried(book),
    addTax,
    buy,
    emptyCart,
  );
  const newUser = purchaseItem(user);
  // console.log('result', newUser);

// add item to cart
  function addToCart(item, user) {
    const newUser = {...user};
    newUser.cart = [...user.cart, item];
    return newUser;
  }

  function addToCartCurried(...args) {
    return addToCart.bind(null, ...args);
  }

// add 3% tax
  function addTax(user) {
    const newCart = user.cart.map(
      item => ({...item, price: item.price * 1.03}
      )
    );
    return {...user, cart: newCart}
  }

// buy items
  function buy(user) {
    const items = [...user.cart];
    const newPurchases = [...user.purchases, ...items];
    return {...user, purchases: newPurchases};
  }

// empty cart
  function emptyCart(user) {
    return {...user, cart: []}
  }
}

// compose
{
  const multiplyBy3Abs = compose(multiplyBy3, abs);

  function multiplyBy3(n) {
    console.log('multiply');
    return n * 3;
  }

  function abs(n) {
    console.log('abs');
    return Math.abs(n);
  }

  function compose(...fns) {
    return n => fns.reduceRight((v, fn) => fn(v), n);
  }

  // console.log(multiplyBy3Abs(-3));
}

// curry
{
  const arrayToString = (arr, str) => arr.join(str);

  function curry(fn) {
    return (...arg) => fn.bind(null, ...arg);
  }

// create a function that binds its arguments to a provided function
  const curried = curry(arrayToString);
// console.log(curried(['andre', 'gao'])('-'));
//executes right away because:
// providing the first argument turned the curried function turned into a regular
// function that's arrayToString, when providing the second argument
// it's to the new regular function causing the execution


  const bind1 = arrayToString.bind(null, ['andre', 'gao']);
// console.log(bind1('-'));
}


