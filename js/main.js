//https://randomuser.me/api/?results=2

const api = async () => {
  return await fetch("https://randomuser.me/api/?results=5");
};
document.getElementById("refresh").addEventListener("click", () => {
  location.reload();
});

const callApi = async () => {
  let firstname = [];
  let email = [];
  let phone = [];
  let img = [];
  let data = await api();
  data = await data.json();
  for (let i = 0; i < 5; i++) {
    console.log(data.results[i].name.first);
    firstname.push(data.results[i].name.first);
    email.push(data.results[i].email);
    phone.push(data.results[i].phone);
    img.push(data.results[i].picture.large);

    document.getElementsByClassName("firstName")[i].innerText = firstname[i];

    document.getElementsByClassName("email")[i].innerText = email[i];
    document.getElementsByClassName("phone")[i].innerText = phone[i];
    document.getElementsByClassName("img")[i].src = img[i];
  }
};

callApi();
