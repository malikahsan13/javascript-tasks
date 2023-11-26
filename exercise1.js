let genHello = async (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 2000);
  });
};

(async () => {
  let x = await genHello("Hello");
  console.log(x);
  x = await genHello("World");
  console.log(x);
})();
