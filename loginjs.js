function login() {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const vv = document.querySelector('input[name="username"]')[0];
 
    if (username === "Muve" && password === "0705") 
    {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.href = "DetailsPage/second.html";
    } else 
    {
      const errorMessage = document.getElementById("error-message");
      errorMessage.innerHTML = "Invalid username or password";
    }
  }