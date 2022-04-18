import React, { Fragment, useState } from "react";

const NewIssue = () =>
{
    const [project, setProject] = useState("Project Name");
    const [issue_description, setIssueDescription] = useState("Issue Description");
    const [resolution, setResolution] = useState("Resolution Measures");
    const [added_by, setAddedBy] = useState("Added By: ");
    const [validated, setValidated] = useState("Validated");

    const onSubmitForm = async (e) =>
    {
        e.preventDefault();
        try
        {
            const body = { project, issue_description, resolution, added_by, validated };
            const response = await fetch("http://localhost:5000/newissues/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
        } catch (err)
        {
            console.error(err.message)
        }
    }


    return (
        <Fragment>
            <h1 className="text-center mt-5"> Mobile Technologies Issues Tracker </h1>
            <form className="d-flex " onSubmit={onSubmitForm}>

                <input type='text'
                    className="form-control"
                    value={project}
                    onChange={e => setProject(e.target.value)}
                />

                <input type='text'
                    className="form-control"
                    value={issue_description}
                    onChange={e => setIssueDescription(e.target.value)}
                />

                <input type='text'
                    className="form-control"
                    value={resolution}
                    onChange={e => setResolution(e.target.value)}
                />

                <input type='text'
                    className="form-control"
                    value={added_by}
                    onChange={e => setAddedBy(e.target.value)}
                />

                <input type='text'
                    className="form-control"
                    value={validated}
                    onChange={e => setValidated(e.target.value)}
                />

                <button className="btn btn-success"> Search Issue </button>
            </form>

        </Fragment>
    );
}

export default NewIssue;