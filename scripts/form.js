document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formGroups = document.querySelectorAll(".form-group");
  const successMessage = document.querySelector(
    '[data-testid="test-contact-success"]'
  );

  // for the label animation
  const checkValue = (input) => {
    const formGroup = input.closest(".form-group");
    if (input.value.trim() !== "") {
      formGroup.classList.add("has-value");
    } else {
      formGroup.classList.remove("has-value");
    }
  };

  formGroups.forEach((group) => {
    const input = group.querySelector("input, textarea");
    if (input) {
      checkValue(input);

      input.addEventListener("input", () => checkValue(input));

      input.addEventListener("change", () => checkValue(input));
    }
  });

  function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    errorElement.textContent = message;
    errorElement.setAttribute("aria-hidden", "false");
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // clearing previous errors
    document.querySelectorAll(".error-message").forEach((error) => {
      error.textContent = "";
      error.setAttribute("aria-hidden", "true");
    });

    // name
    const name = document.getElementById("name");
    if (!name.value.trim()) {
      showError("name", "Name is required");
      isValid = false;
    }

    // email
    const email = document.getElementById("email");
    if (!email.value.trim()) { 
      showError("email", "Email is required");
      isValid = false;
    } else if (!validateEmail(email.value)) {
      showError("email", "Please enter a valid email address");
      isValid = false;
    }

    // subject
    const subject = document.getElementById("subject");
    if (!subject.value.trim()) {
      showError("subject", "Subject is required");
      isValid = false;
    }

    // message
    const message = document.getElementById("message");
    if (!message.value.trim()) {
      showError("message", "Message is required");
      isValid = false;
    } else if (message.value.length < 10) {
      showError("message", "Message must be at least 10 characters long");
      isValid = false;
    }

    if (isValid) {
      form.style.display = "none";
      successMessage.style.display = "block";
      successMessage.setAttribute("aria-hidden", "false");
    }
  });

  // clear errors
  form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", () => {
      const errorElement = document.getElementById(`${input.id}-error`);
      errorElement.textContent = "";
      errorElement.setAttribute("aria-hidden", "true");
    });
  });
});
