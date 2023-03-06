import React from "react";
import './Table.css'

const Table = ({ EmployeeData, SearchName, setSearcName, sortByStatus, setSortByStatus, sortByRole, setSortByRole }) => {


    // Search Name Functionality
    const onChange = (event) => {
        setSearcName(event.target.value.toLowerCase());
    }
    const FilterName = EmployeeData.filter((data) => data.name.toLowerCase(SearchName).includes(SearchName));



    // Sort Functionality
    let sortedData = FilterName;

    if (sortByStatus) {
        sortedData = [...sortedData].sort((a, b) => a.status.localeCompare(b.status));
    }
    if (sortByRole) {
        sortedData = [...sortedData].sort((a, b) => a.status.localeCompare(b.status));
    }

    const ShortStatus = () => {
        setSortByStatus(!sortByStatus);
    }

    const ShortRole = () => {
        setSortByRole(!sortByRole);
    }





    return (
        <>

            <table>
                <thead>
                    <tr>
                        <th>Name <input type="text" placeholder="Search by name" onChange={onChange} /> </th>
                        <th className="cursor-pointer" onClick={ShortStatus}>Status🔼🔽</th>
                        <th className="cursor-pointer" onClick={ShortRole}>Role🔼🔽</th>
                        <th>Email</th>
                        <th>Teams</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedData.length > 0 ? sortedData.map((Data, id) => {

                            const teams = typeof Data.teams === 'string' ? null : Data.teams;

                            return (
                                <React.Fragment key={id}>
                                    <tr>
                                        <td>
                                            {Data.name}
                                            <h6 className="username mt-2">@{Data.username}</h6>
                                        </td>
                                        <td>
                                            {
                                                Data.status === 'working' ? <div className="badge rounded-pill bg-info text-dark">
                                                    {Data.status}
                                                </div>
                                                    : <div className="badge rounded-pill bg-danger">{Data.status}</div>
                                            }
                                        </td>
                                        <td>{Data.role}</td>
                                        <td>{Data.email}</td>
                                        <td>
                                            {
                                                teams.length > 0 ?
                                                    <>
                                                        {
                                                            teams.slice(0, 3).map((team, id) => {
                                                                return (
                                                                    <span className="badge rounded-pill bg-info text-dark m-1"
                                                                        key={id}>
                                                                        {team}
                                                                    </span>
                                                                )
                                                            })
                                                        }
                                                        {
                                                            teams.length > 3 && <span className="badge bg-secondary rounded-pill m-1">
                                                                +{teams.length - 3}
                                                            </span>
                                                        }
                                                    </>
                                                    : null
                                            }
                                        </td>
                                    </tr>
                                </React.Fragment>
                            )
                        })
                            : <tr>
                                <td>
                                    <h6>No User Found</h6>
                                </td>
                            </tr>
                    }

                </tbody>
            </table>
        </>
    );
};

export default Table;
