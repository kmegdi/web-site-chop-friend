
function checkPassword() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error-msg");

  if (pass === "2025") {
    document.getElementById("welcome").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("login-screen").classList.add("hidden");
      document.getElementById("site-login").classList.remove("hidden");
    }, 2000);
  } else {
    error.textContent = "كلمة سر خطاءت";
  }
}

function proceedLogin() {
  const email = document.getElementById("email").value;
  const realPass = document.getElementById("real-password").value;

  if (email && realPass.length >= 4) {
    document.getElementById("site-login").classList.add("hidden");
    document.getElementById("confirm-entry").classList.remove("hidden");
  } else {
    alert("يرجى إدخال بريد إلكتروني وكلمة سر حقيقية.");
  }
}

function showInfo() {
  document.getElementById("confirm-entry").classList.add("hidden");
  document.getElementById("site-info").classList.remove("hidden");
}

function showShop() {
  document.getElementById("site-info").classList.add("hidden");
  document.getElementById("shop").classList.remove("hidden");
}
