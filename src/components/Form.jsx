import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent } from "../redux/slices/studentSlice";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState(null);
  const [contact, setContact] = useState(null);
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [favoriteSubject, setFavoriteSubject] = useState("");
  const [aboutYourSelf, setAboutYourSelf] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const studentsData = useSelector((store) => store.student);
  const uniqueStudent = (email, rollNo, contact) => {
    for (let i = 0; i < studentsData.length; i++) {
      if (
        studentsData[i].email === email ||
        studentsData[i].rollNo === rollNo ||
        studentsData[i].contact === contact
      ) {
        setError("email or rollNo or Contact number already Exist");
        console.log(error)
        return false;
      }
    }
    dispatch(
      addStudent({
        firstName,
        lastName,
        email,
        rollNo,
        contact,
        gender,
        dateOfBirth,
        favoriteSubject,
        aboutYourSelf,
      })
    );
    setFirstName("")
    setLastName("")
    setEmail("")
    setRollNo(null)
    setContact(null)
    setGender("")
    setDateOfBirth(null)
    setFavoriteSubject("")
    setAboutYourSelf("")
    setError("")
    console.log("student added to DB");
  };

  const submitHandler = (e) => {
  e.preventDefault()
    if (studentsData && studentsData.length > 0) {
      uniqueStudent(email, rollNo, contact);
    } else {
      dispatch(
        addStudent({
          firstName,
          lastName,
          email,
          rollNo,
          contact,
          gender,
          dateOfBirth,
          favoriteSubject,
          aboutYourSelf,
        })
      );
      setFirstName("")
    setLastName("")
    setEmail("")
    setRollNo(null)
    setContact(null)
    setGender("")
    setDateOfBirth(null)
    setFavoriteSubject("")
    setAboutYourSelf("")
    setError("")
      console.log("student added to DB");
    }
  };

  return (
    <div>
      <h2>Student Signup Form</h2>
      <form
        onSubmit={submitHandler}
        action=""
      >
      <label htmlFor="firstName">First Name - </label>
      <input
        type="text"
        placeholder="FirstName"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <label htmlFor="lastName">Last Name - </label>
      <input
        type="text"
        placeholder="LastName"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <label htmlFor="email">Email - </label>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <label htmlFor="rollNo">Roll no. - </label>
      <input
        type="number"
        placeholder="Roll no."
        onChange={(e) => {
          setRollNo(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <label htmlFor="contact">Contact - </label>
      <input
        type="number"
        placeholder="Phone number"
        onChange={(e) => {
          setContact(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <input
        type="radio"
        id="gender"
        name="gender"
        value="male"
        onChange={(e) => {
          setGender("male");
        }}
      />
      <label htmlFor="gender">Male</label>
      <input
        type="radio"
        id="gender"
        name="gender"
        value="female"
        onChange={(e) => {
          setGender("female");
        }}
      />
      <label htmlFor="gender">Female</label>
      <input
        type="radio"
        id="gender"
        name="gender"
        value="other"
        onChange={(e) => {
          setGender("other");
        }}
      />
      <label htmlFor="gender">Other</label> <br />
      <br />
      <label htmlFor="dateOfBirth">Date of Birth - </label>
      <input
        type="date"
        placeholder="Phone number"
        onChange={(e) => {
          setDateOfBirth(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <label htmlFor="firstName">Favorite subject - </label>
      <select
        onChange={(e) => {
          setFavoriteSubject(e.target.value);
        }}
      >
        <option>English</option>
        <option>Hindi</option>
        <option>Math</option>
        <option>Science</option>
        <option>Social Scince</option>
      </select>{" "}
      <br />
      <br />
      <label htmlFor="about">About YourSelf - </label>
      <input
        type="text"
        placeholder="tell me about yourself"
        onChange={(e) => {
          setAboutYourSelf(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <button type="submit">
        Submit
      </button>
      </form>
    </div>
  );
};

export default Form;
