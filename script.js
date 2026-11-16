// Simple line icons, one per career. All drawn on a 24x24 grid.
const icon = (paths, size = 28) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

const icons = {
  code: '<path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/><path d="M14 5l-4 14"/>',
  chart: '<path d="M3 21h18"/><path d="M6 21v-7"/><path d="M11 21V6"/><path d="M16 21v-10"/><path d="M20 21v-4"/>',
  shield: '<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
  stethoscope: '<path d="M6 3v5a4 4 0 0 0 8 0V3"/><path d="M5 3h2"/><path d="M13 3h2"/><path d="M10 12v3a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="11" r="2"/>',
  heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
  person: '<circle cx="12" cy="5" r="2"/><path d="M12 8v6"/><path d="M6 10l6-2 6 2"/><path d="M12 14l-3 7"/><path d="M12 14l3 7"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><path d="M3 13h18"/>',
  calculator: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8"/><path d="M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01"/>',
  megaphone: '<path d="M4 10v4h3l7 4V6l-7 4z"/><path d="M17 9a4 4 0 0 1 0 6"/><path d="M7 14l1 5h2l-1-5"/>',
  pencil: '<path d="M4 20l1-5L16 4l4 4L9 19z"/><path d="M14 6l4 4"/>',
  flask: '<path d="M9 3h6"/><path d="M10 3v6l-5 10a1.5 1.5 0 0 0 1.3 2h11.4a1.5 1.5 0 0 0 1.3-2l-5-10V3"/><path d="M7.5 15h9"/>',
  building: '<path d="M3 9l9-5 9 5z"/><path d="M6 12v6M10 12v6M14 12v6M18 12v6"/><path d="M3 21h18"/>'
};

const careers = [
  {
    title: "Software Developer", category: "Technology", icon: "code",
    summary: "Build websites, apps and software that solve everyday problems.",
    work: "Write and test code, fix software issues, work with a team and turn ideas into useful digital products.",
    skills: ["Programming", "Problem solving", "Logical thinking", "Teamwork"],
    education: "A degree or diploma in computer science can help. You can also begin with online courses, personal projects and a strong coding portfolio."
  },
  {
    title: "Data Analyst", category: "Technology", icon: "chart",
    summary: "Turn information into insights that help people make decisions.",
    work: "Collect, clean and study data, create reports and explain patterns using charts and dashboards.",
    skills: ["Excel or spreadsheets", "SQL", "Statistics", "Communication"],
    education: "Start with spreadsheets and basic statistics, then learn SQL and a data visualisation tool. A degree in a related subject can be useful."
  },
  {
    title: "Cybersecurity Analyst", category: "Technology", icon: "shield",
    summary: "Help protect computers, networks and information from online threats.",
    work: "Monitor systems, investigate suspicious activity, check for security weaknesses and help prevent cyber attacks.",
    skills: ["Networking", "Attention to detail", "Security basics", "Problem solving"],
    education: "Learn computer networks and operating systems first. Practical labs and recognised security certifications can help you build experience."
  },
  {
    title: "Doctor", category: "Healthcare", icon: "stethoscope",
    summary: "Diagnose illnesses, support patients and help people stay healthy.",
    work: "Examine patients, understand symptoms, recommend treatment and work with other healthcare professionals.",
    skills: ["Scientific knowledge", "Empathy", "Decision making", "Communication"],
    education: "In India, the usual route is to complete the required science subjects, qualify NEET-UG, and complete an MBBS degree and internship."
  },
  {
    title: "Nurse", category: "Healthcare", icon: "heart",
    summary: "Provide care and support to patients through treatment and recovery.",
    work: "Monitor patients, assist with treatment, give medicines as prescribed and guide families about care.",
    skills: ["Compassion", "Patience", "Observation", "Teamwork"],
    education: "Nursing routes include recognised B.Sc. Nursing and diploma programmes. Check current eligibility and registration requirements."
  },
  {
    title: "Physiotherapist", category: "Healthcare", icon: "person",
    summary: "Help people improve movement and recover from injuries.",
    work: "Assess movement, plan exercises, guide rehabilitation and track a patient's progress.",
    skills: ["Anatomy", "Communication", "Patience", "Practical care"],
    education: "A recognised Bachelor of Physiotherapy programme is a common starting route. Check the admission rules of each institution."
  },
  {
    title: "Business Manager", category: "Business", icon: "briefcase",
    summary: "Guide teams, organise work and help an organisation reach its goals.",
    work: "Plan projects, manage resources, support employees and review business performance.",
    skills: ["Leadership", "Planning", "Communication", "Decision making"],
    education: "Business, management or related studies can be useful. Internships and experience leading projects also matter."
  },
  {
    title: "Chartered Accountant", category: "Business", icon: "calculator",
    summary: "Work with accounts, audits, tax and financial information.",
    work: "Prepare and review financial records, support audits, advise on tax and help organisations understand their finances.",
    skills: ["Numeracy", "Accuracy", "Ethics", "Analytical thinking"],
    education: "In India, the ICAI CA course has defined entry routes and examination stages. Check ICAI's official website for current details."
  },
  {
    title: "Digital Marketer", category: "Business", icon: "megaphone",
    summary: "Help brands reach people through online platforms and campaigns.",
    work: "Plan online campaigns, create content strategies, study audience behaviour and measure campaign results.",
    skills: ["Creativity", "Writing", "Analytics", "Communication"],
    education: "You can begin with digital marketing courses and practical projects. A portfolio showing real campaign work is helpful."
  },
  {
    title: "Graphic Designer", category: "Creative", icon: "pencil",
    summary: "Use images, colour and typography to communicate ideas clearly.",
    work: "Design posters, brand identities, social media graphics, layouts and other visual materials.",
    skills: ["Visual thinking", "Typography", "Creativity", "Design software"],
    education: "A design course can help, but practice matters too. Build a portfolio of original work and learn tools used in the industry."
  },
  {
    title: "Scientist", category: "Science", icon: "flask",
    summary: "Ask questions, run experiments and expand what we know about the world.",
    work: "Study research questions, design experiments, analyse results and share findings with other researchers.",
    skills: ["Curiosity", "Research", "Mathematics", "Critical thinking"],
    education: "A strong foundation in a science subject is important. Many research roles require postgraduate study and sometimes a PhD."
  },
  {
    title: "Civil Services Officer", category: "Public Service", icon: "building",
    summary: "Work in public administration and contribute to public services.",
    work: "Help implement government programmes, coordinate public services and support administration and policy work.",
    skills: ["Leadership", "General awareness", "Writing", "Decision making"],
    education: "For the UPSC Civil Services Examination, a recognised bachelor's degree is generally required. Always check the latest official notification."
  }
];

