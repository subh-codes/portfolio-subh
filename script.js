const roles = [
  "IT Graduate",
  "Aspiring Cloud Professional",
  "Network & Systems Enthusiast",
  "Hands-On Problem Solver",
  "Building Real-World Technical Solutions"
];

const typedText = document.getElementById("typed-text");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typedText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typedText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 45 : 90);
}

typeEffect();

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));

emailjs.init("COLvLqoVzKkAXIqDV");

const sendBtn = document.getElementById("send-btn");
const statusBox = document.getElementById("form-status");

sendBtn.addEventListener("click", () => {
  const fromName = document.getElementById("from_name").value.trim();
  const fromEmail = document.getElementById("from_email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!fromName || !fromEmail || !message) {
    statusBox.style.display = "block";
    statusBox.style.background = "rgba(239,68,68,0.12)";
    statusBox.style.color = "#fca5a5";
    statusBox.textContent = "Please fill in all fields.";
    return;
  }

  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";

  emailjs.send("service_subh_portfolio", "template_subh_portfolio", {
    from_name: fromName,
    from_email: fromEmail,
    message: message
  }).then(() => {
    statusBox.style.display = "block";
    statusBox.style.background = "rgba(34,197,94,0.12)";
    statusBox.style.color = "#86efac";
    statusBox.textContent = "Message sent successfully.";

    document.getElementById("from_name").value = "";
    document.getElementById("from_email").value = "";
    document.getElementById("message").value = "";
  }).catch(() => {
    statusBox.style.display = "block";
    statusBox.style.background = "rgba(239,68,68,0.12)";
    statusBox.style.color = "#fca5a5";
    statusBox.textContent = "Message failed to send. Check EmailJS service and template IDs.";
  }).finally(() => {
    sendBtn.disabled = false;
    sendBtn.textContent = "Send Message";
  });
});
