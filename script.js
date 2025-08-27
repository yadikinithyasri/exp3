document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ecetForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent default form submission
    clearErrors();

    const isValid = validateForm();
    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });

  function clearErrors() {
    const errorElems = form.querySelectorAll(".error-message");
    errorElems.forEach(el => el.remove());
  }

  function showError(input, message) {
    input.classList.add("invalid");
    const error = document.createElement("div");
    error.className = "error-message";
    error.textContent = message;
    input.parentNode.appendChild(error);
  }

  function validateForm() {
    let valid = true;

    const fields = [
      { id: "fname", name: "First Name" },
      { id: "lname", name: "Last Name" },
      { id: "father", name: "Father's Name" },
      { id: "mother", name: "Mother's Name" },
      { id: "dob", name: "Date of Birth" },
      { id: "gender", name: "Gender" },
      { id: "address", name: "Address" },
      { id: "email", name: "Email", type: "email" },
      { id: "phone", name: "Phone", pattern: /^[0-9]{12}$/ },
      { id: "education", name: "Education" },
      { id: "photo", name: "Photo" },
      { id: "sign", name: "Signature" }
    ];

    for (const field of fields) {
      const input = document.getElementById(field.id);

      if (!input.value) {
        showError(input, ${field.name} is required);
        valid = false;
      } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        showError(input, "Please enter a valid email address");
        valid = false;
      } else if (field.pattern && !field.pattern.test(input.value)) {
        showError(input, Invalid ${field.name.toLowerCase()});
        valid = false;
      }
    }

    return valid;
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ecetForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent default form submission
    clearErrors();

    const isValid = validateForm();
    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });

  function clearErrors() {
    const errorElems = form.querySelectorAll(".error-message");
    errorElems.forEach(el => el.remove());
  }

  function showError(input, message) {
    input.classList.add("invalid");
    const error = document.createElement("div");
    error.className = "error-message";
    error.textContent = message;
    input.parentNode.appendChild(error);
  }

  function validateForm() {
    let valid = true;

    const fields = [
      { id: "fname", name: "First Name" },
      { id: "lname", name: "Last Name" },
      { id: "father", name: "Father's Name" },
      { id: "mother", name: "Mother's Name" },
      { id: "dob", name: "Date of Birth" },
      { id: "gender", name: "Gender" },
      { id: "address", name: "Address" },
      { id: "email", name: "Email", type: "email" },
      { id: "phone", name: "Phone", pattern: /^[0-9]{10}$/ },
      { id: "education", name: "Education" },
      { id: "photo", name: "Photo" },
      { id: "sign", name: "Signature" }
    ];

    for (const field of fields) {
      const input = document.getElementById(field.id);

      if (!input.value) {
        showError(input, ${field.name} is required);
        valid = false;
      } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        showError(input, "Please enter a valid email address");
        valid = false;
      } else if (field.pattern && !field.pattern.test(input.value)) {
        showError(input, Invalid ${field.name.toLowerCase()});
        valid = false;
      }
    }

    return valid;
  }
});
