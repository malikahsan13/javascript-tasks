let genHello = async (text, n = 2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 1000 * n);
  });
};

(async () => {
  let x = await genHello("Hello", 2);
  console.log(x);
  x = await genHello("World", 3);
  console.log(x);
})();
