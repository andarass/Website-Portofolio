// 1. Data Project
const projects = {
  warkod: {
    title: "Warkod",
    description:
      "This page contains the case study of Warkod ID which includes the Project Overview, Tools Used and Live Demo to the official product.",
    overview: [
      "Warkod is a digital product and consultation platform that I created to help clients build their online presence through modern websites and mobile applications. The platform is designed to showcase services, highlight expertise, and provide a clear path for potential clients to connect and collaborate.",
      "For the design, I explored different tech and digital agency websites, as well as design inspirations from platforms like Dribbble, to craft a professional and modern User Interface. The focus is on delivering trust, clarity, and engagement to ensuring that visitors not only understand the services offered but also feel confident in working together.",
      "Feel free to check out the project by visiting the Live Demo.",
    ],
    image: "./assets/portfolio/project-1-warkod.png",
    tech: ["css3-plain", "javascript-plain", "laravel-plain", "react-original"],
    github: "https://github.com/andarass/warkod.git",
    demo: "https://warkod.vercel.app/",
  },
  thriftshop: {
    title: "Thriftshop",
    description:
      "This page contains the case study of Thriftshop Wear which includes the Project Overview, Tools Used and Live Demo to the official product.",
    overview: [
        "Thriftshop Wear is a simple template UI of e-commerce website built for selling secondhand clothing online. The platform comes with essential features such as a product catalog, about, and contact, making the buying process smooth and user-friendly.",
        "The project was designed with a clean and minimal User Interface to ensure easy navigation for customers. By focusing on simplicity and functionality, Thriftshop Wear aims to provide an accessible online shopping experience for those looking for affordable and sustainable fashion choices.",
        "Feel free to check out the project by visiting the Live Demo.",
      ],
    image: "./assets/portfolio/project-2-thriftshop.png",
    tech: ["html5-plain", "css3-plain", "javascript-plain"],
    github: "https://github.com/andarass/website-thriftshop.git",
    demo: "https://thriftshop-wear.vercel.app/",
  },
  kitaptn: {
    title: "KitaPTN",
    description:
      "This page contains the case study of KitaPTN which includes the Project Overview, Tools Used and Live Demo to the official product.",
    overview: [
        "KitaPTN is an educational platform designed to help students prepare for admission into Indonesian public universities (PTN). The website provides learning materials and practice tests aligned with the latest exam standards, ensuring that students can study effectively and measure their readiness.",
        "With a focus on accessibility and ease of use, KitaPTN offers a structured way for learners to review subjects, take mock exams, and track their progress. The platform aims to support students in achieving their academic goals by combining updated content with a user-friendly interface.",
        "Feel free to check out the project by visiting the Live Demo.",
      ],
    image: "./assets/portfolio/project-4-kitaptn.png",
    tech: ["tailwindcss-original", "bootstrap-plain", "laravel-plain", "php-plain", "mysql-plain"],
    github: "https://github.com/andarass/psychocare.git",
    demo: "https://psychocare.vercel.app/",
  },
  perpustakaan: {
    title: "Perpustakaan",
    description:
      "This page contains the case study of Psychocare which includes the Project Overview, Tools Used and Live Demo to the official product.",
    overview: [
        "Psychocare is a dedicated website built to provide reliable information and resources around mental health. The platform not only shares educational content about common mental health issues but also offers a space where users can seek consultation regarding their well being.",
        "The goal of Psychocare is to create a safe, supportive, and user friendly environment that encourages visitors to learn more about mental health and take proactive steps toward self care. With a clean design and accessible navigation, the website makes it easier for users to find guidance and connect with consultation services.",
        "Feel free to check out the project by visiting the Live Demo.",
      ],
    image: "./assets/portfolio/project-5-perpustakaan.png",
    tech: ["laravel-plain", "php-plain", "mysql-plain", "tailwindcss-original", "alpinejs-original", "docker-plain", "excel-original", "dompdf-plain",],
    github: "https://github.com/andarass/UTBK.git",
    demo: "https://perpustakaansekolahfransiskuslawang.my.id/",
  },
};

// 2. Ambil parameter dari URL
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

// 3. Tampilkan data sesuai id
if (projectId && projects[projectId]) {
  const project = projects[projectId];

  // Judul & deskripsi di header
  document.querySelector("header h1").textContent = project.title;
  document.querySelector("header p").textContent = project.description;

  // Gambar
  document.querySelector("#project-detail img").src = project.image;
  document.querySelector("#project-detail img").alt = project.title + " Image";

  // Overview
  const overviewDiv = document.querySelector("#project-detail .overview");

  if (Array.isArray(project.overview)) {
    overviewDiv.innerHTML = project.overview
      .map((text) => `<p>${text}</p>`)
      .join("");
  } else {
    overviewDiv.innerHTML = `<p>${project.overview}</p>`;
  }

  // Tech Stack
  const techStackDiv = document.querySelector(".tech-stack");
  techStackDiv.innerHTML = project.tech
    .map((icon) => `<i class="devicon-${icon} colored"></i>`)
    .join("");

  // Tombol Github & Demo
  const btns = document.querySelector(".btn-container");
  btns.innerHTML = `
      <a href="${project.demo}" class="btn btn-color-1" target="_blank">Live Demo</a>
    `;

  // Breadcrumb
  document.querySelector(".breadcrumb span").textContent = project.title;

  // Related projects
  const relatedDiv = document.getElementById("related-projects");
  relatedDiv.innerHTML = Object.entries(projects)
    .filter(([id]) => id !== projectId)
    .map(
      ([id, proj]) => `
        <div class="card">
          <img src="${proj.image}" alt="${proj.title}" />
          <div class="card-content">
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
            <div class="buttons">
              <a href="detail-project.html?id=${id}">Detail</a>
            </div>
          </div>
        </div>
      `
    )
    .join("");
} else {
  window.location.href = "index.html#projects";
}
