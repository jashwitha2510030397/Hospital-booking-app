import React from 'react'

function Doctor({ selectedCategory }) {

  const doctorList = [

    {
      name: "Dr. Rahul Sharma",
      specialist: "Dental",
      hospital: "Apollo Hospital",
      image: "https://thumbs.dreamstime.com/b/portrait-young-male-doctor-smiling-43499095.jpg"
    },

    {
      name: "Dr. Sanjana Reddy",
      specialist: "Dental",
      hospital: "Care Hospital",
      image: "https://img.freepik.com/premium-photo/young-successful-indian-female-doctor-standing-hospital_601128-8661.jpg?w=2000"
    },

    {
      name: "Dr. Kiran",
      specialist: "Dental",
      hospital: "Yashoda Hospital",
      image: "https://thumbs.dreamstime.com/b/indian-male-doctor-smiling-front-hospital-young-physician-wearing-white-lab-coat-stethoscope-confidently-camera-406537320.jpg"
    },

    {
      name: "Dr. Meena",
      specialist: "Eyes",
      hospital: "LV Prasad Hospital",
      image: "https://www.shutterstock.com/image-photo/medical-concept-indian-beautiful-female-600nw-1635029716.jpg"
    },

    {
      name: "Dr. Arjun",
      specialist: "Heart",
      hospital: "KIMS Hospital",
      image: "https://as2.ftcdn.net/v2/jpg/02/69/98/99/1000_F_269989951_9Gf7PWaRtrpm2EochO3D5WVn22sFZbNZ.jpg"
    },

    {
      name: "Dr. Sneha",
      specialist: "Skin",
      hospital: "Care Hospital",
      image: "https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg"
    },

    {
      name: "Dr. Rakesh",
      specialist: "ENT",
      hospital: "Apollo Hospital",
      image: "https://img.freepik.com/premium-photo/handsome-indian-male-doctor-posing-with-folded-hands-smiling-camera-hospital_512242-7453.jpg?w=2000"
    },

    {
      name: "Dr. Vinay",
      specialist: "Ortho",
      hospital: "Yashoda Hospital",
      image: "https://cdn.pixabay.com/photo/2023/12/21/06/23/doctor-8461303_1280.jpg"
    },

    {
      name: "Dr. Kavya",
      specialist: "General",
      hospital: "Sunshine Hospital",
      image: "https://img.freepik.com/premium-photo/female-doctor-is-standing-hospital_1146893-194.jpg"
    }

  ]

  const filteredDoctors = doctorList.filter(
    (doctor) => doctor.specialist === selectedCategory
  )

  const handleBooking = (doctor) => {

    alert(
      `✅ Appointment Booked!\n\nDoctor: ${doctor.name}\nSpecialist: ${doctor.specialist}\nHospital: ${doctor.hospital}`
    )

  }

  return (
<div className="doctor-page">
    
        <h1 className="doctor-title">
          🩺 Available Doctors
        </h1>

        {filteredDoctors.map((doctor, index) => (

          <div className="doctor-card" key={index}>

            <img
              src={doctor.image}
              alt={doctor.name}
              className="doctor-image"
            />

            <div className="doctor-details">

              <h2>{doctor.name}</h2>

              <p>
                <strong>Specialist:</strong> {doctor.specialist}
              </p>

              <p>
                <strong>Hospital:</strong> {doctor.hospital}
              </p>

              <button
                className="book-btn"
                onClick={() => handleBooking(doctor)}
              >
                Book Appointment
              </button>

            </div>
            </div>

          

        ))}

      </div>

    

  )
}

export default Doctor