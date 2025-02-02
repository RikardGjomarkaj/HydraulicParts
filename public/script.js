// Count-up animation
function countUp(elementId, target, duration) {
  const counter = document.getElementById(elementId);
  let start = 0;
  const increment = target / (duration / 16);

  function updateCounter() {
    start += increment;
    if (start >= target) {
      counter.textContent = Math.round(target) + "+";
    } else {
      counter.textContent = Math.round(start);
      requestAnimationFrame(updateCounter);
    }
  }
  requestAnimationFrame(updateCounter);
}

// Intersection Observer to trigger count-up when element is visible
function setupObserverForCountUp(selector, target, duration) {
  const element = document.querySelector(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start counting when the element is visible
        countUp(entry.target.id, target, duration);
        observer.unobserve(entry.target); // Stop observing after the count starts
      }
    });
  }, { threshold: 0.3 }); 
  observer.observe(element);
}
// Dynamically setup counters with IntersectionObserver
const stats = [
  { id: 'stat1', target: 20, duration: 1000 },
  { id: 'stat2', target: 300, duration: 2000 },
  { id: 'stat3', target: 1000, duration: 3000 },
  { id: 'stat4', target: 10, duration: 500 },
];

// Set up IntersectionObserver for each stat element
stats.forEach(({ id, target, duration }) => setupObserverForCountUp(`#${id}`, target, duration));

// Navbar scroll effect
const navbar = document.getElementById("nav");
const firstSection = document.getElementById('home');
let threshold = firstSection.offsetHeight * 0.9;
window.addEventListener('resize', () => {
  threshold = firstSection.offsetHeight * 0.9;
});
window.addEventListener('scroll', () => {
  if (window.scrollY > threshold) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
// Smooth scroll to contact section
function scrollToDiv() {
  const targetDiv = document.getElementById('contact');
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}

// Intersection Observer
function setupObserver(selector, className = "visible", threshold = 0.3) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold });

  elements.forEach((element) => observer.observe(element));
}
setupObserver(".stat");
setupObserver(".about-me");
setupObserver(".products");
setupObserver(".services");
setupObserver(".form");
setupObserver("#map");

// Hamburger menu
const hamburgerMenu = document.getElementById('hamburgerMenu');
const nav = document.getElementById('nav');

hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('#nav') && !e.target.closest('#hamburgerMenu')) {
    nav.classList.remove('active');
    hamburgerMenu.classList.remove('active');
  }
});


 // Form submit event listener
 document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const submitResult = document.getElementById("submit");

  form.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Collect form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
          // Simulate sending email (replace the URL with your server endpoint)
          const response = await fetch("/send", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
          });

          if (response.ok) {
              submitResult.textContent = "Your message has been sent successfully!";
              submitResult.style.color = "green";
              form.reset();
          } else {
              submitResult.textContent = "Failed to send your message. Please try again.";
              submitResult.style.color = "red";
          }
      } catch (error) {
          submitResult.textContent = "An error occurred. Please try again later.";
          submitResult.style.color = "red";
      }
  });
});


