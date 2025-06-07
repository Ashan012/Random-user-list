//https://randomuser.me/api/?results=2

const api = () => {
  return new Promise((res, rej) => {
    res(fetch("https://randomuser.me/api/?results=5"));
    rej("fail to fethch");
  });
};

let firstname = [];
let email = [];
let phone = [];
let img = [];
const callApi = () => {
  let data = api();
  data
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i < 5; i++) {
        firstname.push(res.results[i].name.first);
        email.push(res.results[i].email);
        phone.push(res.results[i].phone);
        img.push(res.results[i].picture.large);

        document.getElementsByClassName("firstName")[i].innerText =
          firstname[i];

        document.getElementsByClassName("email")[i].innerText = email[i];
        document.getElementsByClassName("phone")[i].innerText = phone[i];
        document.getElementsByClassName("img")[i].src = img[i];
      }

      console.log(firstname, email, phone, img);
    });
};

callApi();
