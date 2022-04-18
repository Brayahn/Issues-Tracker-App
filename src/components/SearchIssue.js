import React, { Fragment } from "react";

const SearchIssue = () =>
{
    return (
        <Fragment>
            <h1 className="text-center mt-5"> Mobile Technologies Issues Tracker </h1>

            <form className="d-flex mt-5"  >
                <input type='text' className="form-control" />
                <button className="btn btn-success"> Search Issue </button>
            </form>

        </Fragment>
    );
}

export default SearchIssue;