// Switch language
const translations = {
  "en": {
    "home": "Home",
    "about": "About",
    "products": "Products",
    "contact": "Contact",
    "quality_parts": "Quality Parts",
    "trusted": "Trusted ",
    "service": "Service",
    "engineering_dreams": "Powering Your Success with Premium Hydraulic Solutions.",
    "our_products": "Our Products",
    "years_in_business": "20",
    "years_in_business_label": "Years in business",
    "happy_clients": "300",
    "happy_clients_label": "Happy Clients",
    "different_products": "1,000",
    "different_products_label": "Different Products",
    "partners": "10",
    "partners_label": "Partners",
    "about_us": "About Us",
    "about_us_description": "We specialize in providing reliable, durable, and cost-effective hydraulic parts for construction machinery, including excavators, backhoes, and trucks. With years of experience in the industry, we understand the importance of having the right parts to keep your equipment running smoothly and efficiently.",
    "our_mission": "Our Mission",
    "our_mission_description": "Our mission is to offer premium hydraulic components that meet the highest standards of quality and performance. We aim to provide exceptional customer service, ensuring that each of our clients receives the right solutions tailored to their specific needs.",
    "our_products_title": "Our Products",
    "excavator_parts": "Excavator Parts",
    "backhoe_parts": "Backhoe Parts",
    "truck_parts": "Truck Parts",
    "request_quote": "Request a Quote",
    "our_services_title": "Our Services",
    "lubricants": "Lubricants",
    "hydraulic_hose": "Hydraulic Hose",
    "steel_cable": "Steel Cable",
    "contact_us": "Contact Us",
    "your_name": "Your Name (not required)",
    "your_email": "Your Email",
    "your_message": "Your Message",
    "send_message": "Send Message",
    "find_us": "Find Us",
    "footer_text": "&copy; 2025 Hydraulic Parts Business. All rights reserved."
  },
  "al": {
    "home": "Kreu",
    "about": "Rreth Nesh",
    "products": "Produktet",
    "contact": "Kontakt",
    "quality_parts": "Pjesë Cilësore",
    "trusted": "Sherbim",
    "service": "i Besuar",
    "engineering_dreams": "Fuqizojmë suksesin tuaj me zgjidhje hydraulike premium.",
    "our_products": "Produktet Tona",
    "years_in_business": "20",
    "years_in_business_label": "Vite në biznes",
    "happy_clients": "300",
    "happy_clients_label": "Klientë të Kënaqur",
    "different_products": "1,000",
    "different_products_label": "Produkte të Ndryshme",
    "partners": "10",
    "partners_label": "Partnerë",
    "about_us": "Rreth Nesh",
    "about_us_description": "Ne jemi të specializuar në ofrimin e pjesëve hydraulike të qëndrueshme dhe të përballueshme për makineritë e ndërtimit, përfshirë ekskavatorë, fadroma dhe kamionë. Me vite përvoje në industri, kuptojmë rëndësinë e pjesëve të duhura për të mbajtur pajisjet tuaja të funksionojnë në mënyrën më efikase.",
    "our_mission": "Misioni Ynë",
    "our_mission_description": "Misioni ynë është të ofrojmë komponente hydraulike premium që plotësojnë standardet më të larta të cilësisë dhe performancës. Ne synojmë të ofrojmë shërbim të profesional për klientët, duke siguruar që secili prej klientëve tanë të marrë zgjidhjet e duhura që përshtaten me nevojat e tyre specifike.",
    "our_products_title": "Produktet Tona",
    "excavator_parts": "Pjesë Ekskavatori",
    "backhoe_parts": "Pjesë Fadrome",
    "truck_parts": "Pjesë Kamioni",
    "request_quote": "Kërkoni Një Ofertë",
    "our_services_title": "Shërbimet Tona",
    "lubricants": "Lubrifikantë",
    "hydraulic_hose": "Tuba Hidraulike",
    "steel_cable": "Kavo Çeliku",
    "contact_us": "Na Kontaktoni",
    "your_name": "Emri Juaj (nuk është i kërkuar)",
    "your_email": "Email-i Juaj",
    "your_message": "Mesazhi Juaj",
    "send_message": "Dërgo Mesazhin",
    "find_us": "Na Gjeni",
    "footer_text": "&copy; 2025 Pjesë Hydraulike. Të Drejtat e Rezervuara."
  }
};

// Function to change language
document.getElementById('languageSelect').addEventListener('change', (event) => {
  switchLanguage(event.target.value);
});

// Switch language function
function switchLanguage(language) {
  // Get all elements with data-translate attribute
  const elements = document.querySelectorAll('[data-translate]');
  
  // Iterate through each element and update text content
  elements.forEach((element) => {
    const key = element.getAttribute('data-translate');
    if (translations[language] && translations[language][key]) {
      element.innerHTML = translations[language][key];
    }
  });
}
