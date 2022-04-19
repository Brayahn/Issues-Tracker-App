import React, { Fragment, useState } from "react";


const NewIssue = () =>
{
    const [project, setProject] = useState("");
    const [issue_description, setIssueDescription] = useState("");
    const [resolution, setResolution] = useState("");
    const [added_by, setAddedBy] = useState("");
    const [validated, setValidated] = useState("");

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

            },
            );

            //console.log(response);
            window.location = "/";
        } catch (err)
        {
            console.error(err.message)
        }
    }


    return (
        <Fragment>

            <h2 className="text-center mt-2"> Issues Tracker </h2>

            <form onSubmit={onSubmitForm}>


                <div class="mb-3 ">
                    <input type='text'
                        className="form-control"
                        placeholder="Project Name"
                        value={project}
                        onChange={e => setProject(e.target.value)}


                    />
                </div>
                <div class="mb-3 ">
                    <textarea
                        className="form-control"
                        placeholder="Describe Issue"
                        rows="3"
                        value={issue_description}
                        onChange={e => setIssueDescription(e.target.value)}
                    /></div>

                <div class="mb-3 ">
                    <textarea
                        className="form-control"
                        placeholder="Resolution"
                        rows="3"
                        value={resolution}
                        onChange={e => setResolution(e.target.value)}
                    />
                </div>

                <div class="mb-3 ">
                    <input type='text'
                        className="form-control"
                        placeholder="Added By"
                        value={added_by}
                        onChange={e => setAddedBy(e.target.value)}
                    />
                </div>

                <div class="mb-3 ">
                    <input type='text'
                        className="form-control"
                        placeholder="Validated? Yes / No"
                        value={validated}
                        onChange={e => setValidated(e.target.value)}
                    />
                </div>
                <button className="btn btn-success"> New Issue </button>
            </form>

        </Fragment>
    );
}

export default NewIssue;