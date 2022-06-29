import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function List() {

  const [Student, setStudent] = useState([]);
  console.log(Student);

  useEffect(() => 
  {
      if (localStorage.getItem("Student")) 
      {
          const data = JSON.parse(localStorage.getItem("Student"));
          if (data.length !== Student.length)
           {
              setStudent(JSON.parse(localStorage.getItem("Student")));
           }
      }
  });

  const remove = (index) => {
    let copyArry = [...Student];
    copyArry.splice(index, 1);
    setStudent(copyArry);
    localStorage.setItem("Student", JSON.stringify(copyArry));
  };

    return(
        <table border={2} cellPadding={10}>
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
              <tr key={index}>
                <td>{Student.Name}</td>
                <td>{Student.mobile}</td>
                <td>{Student.Image}</td>
                <td>{Student.Course}</td>
               <Link to = {`/?Edit=${index}`}> <td>{<button>Edit</button>}</td></Link>
                <td>{<button onClick={() => remove(index)}>Remove</button>}</td>

                 
                
              </tr>
            );
          })}
        </tbody> 
      </table>
    )
}


// if (temp > -1) {
      //   let tempArr = JSON.parse(localStorage.getItem("Student"));
      //   console.log(tempArr[temp]);
      //   tempArr[temp] = form;
      //   console.log( tempArr[temp]);
      //   localStorage.setItem("Student", JSON.stringify(tempArr));
      // } else {
      //   setStudent([...Student, form]);
      //   localStorage.setItem("Student", JSON.stringify([...oldrecords, form]));
      // }