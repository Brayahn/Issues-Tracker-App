const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body


//my routes
//create
app.post("/issues", async (req, res) =>
{
    try
    {
        const { project, issue_description, } = req.body;
        const newIssue = await pool.query("INSERT INTO tracker (project, issue_description) VALUES($1,$2)", [project, issue_description]);

        res.json(newIssue);

        /*

       

  const { issue_description } = req.body.issue_description;
        const { resolution } = req.body.resolution;
        const { Added_by } = req.body.Added_by;
        const { validated } = req.body.validated;




        "INSERT INTO mtissues (project) VALUES($1)", [project],
                    "INSERT INTO mtissues (issue_description) VALUES($1)", [issue_description],
                    "INSERT INTO mtissues (resolution) VALUES($1)", [resolution],
                    "INSERT INTO mtissues (Added_by) VALUES($1)", [Added_by],
                    "INSERT INTO mtissues (validated) VALUES($1)", [validated]



                    {
    "project": "MTNU",
    "issue_description": "Err logging into the Webcare",
    "resolution": "Core Restart",
    "Added_by": "Claud",
    "validated": "Yes"
    }
    
         */

    } catch (err) 
    {
        console.error(err.message);
    }
});



//server run 
app.listen(5000, () =>
{
    console.log("Server is up on 5000");
});
