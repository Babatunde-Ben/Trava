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
  // windowScroll();
  swal({
    title: "working",
    icon: "success",
    button: "Ok",
  });
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

  // form validation

  if (name.value == "") {
    name.classList.add("invalid");
  } else if (!email.value.match(pattern) || email.value == "") {
    name.classList.remove("invalid");
    email.classList.add("invalid");
  } else {
    name.classList.remove("invalid");

    email.classList.remove("invalid");

    swal({
      title: "Successfully submitted",
      icon: "success",
      button: "Ok",
    });
    form.reset();
  }
});
