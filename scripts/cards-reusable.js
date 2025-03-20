const speakers = [
    { name: "Prof. (Dr.) Pardeep Kumar", university: "Jaypee University of Information Technology, HP, India", img: "https://www.juit.ac.in/profile_pics/juit_faculty_profile5815911134.jpg" },
    { name: "Dr. Ravindara Bhat", university: "Jaypee University of Information Technology, HP, India",img: "https://www.juit.ac.in/profile_pics/juit_faculty_profileba21bffa4f.jpg" },
    { name: "Dr. Anish Jindal", university: "Durham University, UK", img: "https://apps.dur.ac.uk/biography/image/14" },
  ];
  
  const coChairs = [
      { name: "Dr. Ekta Gandotra", university: "Jaypee University of Information Technology, HP, India", img: "https://www.juit.ac.in/profile_pics/Ekta_gandotraCSE.jpg" },
      { name: "Dr. Chandra Shekhar Azad", university: "NIT Jamshedpur", img: "https://www.nitjsr.ac.in/backend/uploads/Faculty/CA103/profile/6989f3d2-0df2-4a8c-a412-0d8d2d7c7558.jpg" }
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
generateCards("co-chair-tech-committe", coChairs);