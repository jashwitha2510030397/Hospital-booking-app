
import React, { useState } from 'react'
import './App.css'
import Schedular from './Schedular'


function App() {

  const [nextPage, setNextPage] = useState(false)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const [showAll, setShowAll] = useState(false)
  const [showSchedular, setShowSchedular] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState("")

  const categories = [
    "Dental",
    "Heart",
    "Eyes",
    "Skin",
    "Neuro",
    "ENT",
    "Ortho",
    "General"
  ]

  return (

    <div
      className={
        !nextPage
          ? "form-page"
          : showSchedular
          ? "schedular-page"
          : "category-page"
      }
    >

      {/* ================= SCHEDULAR PAGE ================= */}

      {showSchedular ? (

        <div className="schedular-page">

          <div> 

            <button
              className="back-btn"
              onClick={() => setShowSchedular(false)}
            >
              ⬅ Back
            </button>

            <Schedular selectedCategory={selectedCategory} />

          </div>

        </div>

      ) : !nextPage ? (

        /* ================= FIRST PAGE ================= */

        <div className="form-container">

          <h1 className="title">
            Hospital Booking System
          </h1>

          <p className="subtitle">
            Book appointments with trusted doctors
          </p>

          {/* NAME */}

          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* PHONE */}

          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* EMAIL */}

          <input
            type="email"
            placeholder="Enter Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* BUTTONS */}

          <div className="button-container">

            {/* SUBMIT */}

            <button
              className="submit-btn"
              onClick={() => {

                if(name === "" || phone === "" || email === "") {

                  alert("⚠ Please Enter All Details")

                } else {

                  alert("✅ Your Information Has Been Submitted")

                }

              }}
            >
              Submit
            </button>

            {/* NEXT */}

            <button
              className="next-btn"
              onClick={() => {

                if(name === "" || phone === "" || email === "") {

                  alert("⚠ Please Enter All Details")

                } else {

                  setNextPage(true)

                }

              }}
            >
              Next
            </button>

          </div>

        </div>

      ) : (

        /* ================= CATEGORY PAGE ================= */

        <div className="category-container">

          <h1 className="welcome">
            👋 Welcome Back {name}
          </h1>

          <div className="category-header">

            <h2>Select Category</h2>

            <p onClick={() => setShowAll(true)}>
              See All
            </p>

          </div>

          <div className="category-boxes">

            {(showAll ? categories : categories.slice(0, 5)).map((item, index) => (

              <div
                className="category-card"
                key={index}

                onClick={() => {

                  setSelectedCategory(item)
                  setShowSchedular(true)

                }}

              >
                {item}

              </div>

            ))}

          </div>

        </div>

      )}

    </div>

  )
}

export default App