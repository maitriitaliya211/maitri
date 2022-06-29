import React from 'react';
import { useEffect } from "react";
import { useState } from "react";


function Table(props){
    console.log(props);
    const [persons, setPersons] = useState([]);
    // useEffect(() => {
    //     if (localStorage.getItem("persons")) {
    //         console.log("goes in 1");
    //         const data = JSON.parse(localStorage.getItem("persons"));
    //         if (data.length !== persons.length) {
    //             console.log("goes in 2");
    //             setPersons(JSON.parse(localStorage.getItem("persons")));
    //         }
    //     }
    // });
    // const removePerson = (index) => {
    //     let copyArry = [...persons];
    //     copyArry.splice(index,1);
    //     setPersons(copyArry);
    //     localStorage.setItem("persons", JSON.stringify(copyArry));
    // };
    return(
        <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th>standard</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => {
            return (
              <tr>
                <td>{person.Name}</td>
                <td>{person.Mobile}</td>
                <td>{person.Gender}</td>
                <td>{person.Hobbies.join(",")}</td>
                <td>{person.standard}</td>
                <td>{<button>Edit</button>}</td>
                <td>{<button onClick={() => props.onDelete(index)}>Delete</button>}</td>
                <td scope="col">
                  {
                    <button
                      
                      // onClick={() => removePerson(index)}
                    >
                      Remove
                    </button>
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
};

    
export default Table;