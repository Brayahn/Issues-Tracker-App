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


                <div class="input-group mb-3">
                    <label class="input-group-text" >Project</label>
                    <select class="form-select" onChange={e => setProject(e.target.value)}>
                        <option selected >Choose...</option>
                        <option value="BTCOBHR">BTCOBHR</option>
                        <option value="">GULFTHA</option>
                        <option value="">KORIRQ</option>
                        <option value="">LYCABHR</option>
                        <option value="">MOOVBEN</option>
                        <option value="">MTNA</option>
                        <option value="">MTNB</option>
                        <option value="">MTNC</option>
                        <option value="">MTNCB</option>
                        <option value="">MTNG</option>
                        <option value="">MTNSS</option>
                        <option value="">MTNU</option>
                        <option value="">MTNZ</option>
                        <option value="">ROHAFG</option>
                        <option value="">SAPSAU</option>
                        <option value={project}>SGTLSGP</option>
                        <option value={project}>SMRTPHL</option>
                        <option value={project}>VIVABHR</option>
                        <option value={project}>VDCCOD</option>
                        <option value={project}>ZAINBHR</option>
                        <option value={project}>ZAINIRQ</option>
                    </select>
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