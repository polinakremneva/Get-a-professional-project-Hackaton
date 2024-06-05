const elementCardsContainer = document.querySelector(
  ".proffesional-card-container"
);

const proffesionalsArray = [
  {
    id: 1,
    specialization: ["plumber"],
    name: "David",
    phoneNumber: "32456789",
    yearsOfExperience: 15,
    serviceArea: "northern-district",
    rating: {
      totalStars: 4,
      UserswhoRated: 32,
    },
    reviews: [
      {
        reviewerName: "Tom",
        reviewRating: 4,
        reviewText: "Great service",
        reviewDate: "2021-11-15",
      },
    ],
    availabilty: {
      sunday: [9, 10, 11, 12, 13, 14, 15],
      monday: [9, 10, 11, 12, 13, 14, 15],
      tuesday: [9, 10, 11, 12, 13, 14, 15],
      wednesday: [9, 10, 11, 12, 13, 14, 15],
      thursday: [9, 10, 11, 12, 13, 14, 15],
      friday: [9, 10, 11, 12, 13],
    },
  },
  {
    id: 2,
    specialization: ["handyman", "locksmith"],
    name: "Emily",
    phoneNumber: "45678901",
    yearsOfExperience: 7,
    serviceArea: "Tel-Aviv district",
    rating: {
      totalStars: 3,
      UserswhoRated: 47,
    },
    reviews: [
      {
        reviewerName: "Tom",
        reviewRating: 4,
        reviewText: "Great service",
        reviewDate: "2021-11-15",
      },
    ],
    availabilty: {
      sunday: [9, 10, 11, 12, 13, 14],
      monday: [9, 10, 11, 12, 13, 14],
      tuesday: [9, 10, 11, 12, 13, 14],
      wednesday: [9, 10, 11, 12, 13, 14],
      thursday: [9, 10, 11, 12, 13, 14],
      friday: [9, 10, 11, 12],
    },
  },
  {
    id: 3,
    specialization: ["painter"],
    name: "Alex",
    phoneNumber: "78901234",
    yearsOfExperience: 20,
    serviceArea: "Southern-district",
    rating: {
      totalStars: 5,
      UserswhoRated: 80,
    },
    reviews: [
      {
        reviewerName: "Tom",
        reviewRating: 4,
        reviewText: "Great service",
        reviewDate: "2021-11-15",
      },
    ],
    availabilty: {
      sunday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
      monday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
      tuesday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
      wednesday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
      thursday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
      friday: [9, 10, 11, 12, 13],
    },
  },
  {
    id: 4,
    specialization: ["gardener"],
    name: "Sarah",
    phoneNumber: "34567890",
    yearsOfExperience: 12,
    serviceArea: "Jerusalem-district",
    rating: {
      totalStars: 4,
      UserswhoRated: 58,
    },
    reviews: [
      {
        reviewerName: "Tom",
        reviewRating: 4,
        reviewText: "Great service",
        reviewDate: "2021-11-15",
      },
    ],
    availabilty: {
      sunday: [9, 10, 11, 12, 13, 14, 15, 16],
      monday: [9, 10, 11, 12, 13, 14, 15, 16],
      tuesday: [9, 10, 11, 12, 13, 14, 15, 16],
      wednesday: [9, 10, 11, 12, 13, 14, 15, 16],
      thursday: [9, 10, 11, 12, 13, 14, 15, 16],
      friday: [9, 10, 11, 12, 13],
    },
  },
  {
    id: 5,
    specialization: ["electrician", "plumber"],
    name: "John",
    phoneNumber: "67890123",
    yearsOfExperience: 10,
    serviceArea: "Golan heights",
    rating: {
      totalStars: 2,
      UserswhoRated: 50,
    },
    reviews: [
      {
        reviewerName: "Tom",
        reviewRating: 4,
        reviewText: "Great service",
        reviewDate: "2021-11-15",
      },
    ],
    availabilty: {
      sunday: [9, 10, 11, 12, 13, 14, 15],
      monday: [9, 10, 11, 12, 13, 14, 15],
      tuesday: [9, 10, 11, 12, 13, 14, 15],
      wednesday: [9, 10, 11, 12, 13, 14, 15],
      thursday: [9, 10, 11, 12, 13, 14, 15],
      friday: [9, 10, 11, 12, 13],
    },
  },
  {
    id: 6,
    specialization: ["locksmith"],
    name: "Jessica",
    phoneNumber: "89012345",
    yearsOfExperience: 25,
    serviceArea: "northern-district",
    rating: {
      totalStars: 5,
      UserswhoRated: 100,
    },
    reviews: [
      {
        reviewerName: "Tom",
        reviewRating: 4,
        reviewText: "Great service",
        reviewDate: "2021-11-15",
      },
    ],
    availabilty: {
      sunday: [9, 10, 11, 12, 13, 14],
      monday: [9, 10, 11, 12, 13, 14],
      tuesday: [9, 10, 11, 12, 13, 14],
      wednesday: [9, 10, 11, 12, 13, 14],
      thursday: [9, 10, 11, 12, 13, 14],
      friday: [9, 10, 11, 12],
    },
  },
  {
    id: 7,
    specialization: ["painter", "handyman"],
    name: "Chris",
    phoneNumber: "23456789",
    yearsOfExperience: 8,
    serviceArea: "Tel-Aviv district",
    rating: {
      totalStars: 3,
      UserswhoRated: 24,
    },
    reviews: [
      {
        reviewerName: "Tom",
        reviewRating: 4,
        reviewText: "Great service",
        reviewDate: "2021-11-15",
      },
    ],
    availabilty: {
      sunday: [9, 10, 11, 12, 13, 14, 15],
      monday: [9, 10, 11, 12, 13, 14, 15],
      tuesday: [9, 10, 11, 12, 13, 14, 15],
      wednesday: [9, 10, 11, 12, 13, 14, 15],
      thursday: [9, 10, 11, 12, 13, 14, 15],
      friday: [9, 10, 11, 12, 13],
    },
  },
  {
    id: 8,
    specialization: ["electrician"],
    name: "Linda",
    phoneNumber: "56789012",
    yearsOfExperience: 5,
    serviceArea: "Jerusalem-district",
    rating: {
      totalStars: 4,
      UserswhoRated: 20,
    },
    reviews: [
      {
        reviewerName: "Tom",
        reviewRating: 4,
        reviewText: "Great service",
        reviewDate: "2021-11-15",
      },
    ],
    availabilty: {
      sunday: [9, 10, 11, 12, 13, 14, 15, 16],
      monday: [9, 10, 11, 12, 13, 14, 15, 16],
      tuesday: [9, 10, 11, 12, 13, 14, 15, 16],
      wednesday: [9, 10, 11, 12, 13, 14, 15, 16],
      thursday: [9, 10, 11, 12, 13, 14, 15, 16],
      friday: [9, 10, 11, 12, 13],
    },
  },
  {
    id: 9,
    specialization: ["painter", "gardener"],
    name: "Michael",
    phoneNumber: "12345678",
    yearsOfExperience: 15,
    serviceArea: "Southern-district",
    rating: {
      totalStars: 3,
      UserswhoRated: 35,
    },
    reviews: [
      {
        reviewerName: "Tom",
        reviewRating: 4,
        reviewText: "Great service",
        reviewDate: "2021-11-15",
      },
    ],
    availabilty: {
      sunday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
      monday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
      tuesday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
      wednesday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
      thursday: [9, 10, 11, 12, 13, 14, 15, 16, 17],
      friday: [9, 10, 11, 12, 13],
    },
  },
  {
    id: 10,
    specialization: ["handyman"],
    name: "Kevin",
    phoneNumber: "34567890",
    yearsOfExperience: 9,
    serviceArea: "Golan heights",
    rating: {
      totalStars: 4,
      UserswhoRated: 40,
    },
    reviews: [
      {
        reviewerName: "Tom",
        reviewRating: 4,
        reviewText: "Great service",
        reviewDate: "2021-11-15",
      },
    ],
    availabilty: {
      sunday: [9, 10, 11, 12, 13, 14, 15],
      monday: [9, 10, 11, 12, 13, 14, 15],
      tuesday: [9, 10, 11, 12, 13, 14, 15],
      wednesday: [9, 10, 11, 12, 13, 14, 15],
      thursday: [9, 10, 11, 12, 13, 14, 15],
      friday: [9, 10, 11, 12, 13],
    },
  },
];

