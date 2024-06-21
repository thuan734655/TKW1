import axios from 'axios';

const baseURL = 'https://server-90teg2gt1-thuan734655s-projects.vercel.app';
const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosClient.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);

// Xử lý đăng nhập
document.querySelector('.btnSigin').addEventListener('click', async function (event) {
  event.preventDefault();

  const username = document.querySelector('.inputUser_signIn').value;
  const password = document.querySelector('.inputPass_signIn').value;

  try {
    const res = await axiosClient.post('/login', { username, password });
    console.log(res);
    if (res && res.user) { // Assuming `user` is a property in the response upon successful login
      alert('Đăng nhập thành công');
      // Redirect or perform actions after successful login
    } else {
      alert('Thông tin đăng nhập không hợp lệ');
    }
  } catch (error) {
    console.error('Lỗi đăng nhập:', error);
    alert('Lỗi máy chủ nội bộ');
  }
});

// Xử lý đăng ký
document.querySelector('.btnSignUp').addEventListener('click', async function (event) {
  event.preventDefault();

  const username = document.querySelector('.input-username-signUp').value;
  const password = document.querySelector('.input-pass-signUp').value;
  const email = document.querySelector('.input-email-signUp').value;

  try {
    const res = await axiosClient.post('/register', { username, password, email });
    console.log(res);
    if (res && res.statusCode === 200) {
      alert('Đăng ký thành công');
    } else {
      alert('Đăng ký thất bại');
    }
  } catch (error) {
    console.error('Lỗi đăng ký:', error);
    alert('Lỗi máy chủ nội bộ');
  }
});
