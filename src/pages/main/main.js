import Cookies from "js-cookie";

window.addEventListener("DOMContentLoaded", () => {
  const token = Cookies.get("token");

  if (!token) {
    window.location.href = "/pages/auth/login.html";
  }

  console.log("token: ", token);
});
