import React, { useEffect, useState } from "react";
import axios from 'axios';
import Table from "./Table";

const EmployeeData = () => {

    const [EmployeeData, setEmployeeData] = useState([]);
    const [SearchName, setSearcName] = useState(EmployeeData);
    const [sortByStatus, setSortByStatus] = useState(false);
    const [sortByRole, setSortByRole] = useState(false);

    const getData = () => {
        axios.get(`https://mocki.io/v1/67d12549-e5be-4679-ba32-1229a58c692a`)
            .then(Response => {
                setEmployeeData(Response.data);
            })
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <Table
                EmployeeData={EmployeeData}
                SearchName={SearchName}
                setSearcName={setSearcName}
                sortByStatus={sortByStatus}
                setSortByStatus={setSortByStatus}
                sortByRole={sortByRole}
                setSortByRole={setSortByRole}
            />
        </>
    );
};

export default EmployeeData;
