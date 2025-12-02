// JS logic for CTA section form and submit button //

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

// JS logic for dark and light mode //
const btn = document.getElementById("theme-toggle");
const btnMobile = document.getElementById("theme-toggle-mobile");
const body = document.body;

btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

btnMobile.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Initialize Materialize sidenav
const sidenav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sidenav);

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
