// const x = "1";
// const y = "2";

// console.log(x, y);

// /*
// %s
// %d
// %i
// %o
// */

// console.log("Iam %s ", "mukesh");
// console.clear();
// console.count("Iam mukesh");
// console.count("Iam mukesh");
// console.count("Iam mk");
// console.countReset("Iam mukesh");
// console.count("Iam mukesh");
// console.count("Iam mukesh");
// console.count("Iam mukesh");

// const function1 = () => console.trace();
// const function2 = () => function1();

// function2();

const sum = () => {
  console.log("sum of 2 and 3", 2 + 3);
};

const mult = () => {
  console.log("Mult of 2 and 3", 2 * 3);
};

const messureTime = () => {
  console.time("sum()");
  sum();
  console.timeEnd("sum()");
  console.time("mult()");
  mult();
  console.timeEnd("mult()");
};

messureTime();
