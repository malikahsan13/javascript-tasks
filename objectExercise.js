let x = {};

x.key = "1";

if (true) {
  x.key1 = "2";
}
// alternative

let y = { ...(true && { key3: "value" }) };

console.log(x);

console.log(y);
