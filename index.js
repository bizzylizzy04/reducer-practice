// accumulator - where values are stored
// current - the current position in the array
// default - initial value of the accumulator

// const arr = [1,2,3,4,5,6,7,8];

// const total = arr.reduce((acc, cur) => {
//   console.log(`acc: ${acc} and current: ${cur}`);
//   return acc += cur;
// }, 0);

// console.log(total);

// ----------------------------------------
const hash = "foo=bar&access_token=123abcde&location=Oregon&category=Weird+examples";

// const results = hash.split("&").reduce((acc, curr) => {
//   //foo=bar
//   console.log(curr.split("="))
//   const [key, value] = curr.split("=")[0]; // [foo, bar]
//   return;
// }, {})

const results = hash.split("&").reduce((acc, curr) => {
  //foo=bar
  const [key, value] = curr.split("=");
  acc [key] = value;
  return acc;
}, {});

console.log(results);
// results is now in an object with key/value pairs
