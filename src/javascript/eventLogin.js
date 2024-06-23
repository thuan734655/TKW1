import axiosClient from './axiosClient.js';

// Hàm đăng nhập API
const login_api = async (reqBody) => {
  try {
    const res = await axiosClient.post("/login", reqBody);
    console.log(res);
    return res;
  } catch (error) {
    console.log("error => " + error);
  }
};

// Hàm đăng ký API
const register_api = async (reqBody) => {
  try {
    const res = await axiosClient.post("/register", reqBody);
    console.log(res);
    return res;
  } catch (error) {
    console.log("error => " + error);
  }
};

// Đảm bảo DOM đã tải trước khi thêm sự kiện
document.addEventListener("DOMContentLoaded", () => {
  // Kiểm tra và thêm sự kiện xử lý đăng nhập nếu các phần tử tồn tại
  const btnSigin = document.querySelector('.btnSigin');
  const inputUserSignIn = document.querySelector('.inputUser_signIn');
  const inputPassSignIn = document.querySelector('.inputPass_signIn');

  if (btnSigin && inputUserSignIn && inputPassSignIn) {
    btnSigin.addEventListener('click', async function (event) {
      event.preventDefault();

      const username = inputUserSignIn.value;
      const password = inputPassSignIn.value;

      const res = await login_api({ username, password });

      if (res && res.statusCode === 200) {
        alert('Đăng nhập thành công');
        localStorage.setItem('idUser', res.user.idUser);
        location.href = "/index.html"; // Chuyển hướng sau khi đăng nhập thành công
      } else {
        alert('Thông tin đăng nhập không hợp lệ');
        console.log("login fail");
      }
    });
  }

  // Kiểm tra và thêm sự kiện xử lý đăng ký nếu các phần tử tồn tại
  const btnSignUp = document.querySelector('.btnSignUp');
  const inputUsernameSignUp = document.querySelector('.input-username-signUp');
  const inputPassSignUp = document.querySelector('.input-pass-signUp');
  const inputEmailSignUp = document.querySelector('.input-email-signUp');

  if (btnSignUp && inputUsernameSignUp && inputPassSignUp && inputEmailSignUp) {
    btnSignUp.addEventListener('click', async function (event) {
      event.preventDefault();

      const username = inputUsernameSignUp.value;
      const password = inputPassSignUp.value;
      const email = inputEmailSignUp.value;

      const res = await register_api({ username, password, email });

      if (res && res.statusCode === 200) {
        alert('Đăng ký thành công');
      } else {
        alert('Đăng ký thất bại');
        console.log("dang ki that bat");
      }
    });
  }

  // Hàm cập nhật hồ sơ người dùng
  async function updateProfile() {
    const idUser = localStorage.getItem('idUser');

    if (!idUser) return;

    try {
      const res = await axiosClient.post('/getInformationUser', { idUser });
      console.log(idUser);
      console.log(res);

      if (res && res.statusCode === 200) {
        const userInfo = res.data[0];
        console.log(`Trình độ: ${userInfo.level}`);

        // Check and update each element
        const nameElement = document.querySelector('.information--name');
        const idUserElement = document.querySelector('.information--idUser');
        const levelElement = document.querySelector('.information--level');
        const experienceElement = document.querySelector('.information--experience');

        if (nameElement) {
          nameElement.innerText = userInfo.fullName;
        } else {
          console.error('.information--name element not found');
        }

        if (idUserElement) {
          idUserElement.innerText = `ID: ${idUser}`;
        } else {
          console.error('.information--idUser element not found');
        }

        if (levelElement) {
          levelElement.innerText = `Trình độ: ${userInfo.level}`;
        } else {
          console.error('.information--level element not found');
        }

        if (experienceElement) {
          experienceElement.innerText = `Kinh nghiệm: ${userInfo.experience}`;
        } else {
          console.error('.information--experience element not found');
        }

        console.log("Profile updated successfully");
      } else {
        console.error('User not found:', res.message);
      }
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  }

  // Hàm cập nhật kinh nghiệm người dùng
  async function updateExperience() {
    const idUser = localStorage.getItem('idUser');

    if (!idUser) return;

    try {
      const res = await axiosClient.post('/updateExperience', { idUser });
      console.log(res);
      if (res && res.statusCode === 200) {
        alert('Kinh nghiệm cập nhật thành công');
        updateProfile(); // Cập nhật lại hồ sơ sau khi cập nhật kinh nghiệm
      } else {
        alert('Cập nhật kinh nghiệm thất bại');
        console.error('Error updating experience:', res.message);
      }
    } catch (error) {
      console.error('Error updating experience:', error);
    }
  }

  // Kiểm tra và thêm sự kiện cập nhật hồ sơ nếu phần tử tồn tại
  const profileEvent = document.querySelector(".header__content--icon-profile");

  if (profileEvent) {
    profileEvent.addEventListener("click", updateProfile);
  } else {
    console.error('Element .header__content--icon-profile not found');
  }

  // Kiểm tra và thêm sự kiện cập nhật kinh nghiệm khi nộp bài
  const btnSubmitQuiz = document.querySelector('.submitQuiz');
  if (btnSubmitQuiz) {
    btnSubmitQuiz.addEventListener('click', async function (event) {
      event.preventDefault();
      await updateExperience();
    });
  } else {
    console.error('Element .submitQuiz not found');
  }
});
