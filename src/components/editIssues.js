import React, { Fragment, useState } from "react";

const EditIsssues = ({ issue }) =>
{
    const [project, setProject] = useState(issue.project);
    const [issue_description, setIssueDescription] = useState(issue.issue_description);
    const [resolution, setResolution] = useState(issue.resolution);
    const [added_by, setAddedBy] = useState(issue.added_by);
    const [validated, setValidated] = useState(issue.validated);

    console.log(issue);
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
                        />
                        <br />
                        <textarea
                            className="form-control"
                            placeholder="Issue Description"
                            rows="3"
                            value={issue_description}
                        /><br />
                        <textarea
                            className="form-control"
                            placeholder="Resolution"
                            rows="3"
                            value={resolution}
                        /><br />
                        <input type='text'
                            className="form-control"
                            placeholder="Added By"
                            value={added_by}
                        /><br />
                        <input type='text'
                            className="form-control"
                            placeholder="Validated"
                            value={validated}
                        />
                    </div>



                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning" data-dismiss="modal">Edit</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>



    </Fragment>



}


export default EditIsssues; 