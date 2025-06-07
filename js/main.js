//https://randomuser.me/api/?results=2

const api = () => {
  return new Promise((res, rej) => {
    res(fetch("https://randomuser.me/api"));
    rej("fail to fethch");
  });
};

let firstname = ["harry"];
const callApi = () => {
  let data = api();
  data
    .then((res) => res.json())
    .then((res) => {
      console.log(res.results[0]);
      let changeName = res.results[0].name.first;
      document.getElementById("firstName").innerText = changeName;

      let email = res.results[0].email;
      document.getElementById("email").innerText = email;
      let phone = res.results[0].phone;
      document.getElementById("phone").innerText = phone;
      let img = res.results[0].picture.large;
      document.getElementById("img").src = img;
      console.log(img);
    });
};
callApi();
