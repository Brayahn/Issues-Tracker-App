import React, { Fragment, useState } from "react";


function SearchIssues()
{
    const [searchterm, setSearchTerm] = useState("");

    const [result, setResult] = useState([]);

    const onSubmitForm = async (e) =>
    {
        e.preventDefault();
        try
        {
            const response = await fetch(`http://localhost:5000/search/?searchterm=${searchterm}`);
            const parseResponse = await response.json();

            //console.log(parseResponse)
            setResult(parseResponse);
        } catch (err)
        {
            console.error(err.message);
        }
    }
    return (<Fragment>
        <form className="d-flex" onSubmit={onSubmitForm}>
            <input
                type="text"
                name="search_box"
                placeholder="Search ..."
                value={searchterm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-success">Search</button>

        </form>

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
                {result.map(results => (
                    <tr key={results.tracker_id}>
                        <td> {results.project}</td>
                        <td> {results.issue_description}</td>
                        <td> {results.resolution}</td>
                        <td> {results.added_by}</td>
                        <td> {results.validated}</td>

                    </tr>

                ))}

            </tbody>
        </table>

    </Fragment>
    );
}

export default SearchIssues;