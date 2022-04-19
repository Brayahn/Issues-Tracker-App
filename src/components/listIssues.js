import React, { Fragment, useEffect, useState } from "react";

const ListIssues = () =>
{

    const getIssues = async () =>
    {
        try
        {
            const response = await fetch("http://localhost:5000/issues/");
            const jsonData = await response.json();

            console.log(jsonData);
        } catch (err)
        {
            console.error(err.message);
        }
    }

    useEffect(() =>
    {
        getIssues();
    })
    return (
        <Fragment>  <h3 className="text-center mt-2"> All Issues </h3>


            <table class="table mt-5 text-center" >
                <thead>
                    <tr>
                        <th>Project </th>
                        <th>Issue Description</th>
                        <th>Resolution</th>
                        <th>Added By</th>
                        <th>Validated</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                   
                    */}
                </tbody>
            </table>

        </Fragment>
    );
};

export default ListIssues;