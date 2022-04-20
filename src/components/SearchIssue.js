import React, { Fragment, useState } from "react";


const SearchIssue = ({ issue }) =>
{
    const [project, setProject] = useState(issue.project);
    const [issue_description, setIssueDescription] = useState(issue.issue_description);
    const [resolution, setResolution] = useState(issue.resolution);
    const [added_by, setAddedBy] = useState(issue.added_by);
    const [validated, setValidated] = useState(issue.validated);

    //Search function 
    const [issue, setIssue] = useState("");

    <Fragment>

        <input type="text"
            placeholder="Search ..."
            className="search"
            onChange={(e) => setIssue(e.target.value)}
        >

        </input>
    </Fragment>

}


export default SearchIssue;