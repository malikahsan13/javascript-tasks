async function doIt() {
  const [result1, result2] = await Promise.all([
    getDatafromDb1(),
    getDatafromDb2(),
  ]);
  console.log(result1, result2);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getDatafromDb1() {
  console.log("first 1");
  await sleep(10);
  console.log("first 2");
  return "Data from DB 1";
}

async function getDatafromDb2() {
  console.log("second 1");
  await sleep(0);
  console.log("second 2");
  return "Data from DB 2";
}

doIt();
