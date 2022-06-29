import React from "react";
import { useState } from "react";

export default function Formoftable() {
  const [Name, setName] = useState();
  console.log(Name);

  const [Mobile, setMobile] = useState();
  console.log(Mobile);

  const [Gender, setGender] = useState();
  console.log(Gender);

  const [Hobbies, setHobbies] = useState([]);
  console.log(Hobbies);

  const [standard, setstandard] = useState();
  console.log(standard);

  const [persons, setPersons] = useState([]);

  const item = (e) => {
    if (e.target.checked == true) {

      var temp = e.target.value;
      console.log(e.target.value);
      Hobbies.push(e.target.value);
      setHobbies(Hobbies);
    } else {
      const index = Hobbies.indexOf(e.target.value);
      if (index > -1) {
        setHobbies(Hobbies.splice(Hobbies.indexOf(e.target.value), 1));
      }
    }
  };

  const save = (e) => {
    e.preventDefault();
    const formDataObj = {
      Name: Name,
      Mobile: Mobile,
      Gender: Gender,
      Hobbies: Hobbies,
      standard: standard,
    };
    setPersons([...persons, formDataObj]);
    setName("");
    setMobile("");
    setGender("");
    setHobbies("");
    setstandard("");
  };

  const Delete = (index) =>
  {
      let tempArry = [...persons];
      tempArry.splice(index,1);
      setPersons(tempArry);
  }

  return (
    <div>
      <form>
        <label for="Name">Name: </label>
        <input
          type="text"
          id="Name"
          name="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <label for="Mobile"> Mobile: </label>
        <input
          type="text"
          name="Mobile"
          value={Mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        <br />
        <label for="Gender"> Gender</label>
        <br />
        <input
          type="radio"
          name="Gender"
          value="male"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Male
        <input
          type="radio"
          name="Gender"
          value="female"
          onChange={(e) => setGender(e.target.value)}
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
          onChange={item}
        />{" "}
        READING <br />
        <input
          type="Checkbox"
          name="Hobbies"
          value="MUSIC"
          onChange={item}
        />{" "}
        MUSIC <br />
        <input
          type="Checkbox"
          name="Hobbies"
          value="GAMES"
          onChange={item}
        />{" "}
        GAMES <br />
        <br />
        <select onChange={(e) => setstandard(e.target.value)}>
          <option value="" disabled>
            Standard
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br /> <br />
        <button onClick={save}>
         Submit
        </button>
        <br /> <br />
      </form>

      );
};
