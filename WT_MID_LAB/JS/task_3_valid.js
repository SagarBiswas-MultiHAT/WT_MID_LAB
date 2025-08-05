// Job Application Form Validation and UI Feedback
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("jobAppForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const experience = document.getElementById("experience");
  const salary = document.getElementById("salary");
  const terms = document.getElementById("terms");
  const fields = [name, email, phone, password, experience, salary];

  // Focus highlighting
  fields.forEach((field) => {
    field.addEventListener("focus", function () {
      field.classList.add("focused");
    });
    field.addEventListener("blur", function () {
      // blur event is triggered when the field loses focus
      field.classList.remove("focused");
    });
  });

  // Real-time validation feedback
  name.addEventListener("input", function () {
    validateName();
  });
  email.addEventListener("input", function () {
    validateEmail();
  });
  phone.addEventListener("input", function () {
    validatePhone();
  });
  password.addEventListener("input", function () {
    validatePassword();
  });
  experience.addEventListener("change", function () {
    validateExperience();
  });
  salary.addEventListener("input", function () {
    validateSalary();
  });

  // Validation functions
  /// name input validation
  function validateName() {
    const val = name.value.trim();
    if (/^[A-Za-z ]{3,}$/.test(val)) {
      // .test(val) used to check if the value matches the regex pattern
      setValid(name);
      // setValid() is used to apply the valid class
      return true;
    } else {
      setInvalid(name);
      // setInvalid() is used to apply the invalid class
      return false;
    }
  }

  /// email input validation
  function validateEmail() {
    const val = email.value.trim();
    if (/^[\w.-]+@[\w-]+\.[A-Za-z]{2,}$/.test(val)) {
      setValid(email);
      return true;
    } else {
      setInvalid(email);
      return false;
    }
  }

  /// phone input validation
  function validatePhone() {
    const val = phone.value.trim();
    if (/^\d{11}$/.test(val)) {
      setValid(phone);
      return true;
    } else {
      setInvalid(phone);
      return false;
    }
  }

  /// password input validation
  function validatePassword() {
    const val = password.value;
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(val)) {
      setValid(password);
      return true;
    } else {
      setInvalid(password);
      return false;
    }
  }

  /// experience input validation
  function validateExperience() {
    if (experience.value !== "") {
      setValid(experience);
      return true;
    } else {
      setInvalid(experience);
      return false;
    }
  }

  /// salary input validation
  function validateSalary() {
    const val = parseFloat(salary.value);
    if (!isNaN(val) && val > 0) {
      setValid(salary);
      return true;
    } else {
      setInvalid(salary);
      return false;
    }
  }

  // HelperFunctions to set valid/invalid classes
  function setValid(field) {
    field.classList.remove("invalid");
    field.classList.add("valid");
  }
  function setInvalid(field) {
    field.classList.remove("valid");
    field.classList.add("invalid");
  }

  // Form submit validation
  form.addEventListener("submit", function (e) {
    let errors = [];
    if (!validateName())
      errors.push("Name must be at least 3 letters (letters only).");
    if (!validateEmail()) errors.push("Enter a valid email address.");
    if (!validatePhone()) errors.push("Phone must be exactly 11 digits.");
    if (!validatePassword())
      errors.push(
        "Password must be at least 8 characters, include uppercase, lowercase, and a digit."
      );
    if (!validateExperience()) errors.push("Select an experience level.");
    if (!validateSalary())
      errors.push("Expected salary must be a positive number.");
    if (!terms.checked)
      errors.push("You must agree to the terms & conditions.");

    if (errors.length > 0) {
      alert(errors.join("\n"));
      e.preventDefault();
    }
  });
});
