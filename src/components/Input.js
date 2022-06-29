import { computeHeadingLevel } from "@testing-library/react";
import React, { useState } from "react";
import "../App.css";
const ListOfForm = () => {
  let [person, setperson] = useState([]);
    

  const [Name, setName] = useState();
  console.log(Name);

  const [Mobile, setMobile] = useState();
  console.log(Mobile);

  const [Gender, SetGender] = useState();
  console.log(Gender);

  const [Hobbies, setHobbies] = useState([]);
  console.log(Hobbies);

  const [std, Setstd] = useState();
  console.log(std);

  const formDataObj = {      
    "Name":Name,
    "Mobile ":Mobile,
    "Gender":Gender,
    "Hobbies":Hobbies,
  };
  const save=(e) => 
      {
       e.preventDefault();
        setperson ([...person, formDataObj]);
        setName("");
        setMobile("");
        SetGender("");
        setHobbies ("");

      }

  return (
    <div>
      <form method="post" onSubmit={save}>
        <br />
        <label for="Name">Name:</label>
        <input
          type="text"
          id="Name"
          name="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label for="Mobile"> Mobile </label>
        <input
          type="text"
          name="Mobile"
          value={Mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        <br />
        <label for="phone"> Gender</label>
        <br />
        <input
          type="radio"
          name="Gender"
          value="male"
          onChange={(e) => SetGender(e.target.value)}
        />{" "}
        Male
        <input
          type="radio"
          name="Gender"
          value="female"
          onChange={(e) => SetGender(e.target.value)}
        />{" "}
        Female
        <br />
        <br />
        <label>Hobbies</label>
        <br />
        <input
          type="Checkbox"
          name="Hobbies"
          value="READING"
          onChange={(e) => {
            console.log(e.target.checked);
            let updatedList = [...Hobbies];
            if (e.target.checked == true) {
              Hobbies.push(e.target.value);
              setHobbies(Hobbies);
              console.log(Hobbies);
            } else {
              updatedList.slice(Hobbies.indexOf(e.target.value), 1);
            }
          }}
        />{" "}
        READING <br />
        <input
          type="Checkbox"
          name="Hobbies"
          value="MUSIC"
          onChange={(e) => {
            console.log(e.target.checked);
            let updatedList = [...Hobbies];
            if (e.target.checked == true) {
              Hobbies.push(e.target.value);
              setHobbies(Hobbies);
              console.log(Hobbies);
            } else {
              updatedList.slice(Hobbies.indexOf(e.target.value), 1);
            }
          }}
        />{" "}
        MUSIC <br />
        <input
          type="Checkbox"
          name="Hobbies"
          value="GAMES"
          onChange={(e) => {
            console.log(e.target.checked);
            let updatedList = [...Hobbies];
            if (e.target.checked == true) {
              Hobbies.push(e.target.value);
              setHobbies(Hobbies);
              console.log(Hobbies);
            } else {
              updatedList.slice(Hobbies.indexOf(e.target.value), 1);
            }
          }}
        />{" "}
        GAMES <br />
        <br />
        <select onChange={(e) => Setstd(e.target.value)}>
          <option value="" disabled>
            Standard
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br /> <br />
        <input type="submit" value="Submit" />
        <br /> <br />
      </form>

    
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            person.map((person, index) => {
             return (
              <tr>
                {/* <td>{index + 1}</td> */}
                <td>{person.Name}</td>
                <td>{person.Mobile }</td>
                <td>{person.Gender}</td>
                 <td>{person.Hobbies.join(",")}</td>
              </tr>
             );
           })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ListOfForm;
