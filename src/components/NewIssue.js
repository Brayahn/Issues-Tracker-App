import React, { Fragment, useState } from "react";

const NewIssue = () =>
{
    const [project, setProject] = useState("New Issue");

    const onSubmitForm = async (e) =>
    {
        e.preventDefault();
        try
        {
            const body = { project };
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
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>

                <input type='text'
                    className="form-control"
                    value={project}
                    onChange={e => setProject(e.target.value)}
                />

                <button className="btn btn-success"> Search Issue </button>
            </form>

        </Fragment>
    );
}

export default NewIssue;