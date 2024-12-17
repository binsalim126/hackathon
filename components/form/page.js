import "./style.css" 

import React from "react";

export default function Form({ input, updateForm} ) {
  // Dummy Data Object
  const dummyData = {
    fullName: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "1234567890",
    schoolCollege: "XYZ University",
    state: "California",
    place: "San Francisco",
    interestedArea: "Web Development",
    class: 12,
    age: 25,
    skill: "React, Node.js",
    gender: "male",
  };

  


  return (
    <div className="container">
      <h1>PERSONAL INFORMATION</h1>
      <form action="#">
        <div className="main-user-info">
          {/* Full Name */}
          <div className="user-input-box">
            <label htmlFor="Full-Name">Full Name</label>
            <input
              type="text"
              placeholder={input ? "Enter Full Name" : ""}
              defaultValue={!input ? dummyData.fullName : ""}
            />
          </div>

          {/* Email */}
          <div className="user-input-box">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              placeholder={input ? "Enter your Email" : ""}
              defaultValue={!input ? dummyData.email : ""}
            />
          </div>

          {/* Phone Number */}
          <div className="user-input-box">
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input
              type="text"
              placeholder={input ? "Enter Phone Number" : ""}
              defaultValue={!input ? dummyData.phoneNumber : ""}
            />
          </div>

          {/* School/College */}
          <div className="user-input-box">
            <label htmlFor="School/college">School/College</label>
            <input
              type="text"
              placeholder={input ? "School/College" : ""}
              defaultValue={!input ? dummyData.schoolCollege : ""}
            />
          </div>

          {/* State */}
          <div className="user-input-box">
            <label htmlFor="state">State</label>
            <input
              type="text"
              placeholder={input ? "Enter your State" : ""}
              defaultValue={!input ? dummyData.state : ""}
            />
          </div>

          {/* Place */}
          <div className="user-input-box">
            <label htmlFor="Place">Place</label>
            <input
              type="text"
              placeholder={input ? "Enter your Place" : ""}
              defaultValue={!input ? dummyData.place : ""}
            />
          </div>

          {/* Interested Area */}
          <div className="user-input-box">
            <label htmlFor="Interested Area">Interested Area</label>
            <input
              type="text"
              placeholder={input ? "Interested Area" : ""}
              defaultValue={!input ? dummyData.interestedArea : ""}
            />
          </div>

          {/* Class */}
          <div className="user-input-box">
            <label htmlFor="Class">Class</label>
            <input
              type="number"
              placeholder={input ? "Enter your Class" : ""}
              defaultValue={!input ? dummyData.class : ""}
            />
          </div>

          {/* Age */}
          <div className="user-input-box">
            <label htmlFor="Age">Age</label>
            <input
              type="number"
              placeholder={input ? "Enter your Age" : ""}
              defaultValue={!input ? dummyData.age : ""}
            />
          </div>

          {/* Skill */}
          <div className="user-input-box">
            <label htmlFor="Skill">Skill</label>
            <input
              type="text"
              placeholder={input ? "Enter your Skill" : ""}
              defaultValue={!input ? dummyData.skill : ""}
            />
          </div>

          {/* Gender */}
          <div className="gender-details-box">
            <span className="genter-title">Gender</span>
            <div className="genter-catogory">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={!input && dummyData.gender === "male"}
                readOnly
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={!input && dummyData.gender === "female"}
                readOnly
              />
              <label htmlFor="female">Female</label>
            </div>
              {/* Submit Button */}
          <div className="form-submit-btn" >
            <input type="submit" value={!input ? "Edit" : "Update"}
              onClick={updateForm}
            />
          </div>
          </div>

        </div>
      </form>
    </div>
  );
}