// async function proffesionalsGet() {
//   const proffesionals = await axios.get(baseURL);
//   proffesionalsArray = proffesionals.data;
// }

// proffesionalsGet();

function renderProffesionalsCards(array) {
  elementCardsContainer.innerHTML = "";
  for (const obj of array) {
    const card = `
    <a href = "http://127.0.0.1:5500/HTML/proffesionalDetails.html?id=${obj.id}">
    <div class = "proffesional-card" >
    <img src="" alt=""></img>
    <p>${obj.name}</p>
    <p>${obj.specialization}</p>
    <p>${obj.serviceArea}</p>
    <p>${obj.rating.totalStars} stars </p>
    </div>
    </a>
      `;

    elementCardsContainer.innerHTML += card;
  }
}

renderProffesionalsCards(proffesionalsArray);


function updateUrlByFilter(ev) {
  ev.preventDefault();
  console.log("hiiii");
  const specializationSelectValue =
    document.querySelector(".specialization").value;
  const ratingSelectValue = document.querySelector(".rating").value;
  const areaSelectValue = document.querySelector(".area").value;

  const params = new URLSearchParams(window.location.search);
  params.set("specialization", specializationSelectValue);
  params.set("servicearea", areaSelectValue);
  params.set("rating", ratingSelectValue);


  window.location.search = params
}
// console.log(URL(window.location.search))

document.addEventListener("DOMContentLoaded", function () {
    renderAppointmentList();
  });
  
  async function renderAppointmentList() {
    const appointmentList = document.querySelector(".appointments");
    const [appointments, professionals] = await Promise.all([
      fetchAppointments(),
      fetchProfessionals()
    ]);
  
    // Clear the existing appointments if any
    appointmentList.innerHTML = "";
  
    if (appointments.length === 0) {
      const noAppointments = document.createElement("li");
      noAppointments.textContent = "No appointments found.";
      appointmentList.appendChild(noAppointments);
      return;
    }
  
    appointments.forEach((appointment) => {
      const professional = professionals.find(pro => pro.id === appointment.professionalId);
  
      const appointmentItem = document.createElement("li");
      appointmentItem.classList.add("appointment-item");
  
      const appointmentDetails = `
        <div class="appointment-info">
          <p><strong>Appointment ID:</strong> ${appointment.id}</p>
          <p><strong>Date:</strong> ${appointment.date}</p>
          <p><strong>Time:</strong> ${appointment.time}</p>
          <p><strong>Professional ID:</strong> ${appointment.professionalId}</p>
          <p><strong>Professional Name:</strong> ${professional ? professional.name : 'N/A'}</p>
        </div>
      `;
  
      appointmentItem.innerHTML = appointmentDetails;
      appointmentList.appendChild(appointmentItem);
    });
  }
  
 
