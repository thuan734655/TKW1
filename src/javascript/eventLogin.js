import axiosClient from './axiosClient.js';

document
  .querySelector(".btnSigin")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    const username = document.querySelector(".inputUser_signIn").value;
    const password = document.querySelector(".inputPass_signIn").value;

    const res = await login_api({ username, password });

    if (res.statusCode === 200) {
      location.href = "/index.html";
    }
    else {
        console.log("login fail");
    }
  });

  //dang ki
  document.querySelector('.btnSignUp').addEventListener('click', (e) => {
    const username = document.querySelector(".input-username-signUp").value;
    const password = document.querySelector(".input-pass-signUp").value;
    const email = document.querySelector(".input-email-signUp").value;

    const res =  login_api({ username, password,email });

    if (res.statusCode === 200) {
     console.log("dang ki thanh cong");
    }
    else {
     console.log("dang ki that bat");
    }
  })

const login_api = async (reqBody) => {
  try {
    const res = await axiosClient.post("/login", reqBody);
    console.log(res);
    return res;
  } catch (error) {
    console.log("error => " + error);
  }
};
