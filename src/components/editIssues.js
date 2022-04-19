import React, { Fragment, useState } from "react";

const EditIsssues = ({ issue }) =>
{
    const [project, setProject] = useState(issue.project);
    const [issue_description, setIssueDescription] = useState(issue.issue_description);
    const [resolution, setResolution] = useState(issue.resolution);
    const [added_by, setAddedBy] = useState(issue.added_by);
    const [validated, setValidated] = useState(issue.validated);

    console.log(issue);


    //edit fields function
    const updateProject = async (e) =>
    {
        e.preventDefault();
        try
        {
            const body = { project, issue_description, resolution, added_by, validated };
            const response = await fetch(`http://localhost:5000/issue/${issue.tracker_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            console.log(response);
        } catch (err)
        {
            console.error(err.message);
        }
    }

    return <Fragment>

        <button type="button" class="btn btn-warning"
            data-toggle="modal"
            data-target={`#id${issue.tracker_id}`}>
            {/*  Modal to capture specific ID (above)*/}

            Edit

        </button>

        {/*  Modal to capture specific ID */}
        <div class="modal" id={`id${issue.tracker_id}`}>
            <div class="modal-dialog">
                <div class="modal-content">


                    <div class="modal-header">
                        <h4 class="modal-title">Edit Issue </h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>


                    <div class="modal-body mt-3">
                        <input type='text'
                            className="form-control"
                            placeholder="Project Name"
                            value={project}
                            onChange={e => setProject(e.target.value)}
                        />
                        <br />
                        <textarea
                            className="form-control"
                            placeholder="Issue Description"
                            rows="3"
                            value={issue_description}
                            onChange={e => setIssueDescription(e.target.value)}
                        /><br />
                        <textarea
                            className="form-control"
                            placeholder="Resolution"
                            rows="3"
                            value={resolution}
                            onChange={e => setResolution(e.target.value)}
                        /><br />
                        <input type='text'
                            className="form-control"
                            placeholder="Added By"
                            value={added_by}
                            onChange={e => setAddedBy(e.target.value)}
                        /><br />
                        <input type='text'
                            className="form-control"
                            placeholder="Validated"
                            value={validated}
                            onChange={e => setValidated(e.target.value)}
                        />
                    </div>



                    <div class="modal-footer">
                        <button type="button"
                            class="btn btn-warning"
                            data-dismiss="modal"
                            onClick={e => updateProject(e)}>

                            Edit</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>



    </Fragment>



}


export default EditIsssues; 