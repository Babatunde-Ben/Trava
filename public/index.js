const btn = document.querySelectorAll(".cards .btn");
const cta = document.querySelector(" .cta");
const form = document.querySelector(".waitlist-form");
const waitlistSection = document.getElementById("waitlist");

function windowScroll() {
  window.scrollTo({
    top: waitlistSection.offsetTop - 50,
    left: 0,
  });
}

cta.addEventListener("click", () => {
  windowScroll();
});
btn.forEach((item) => {
  item.addEventListener("click", () => {
    windowScroll();
  });
});

// Regex for validation
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// actions on form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form["name"];
  const email = form["email"];
  const submitBtn = form["submit"];

  // form validation

  if (name.value == "") {
    name.classList.add("invalid");
  } else if (!email.value.match(pattern) || email.value == "") {
    name.classList.remove("invalid");
    email.classList.add("invalid");
  } else {
    name.classList.remove("invalid");

    email.classList.remove("invalid");

    submitBtn.innerHTML = `<div
    class="w-5 h-5 border-2 border-secondary_1 border-b-transparent rounded-full mx-auto animate-spin"
  ></div>`;

    // replace setTimeout function with .then after the form has been submitted to google sheet API
    setTimeout(() => {
      swal({
        title: "Successfully submitted",
        icon: "success",
        button: "Ok",
      });
      submitBtn.innerHTML = "join waitlist";
      form.reset();
    }, 1500);
  }
});

// toggle navbar
const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("open-btn");
const topNav = document.querySelector(".top-nav");

console.log(closeBtn);
console.log(openBtn);
console.log(topNav);

closeBtn.addEventListener("click", () => {
  topNav.classList.toggle("hidden");
  console.log(`close button clicked`);
});
openBtn.addEventListener("click", () => {
  topNav.classList.toggle("hidden");
  console.log(`open button clicked`);
});
