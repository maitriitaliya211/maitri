import React, { useEffect } from "react";
import { useState } from "react";
import List from "./List";
import { Link } from "react-router-dom";
// import { useSearchParams } from 'react-router-dom';

export default function Studentform() {
  const [Student, setStudent] = useState([]);

  const [Name, setName] = useState();

  const [mobile, setmobile] = useState();

  const [Image, setImage] = useState();

  const [Course, setCourse] = useState();

  const [Studentindex, setStudentindex] = useState(-1);

  const [Search, setSearch] = useState();

  const save = (e) => {
    const form = {
      Name: Name,
      mobile: mobile,
      Image: Image,
      Course: Course,
    };
    const oldstudent = localStorage.getItem("Student");
    let oldrecords = [];
    if (oldstudent) {
      oldrecords = JSON.parse(oldstudent);
    }
    

    const URL = new URLSearchParams(window.location.search);

    if ((URL.has(`Edit`))) {
      let temp = URL.get(`Edit`);
      

      if (temp > -1) {
        let tempArr = JSON.parse(localStorage.getItem("Student"));
        tempArr[temp] = form;
        localStorage.setItem("Student", JSON.stringify(tempArr));
      } 
    } else {
      setStudent([...Student, form]);
      localStorage.setItem("Student", JSON.stringify([...oldrecords, form]));
    }   
  };

  // const filter = (e) => {
  //   const keyword = e.target.value;

  //   if (keyword !== "") {
  //     const results = Student.filter((user) => {
  //       return user.name.toLowerCase().startsWith(keyword.toLowerCase());
  //       // Use the toLowerCase() method to make it case-insensitive
  //     });
  //     setFoundUsers(results);
  //   } else {
  //     setFoundUsers(Student);
  //     // If the text field is empty, show all users
  //   }

  //   setName(keyword);
  // };

  return (
    <div>
      <form>
        <br />
        <label for="Name">Name: </label>
        <input
          type="text"
          id="Name"
          name="Name"
          placeholder="Enter Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <label for="mobile">Mobile:</label>
        <input
          type="tel"
          id="mobile"
          placeholder="Enter Mobile No."
          value={mobile}
          onChange={(e) => {
            setmobile(e.target.value);
          }}
        />
        <br /> <br />
        <label for="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={(e) => setImage(e.target.value)}
        />
        <br /> <br />
        <label for="course">Course:</label>
        <select id="course" onChange={(e) => setCourse(e.target.value)}>
          <option>Courses</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <br /> <br />
        <Link to={"list"}>
          <button onClick={save}>Submit</button>
        </Link>
        <br /> <br />
        <input
          id="Search"
          // variant="outlined"
          fullWidth
          label="Search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {/* <List data={Student} /> */}
      {/* <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span>{user.Name}</span>
              <span>{user.mobile}</span>
              <span>{user.Image}</span>
              <span>{user.Course}</span>
            </li>
          ))
        ) : (
          <h1></h1>
        )} */}
      {/* </div> */}
      <br /> <br />
      {/* <table border={2} cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Image</th>
            <th>Course</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Student.map((Student, index) => {
            return (
              <tr>
                <td>{Student.Name}</td>
                <td>{Student.mobile}</td>
                <td>{Student.Image}</td>
                <td>{Student.Course}</td>
                <td>{<button onClick={() => Edit(index)}>Edit</button>}</td>
                <td>{<button onClick={() => remove(index)}>Remove</button>}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
}
