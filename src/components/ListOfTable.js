import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const url = "https://bdc.designtrade.net/bdc/stores";
const ListOfTable = () => {
    const [records, setRecords] = useState([]);
    const [initData, setInitData] = useState(false);
    useEffect(() => {
        if (!initData) {
            setInitData(true);
            fetch(url)
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
            List of table
            <Link to="/records">
                Go to records
            </Link>
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Emil</th>
                        <th>Mobile No.</th>
                        <th>Social</th>
                        <th>Zip</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td><a href="https://www.facebook.com/carlislewideplankfloors" target="_blank">{item.social.fb}</a></td>
                                    <td>{item.zip}</td>
                                    <td><img  className="image" src="https:\/\/designtrade.net\/wp-content\/uploads\/2020\/06\/Screen-Shot-2020-06-26-at-11.29.54-AM-e1593185560577.jpg" alt="" /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListOfTable;