import { useEffect, useState } from "react";

 const url = "https://bdc.designtrade.net/bdc/stores";
const ListOfRecords = () => {
    const [records, setRecords] = useState([]);
     const [initData, setInitData] = useState(false);
    useEffect(() => {
         if (!initData) {
        //     setInitData(true);
            fetch("https://bdc.designtrade.net/bdc/stores")
            .then((response) => response.json())
            .then((data) => {
                setRecords(data.data.data);
                console.log(data.data.data);
            })
            .catch((err) => console.log(err));
         }
    });
    return (
        <div>
            List of records
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.store_name}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListOfRecords;