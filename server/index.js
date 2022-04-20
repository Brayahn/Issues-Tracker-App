const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body


//my routes
//create
app.post("/newissues", async (req, res) =>
{
    try
    {
        const { project, issue_description, resolution, added_by, validated } = req.body;
        const newIssue = await pool.query("INSERT INTO tracker (project, issue_description,resolution,added_by, validated) VALUES($1,$2,$3,$4,$5) RETURNING *", [project, issue_description, resolution, added_by, validated]);

        res.json(newIssue.rows[0]);

    } catch (err) 
    {
        console.error(err.message);
    }
});


//All Issues
app.get("/issues", async (_req, res) =>
{
    try
    {
        const allissues = await pool.query("SELECT * FROM tracker");
        res.json(allissues.rows);
    } catch (err)
    {
        console.error(err.message)
    }
});



//Searching for a specific issue 
app.get("/search/:keyword", async (req, res) =>
{
    try
    {

        //console.log(req.params);
        const { keyword } = req.params;
        const issue = await pool.query("SELECT * FROM tracker WHERE project || ' ' ||issue_description ||' ' || resolution ||' ' || added_by ILIKE $1",
            [`%${keyword}%`]);

        res.json(issue.rows);
    } catch (err)
    {
        console.error(err.message);
    }
});


//updating an issue
app.put("/issue/:id", async (req, res) => 
{
    try  
    {
        const { id } = req.params;
        const { project, issue_description, resolution, added_by, validated } = req.body;
        const updateIssue = await pool.query(
            "UPDATE tracker SET (project, issue_description, resolution, added_by, validated)  = ($1, $2, $3, $4, $5) WHERE tracker_id = $6", [project, issue_description, resolution, added_by, validated, id]
        );

        res.json("Issue was updated");
    } catch (err)  
    {
        console.error(err.message);
    }
})

//delete an issue 
app.delete("/issues/:id", async (req, res) =>
{
    try
    {
        const { id } = req.params;
        const deleteIssue = await pool.query("DELETE FROM tracker where tracker_id = $1", [id]);

        res.json("Record Deleted")
    } catch (err)
    {
        console.error(err.message);
    }
})


//server run 
app.listen(5000, () =>
{
    console.log("Server is up on 5000");
});
