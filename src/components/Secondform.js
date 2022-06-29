import React from "react";
import { useState } from "react";
import Secondtable from "./Secondtable";

export default function Secondform() 
{
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

  const[Editofindex, setEditofindex] = useState(-1);
  console.log(Editofindex);

  const [persons, setPersons] = useState([]);
  const item = (e) => 
  {
    if (e.target.checked == true) 
    {
      var temp = e.target.value;
      console.log(e.target.value);
      Hobbies.push(e.target.value);
      setHobbies(Hobbies);
    } 
    else 
    {
      const index = Hobbies.indexOf(e.target.value);
      if (index > -1)
      {
        setHobbies(Hobbies.splice(Hobbies.indexOf(e.target.value), 1));
      }
    }
  };
  const removePerson = (index) => 
  {
      let copyArry = [...persons];
      copyArry.splice(index,1);
      setPersons(copyArry);
      localStorage.setItem("persons", JSON.stringify(copyArry));
  };

  const Edit = (index) =>
  {
     let copyArry =[...persons][index];
     setEditofindex(index); 
     localStorage.setItem("persons", JSON.stringify(persons,copyArry));
     setName(copyArry.Name);
     setMobile(copyArry.Mobile);
     setGender(copyArry.Gender);
     setHobbies(copyArry.Hobbies);
     setstandard(copyArry.standard); 
  };
  const save = (e) => 
  {
    e.preventDefault();
    const formDataObj = 
    {
      Name: Name,
      Mobile: Mobile,
      Gender: Gender,
      Hobbies: Hobbies,
      standard: standard,
    };

    if (Editofindex > -1) 
    {
      let tempArr = persons;
      tempArr[Editofindex] = formDataObj;
      setPersons(tempArr);
      localStorage.setItem("persons", JSON.stringify(tempArr));
    }
    else
    {
      setPersons([...persons, formDataObj]);
      localStorage.setItem("persons", JSON.stringify([...persons, formDataObj]));
    };

    setName("");
    setMobile("");
    setGender("");
    setHobbies([]);
    setEditofindex(-1);
    setstandard("");

    var k = document.getElementsByClassName('read');

    for (let i = 0; i < k.length ; i++) {
        k[i].checked = false;
    }
  };


  const Remove = (index) => 
  {
    let Remove = [...persons];
    Remove.splice(index, 1);
    setPersons(Remove);
  };
  return (
    <>
      <form>
        <br />
        <label for="Name">Name: </label>
        <input
          type="text"
          id="Name"
          name="Name"
          value={Name}
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
        className="read"
          type="radio"
          name="Gender"
          value="male"
          onChange={(e) => setGender(e.target.value)}
        />
        Male
        <input
        className="read"
          type="radio"
          name="Gender"
          value="female"
          onChange={(e) => setGender(e.target.value)}
        />
        Female
        <br />
        <br />
        <label>Hobbies</label>
        <br />
        <input type="Checkbox"  className="read" name="Hobbies" value="READING" onChange={item} />
        READING <br />
        <input type="Checkbox" className="read" name="Hobbies" value="MUSIC" onChange={item} />
        MUSIC <br />
        <input type="Checkbox" className="read" name="Hobbies" value="GAMES" onChange={item} />
        GAMES <br />
        <br />
        <select onChange={(e) => setstandard(e.target.value)}>
          <option value="disabled" >
            Standard
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br /> <br />
        <button onClick={save}>Submit</button>
        <br /> <br />
      </form>

      <Secondtable data={persons} onDelete={removePerson} update={Edit} />
    </>
    // //   <table border={1} cellPadding={10}>
    //     <thead>
    //     <tr>
    //     <th>Name</th>
    //       <th>Mobile</th>
    //       <th>Gender</th>
    //       <th>Hobbies</th>
    //       <th>standard</th>
    //       <th>Edit</th>
    //       <th>Delete</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {persons.map((person, index) => {
    //       return (
    //         <tr>
    //           <td>{person.Name}</td>
    //           <td>{person.Mobile}</td>
    //           <td>{person.Gender}</td>
    //           <td>{person.Hobbies.join(",")}</td>
    //           <td>{person.standard}</td>
    //           <td>{<button>Edit</button>}</td>
    //           <td>{<button onClick={() => props.onDelete(index)}>Delete</button>}</td>
    //           <td>
    //                         {/* <td>{<button onClick={() => Edit(index)}>Edit</button>}</td> */}

    //                     </tr>
    //                 )
    //             })
    //         }
    //     </tbody>
    //   </table>
    // </>
  );
}






