// JS logic for CTA section form and submit button //

// Smooth Scroll to CTA
function scrollToSignup() {
  document.getElementById("signup").scrollIntoView({ behavior: "smooth" });
}

//Email Validation utilizing Regex
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


// JS logic for dark and light mode //
const btn = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme == "dark") {
  body.classList.add("dark-mode");
}

btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
