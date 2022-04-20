import React, { Fragment, useState } from "react";



function SearchIssues()
{
    const [searchterm, setSearchTerm] = useState("");

    const onSubmitForm = async (e) =>
    {
        e.preventDefault();
        try
        {
            const response = await fetch(`http://localhost:5000/search/?searchterm=${searchterm}`);
            const parseResponse = await response.json();

            console.log(parseResponse)
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
    </Fragment>
    );
}

export default SearchIssues;