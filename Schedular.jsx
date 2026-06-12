import React, { useState } from 'react'
import Doctor from './Doctor.jsx'


function Schedular({ selectedCategory }) {
 

  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [showDoctors, setShowDoctors] = useState(false)

  const dates = [10, 11, 12, 13, 14]

  const times = [
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "3:00 PM"
  ]

  return (

    <>
      {showDoctors ? (

        <Doctor selectedCategory={selectedCategory} />

      ) : (

        <div className="schedular-container">

          <h1 className="schedule-title">
            📅 Select Schedule
          </h1>

          <h3>Select Date</h3>

          <div className="date-container">

            {dates.map((date, index) => (

              <button
                key={index}
                className={selectedDate === date ? "active-btn" : "date-btn"}
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </button>

            ))}

          </div>

          <h3>Select Time</h3>

          <div className="time-container">

            {times.map((time, index) => (

              <button
                key={index}
                className={selectedTime === time ? "active-btn" : "time-btn"}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>

            ))}

          </div>

          <button
            className="appointment-btn"
            onClick={() => {

              if(selectedDate === "" || selectedTime === "") {

                alert("⚠ Please Select Date And Time")

              } else {

                setShowDoctors(true)

              }

            }}
          >
            Make Appointment
          </button>

        </div>

      )}
    </>

  )
}

export default Schedular