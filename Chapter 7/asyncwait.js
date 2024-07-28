const prompt = require("prompt-sync")();

const userlogin = () => {
  console.log("welcome to userlogin");
  let name = prompt("Enter the name : ");
  let passward = prompt("Enter the passward : ");

  return new Promise((resolve, reject) => {
    if (name === "mk" && passward == "sk") {
      resolve("user Authenticated");
    } else {
      reject("user Rejected");
    }
  });
};

const gotoHome = (userStatus) => {
  return Promise.resolve("user is in " + userStatus);
};

// userlogin()
//   .then((val) => {
//     console.log("Delivered");
//     return gotoHome(val);
//   })
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function perfomtask() {
  try {
    const response = await userlogin();
    console.log("use is ready");
    const userauth = await gotoHome(response);
    console.log(userauth);
  } catch (err) {
    console.log(err);
  }
}
perfomtask();
