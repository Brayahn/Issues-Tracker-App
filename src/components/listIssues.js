import React, { Fragment, useEffect, useState } from "react";

const ListIssues = () =>
{

    const [issues, setIssues] = useState([]);

    const getIssues = async () =>
    {
        try
        {
            const response = await fetch("http://localhost:5000/issues/");
            const jsonData = await response.json();

            setIssues(jsonData);
            // console.log(jsonData);
        } catch (err)
        {
            console.error(err.message);
        }
    }

    useEffect(() =>
    {
        getIssues();
    }, []);

    console.log(issues);

    return (
        <Fragment>  <h3 className="text-center mt-2"> All Issues </h3>


            <table class="table mt-5 text-center" >
                <thead>
                    <tr>
                        <th>Project </th>
                        <th>Issue Description</th>
                        <th>Resolution</th>
                        <th>Added By</th>
                        <th>Validated</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map(issue => (
                        <tr>
                            <td> {issue.project}</td>
                            <td> {issue.issue_description}</td>
                            <td> {issue.resolution}</td>
                            <td> {issue.added_by}</td>
                            <td> {issue.validated}</td>
                            <td> Edit</td>

                            
                            <td> <button className="btn btn-danger"> Delete </button></td>
                        </tr>

                    ))}

                </tbody>
            </table>

        </Fragment>
    );
};

export default ListIssues;