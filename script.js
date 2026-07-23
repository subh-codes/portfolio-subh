const body = document.body;
const loader = document.querySelector(".loader");
const cursor = document.querySelector(".cursor");
const menuToggle = document.querySelector(".menu-toggle");
const menuPanel = document.querySelector(".menu-panel");
const menuLinks = menuPanel.querySelectorAll("a[href^='#']");

window.addEventListener("load", () => {
  window.setTimeout(() => {
    loader.classList.add("is-hidden");
    document.querySelector(".hero .split-text")?.classList.add("is-visible");
    document.querySelectorAll(".hero .reveal").forEach((el, index) => {
      window.setTimeout(() => el.classList.add("is-visible"), 120 + index * 90);
    });
  }, 850);
});

document.querySelectorAll(".split-text").forEach((element) => {
  const text = element.textContent;
  element.textContent = "";
  [...text].forEach((character, index) => {
    const span = document.createElement("span");
    span.className = "char";
    span.textContent = character === " " ? "\u00A0" : character;
    span.style.transitionDelay = `${Math.min(index * 22, 520)}ms`;
    element.appendChild(span);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal, .split-text").forEach((el) => observer.observe(el));

window.addEventListener("mousemove", (event) => {
  if (!cursor) return;
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
  document.querySelectorAll(".project__preview").forEach((preview) => {
    preview.style.left = `${event.clientX + 28}px`;
    preview.style.top = `${event.clientY - 18}px`;
  });
});

document.querySelectorAll("a, button, input, textarea").forEach((element) => {
  element.addEventListener("mouseenter", () => cursor?.classList.add("is-active"));
  element.addEventListener("mouseleave", () => cursor?.classList.remove("is-active"));
});
document.querySelectorAll(".project").forEach((project) => {
  project.addEventListener("mouseenter", () => cursor?.classList.add("is-project"));
  project.addEventListener("mouseleave", () => cursor?.classList.remove("is-project"));
});

function setMenu(open) {
  menuPanel.classList.toggle("is-open", open);
  menuPanel.setAttribute("aria-hidden", String(!open));
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  body.style.overflow = open ? "hidden" : "";
}

menuToggle.addEventListener("click", () => setMenu(!menuPanel.classList.contains("is-open")));
menuLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
  const message = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
  window.location.href = `mailto:subhnetarsingh@icloud.com?subject=${subject}&body=${message}`;
});

function updateCalgaryTime() {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Edmonton",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  document.querySelector("#local-time").textContent = `Calgary · ${formatter.format(new Date())} MST`;
}
updateCalgaryTime();
window.setInterval(updateCalgaryTime, 60000);
