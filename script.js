// JS logic for CTA section form and submit button //

// Smooth Scroll to CTA
function scrollToSignup() {
  document.getElementById("signup").scrollIntoView({ behavior: "smooth" });
}

//Email Validation utilizing Regex
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Handle form submission, onclick done on submit btn.
function submitEmail() {
  const emailInput = document.getElementById("emailInput");
  const alertBox = document.getElementById("alertBox");
  const email = emailInput.value.trim();

  // Reset styles
  emailInput.classList.remove("error");
  alertBox.style.display = "none";

  if (!email || !isValidEmail(email)) {
    // ERROR
    emailInput.classList.add("error");
    alertBox.className = "custom-alert alert-error";
    alert("Invalid Input");
    alertBox.textContent = "❌ Invalid email format. Please try again.";
    alertBox.style.display = "block";
    return;
  }

  // SUCCESS
  alertBox.className = "custom-alert alert-success";
  alertBox.textContent = "✅ Thank you for registering!";
  alertBox.style.display = "block";

  // clear input
  emailInput.value = "";
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
