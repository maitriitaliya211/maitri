
import React, { useEffect } from "react";
import { useState } from "react";

export default function Secondtable(props) 
{
    const [persons, setPersons] = useState([]);
    useEffect(() => 
    {
        if (localStorage.getItem("persons")) 
        {
            console.log("goes in 1");
            const data = JSON.parse(localStorage.getItem("persons"));
            if (data.length !== persons.length)
             {
                console.log("goes in 2");
                setPersons(JSON.parse(localStorage.getItem("persons")));
             }
        }
    });
  
   


  return (
    <>
    
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>No.</th>
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
          {props.data.map((person, index) => 
          {
            return (
              <tr>
                <td>{index + 1 }</td> 
                <td>{person.Name}</td>
                <td>{person.Mobile}</td>
                <td>{person.Gender}</td>
                <td>{person.Hobbies}</td>
                <td>{person.standard}</td>
                {/* <td>{<button>Edit</button>}</td> */}
                {/* <td>{<button onClick={() => props.onDelete(index)}>Delete</button>}</td> */}
                <td>{<button onClick={() => props.update(index)}>Edit</button>}</td>
                <td>
                  {
                    <button
                      onClick={() => props.onDelete(index)}
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
    </>
  );
}