const careerGrid = document.getElementById("careerGrid");
const searchInput = document.getElementById("careerSearch");
const categoryChips = document.getElementById("categoryChips");
const careerCount = document.getElementById("careerCount");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("careerModal");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

let activeCategory = "all";
let lastFocused = null;

function renderCareers() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filteredCareers = careers.filter((career) => {
    const matchesCategory = activeCategory === "all" || career.category === activeCategory;
    const searchableText = `${career.title} ${career.category} ${career.summary} ${career.skills.join(" ")}`.toLowerCase();
    return matchesCategory && searchableText.includes(searchTerm);
  });

  careerGrid.innerHTML = filteredCareers.map((career) => {
    const careerIndex = careers.indexOf(career);
    return `
      <article class="career">
        <span class="career-icon">${icon(icons[career.icon])}</span>
        <div class="career-text">
          <h3>${career.title}</h3>
          <p>${career.summary}</p>
        </div>
        <p class="career-field">${career.category}</p>
        <button class="career-open" data-career="${careerIndex}" aria-label="See details for ${career.title}">See details</button>
      </article>
    `;
  }).join("");

  careerCount.textContent = `${filteredCareers.length} ${filteredCareers.length === 1 ? "career" : "careers"}`;
  emptyState.hidden = filteredCareers.length !== 0;
  careerGrid.hidden = filteredCareers.length === 0;
}

function setCategory(category) {
  activeCategory = category;
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.category === category);
  });
  renderCareers();
}

function showCareerDetails(index) {
  const career = careers[index];
  if (!career) return;

  document.getElementById("modalCategory").textContent = career.category;
  document.getElementById("modalIcon").innerHTML = icon(icons[career.icon], 36);
  document.getElementById("modalTitle").textContent = career.title;
  document.getElementById("modalDescription").textContent = career.summary;
  document.getElementById("modalWork").textContent = career.work;
  document.getElementById("modalEducation").textContent = career.education;
  document.getElementById("modalSkills").innerHTML = career.skills.map((skill) => `<li>${skill}</li>`).join("");

  lastFocused = document.activeElement;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

searchInput.addEventListener("input", renderCareers);

categoryChips.addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (chip) setCategory(chip.dataset.category);
});

careerGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-career]");
  if (button) showCareerDetails(Number(button.dataset.career));
});

document.getElementById("clearFilters").addEventListener("click", () => {
  searchInput.value = "";
  setCategory("all");
});

document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
});

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("show");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
renderCareers();
