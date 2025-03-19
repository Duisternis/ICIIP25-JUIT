const speakers = [
  { name: "Prof. (Dr.) Pardeep Kumar", university: "Jaypee University of Information Technology, HP, India", img: "https://www.juit.ac.in/profile_pics/juit_faculty_profile5815911134.jpg" },
  { name: "Dr. Ravindara Bhat", university: "Jaypee University of Information Technology, HP, India",img: "assets/ravindara-bhat.png" },
  { name: "Dr. Anish Jindal", university: "Durham University, UK", img: "assets/anish-jindal.png" },
  { name: "Co-Chair: Dr. Ekta Gandotra", university: "Jaypee University of Information Technology, HP, India", img: "assets/shankar.png" },
  { name: "Dr. Chandra Shekhar Azad", university: "NIT Jamshedpur", img: "assets/shankar.png" }
];

function generateCards(containerId, people) {
  const container = document.getElementById(containerId);

  const row = document.createElement("div");
  row.classList.add("row", "justify-content-center");

  people.forEach(person => {
      const card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4");

      card.innerHTML = `
          <div class="card keynote-speaker h-100">
              <img class="card-img-top rounded-circle" src="${person.img}" alt="${person.name}">
              <div class="card-body text-center">
                  <h5 class="card-title">${person.name}</h5>
                  <p class="card-text">
                      ${person.designation ? `<span>${person.designation}</span><br><br>` : ""}
                      <span>${person.university}</span>
                  </p>
              </div>
          </div>
      `;
      row.appendChild(card);
  });

  container.appendChild(row);
}

generateCards("tech-committe", speakers);