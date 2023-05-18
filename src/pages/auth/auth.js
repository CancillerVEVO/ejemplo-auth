import { login } from "./auth.api";
import Cookies from "js-cookie";

const submitButton = document.querySelector("#submitButton");
const validationErrors = document.querySelector("#validationErrors");
submitButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  try {
    const response = await login({ email, password });

    Cookies.set("token", response.data.token);

    window.location.href = "/";
  } catch (error) {
    if (error.name === "ValidationError") {
      const errorMessages = error.data.map((error) => {
        return `<li>${error.msg}</li>`;
      });

      validationErrors.innerHTML = errorMessages.join("");
    } else {
      validationErrors.innerHTML = error.message;
    }
  }
});
