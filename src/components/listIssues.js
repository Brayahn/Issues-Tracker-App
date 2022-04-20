import React, { Fragment, useEffect, useState } from "react";
import EditIsssues from "./EditIssues";
import SearchIssues from "./SearchIssues";

const ListIssues = () =>
{

    const [issues, setIssues] = useState([]);

    //delete function
    const deleteIssue = async (id) =>
    {
        try
        {
            const deleteIssue = await fetch(`http://localhost:5000/issues/${id}`,
                { method: "DELETE" });

            //console.log(deleteIssue);

            //realtime data
            setIssues(issues.filter(issue => issue.tracker_id !== id));
        } catch (err)
        {
            console.error(err.message);
        }
    }

    //List all 
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

            <SearchIssues />
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
                        <tr key={issue.tracker_id}>
                            <td> {issue.project}</td>
                            <td> {issue.issue_description}</td>
                            <td> {issue.resolution}</td>
                            <td> {issue.added_by}</td>
                            <td> {issue.validated}</td>

                            {/*Edit Button*/}
                            <td> < EditIsssues issue={issue} /> </td>

                            {/*Delete Button*/}
                            <td> <button
                                className="btn btn-danger"
                                onClick={() => deleteIssue(issue.tracker_id)}>
                                Delete </button></td>

                        </tr>

                    ))}

                </tbody>
            </table>

        </Fragment>
    );
};

export default ListIssues;