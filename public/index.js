const btn = document.querySelectorAll(".cards .btn");
const cta = document.querySelectorAll(" .cta");
const mobileNavLinks = document.querySelectorAll(" .mobile-nav-links");
const form = document.querySelector(".waitlist-form");
const waitlistSection = document.getElementById("waitlist");

function windowScroll() {
  window.scrollTo({
    top: waitlistSection.offsetTop - 50,
    left: 0,
  });
}

cta.forEach((item) => {
  item.addEventListener("click", () => {
    windowScroll();
  });
});
btn.forEach((item) => {
  item.addEventListener("click", () => {
    windowScroll();
  });
});
mobileNavLinks.forEach((item) => {
  item.addEventListener("click", () => {
    topNav.classList.add("hidden");
  });
});

// toggle navbar
const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("open-btn");
const topNav = document.querySelector(".top-nav");

closeBtn.addEventListener("click", () => {
  topNav.classList.toggle("hidden");
});
openBtn.addEventListener("click", () => {
  topNav.classList.toggle("hidden");
});

// Regex for validation
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// actions on form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.querySelector(".name-input");
  const nameLabel = form.querySelector(".name-input-label");
  const nameError = form.querySelector(".name-input-error");
  const email = form.querySelector(".email-input");
  const emailLabel = form.querySelector(".email-input-label");
  const emailError = form.querySelector(".email-input-error");
  const submitBtn = form["submit"];

  // form validation
  nameLabel.classList.remove("invalid");
  emailLabel.classList.remove("invalid");

  if (name.value == "") {
    nameLabel.classList.add("invalid");
    name.focus();
    nameError.textContent = "Enter first name";
  } else if (!email.value.match(pattern) || email.value == "") {
    nameError.textContent = "";

    nameLabel.classList.remove("invalid");
    emailLabel.classList.add("invalid");
    email.focus();
    emailError.textContent = "Enter valid email address";
  } else {
    emailError.textContent = "";
    nameError.textContent = "";

    nameLabel.classList.remove("invalid");
    emailLabel.classList.remove("invalid");

    // set preloader
    submitBtn.innerHTML = `<div
    class="w-5 h-5 border-2 border-secondary_1 border-b-transparent rounded-full mx-auto animate-spin"
  ></div>`;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => response.json())
      .then(() => {
        console.log(`form submitted`);
        swal({
          title: "Successfully submitted",
          icon: "success",
          button: "Ok",
        });
        submitBtn.innerHTML = "join waitlist";
        form.reset();
      })
      .catch((e) => {
        console.log(`error submitting`);
        submitBtn.innerHTML = "join waitlist";
        swal({
          title: "Error Occured",
          text: "Try again",
          icon: "error",
          button: "Ok",
        });
      });
  }
});

// animation on scroll
AOS.init({
  duration: 500,
  delay: 50,
  offset: 60,
});
