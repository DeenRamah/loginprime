const createPw = document.querySelector("#create_pw"),
    confirmPw = document.querySelector("#confirm_pw"),
    pwShow = document.querySelector(".show"),
    alertIcon = document.querySelector(".error"),
    alertText = document.querySelector(".text"),
    submitBtn = document.querySelector("#button"),
    firstNameInput = document.querySelector("#first_nm"),
    lastNameInput = document.querySelector("#second_nm"),
    emailInput = document.querySelector("#email_em");

pwShow.addEventListener("click", () => {
    if (createPw.type === "password" && confirmPw.type === "password") {
        createPw.type = "text";
        confirmPw.type = "text";
        pwShow.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        createPw.type = "password";
        confirmPw.type = "password";
        pwShow.classList.replace("fa-eye", "fa-eye-slash");
    }
});

createPw.addEventListener("input", () => {
    let val = createPw.value.trim();
    if (val.length >= 8) {
        confirmPw.removeAttribute("disabled");
        submitBtn.removeAttribute("disabled");
        submitBtn.classList.add("active");
    } else {
        confirmPw.setAttribute("disabled", true);
        submitBtn.setAttribute("disabled", true);
        submitBtn.classList.remove("active");
        confirmPw.value = "";
        alertText.style.color = "#a6a6a6";
        alertText.innerText = "Enter at least 8 characters";
        alertIcon.style.display = "none";
    }
});

submitBtn.addEventListener("click", () => {
    // Check if passwords match
    if (createPw.value !== confirmPw.value) {
        alertText.innerText = "Passwords didn't match";
        alertIcon.style.display = "block";
        alertText.style.color = "#D93025";
        return;
    }

    // Check if first name is not similar to last name
    if (firstNameInput.value.toLowerCase() === lastNameInput.value.toLowerCase()) {
        alertText.innerText = "First name cannot be the same as last name";
        alertIcon.style.display = "block";
        alertText.style.color = "#D93025";
        return;
    }

    // Check if email contains "@" symbol
    if (!emailInput.value.includes("@")) {
        alertText.innerText = "Enter a valid email address";
        alertIcon.style.display = "block";
        alertText.style.color = "#D93025";
        return;
    }

    // If all checks pass, display success message
    alertText.innerText = "Form submitted successfully!";
    alertIcon.style.display = "none";
    alertText.style.color = "#4070F4";
    window.location.href = "next.html";
});
