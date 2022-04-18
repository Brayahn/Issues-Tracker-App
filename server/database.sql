CREATE DATABASE mtissues;

CREATE TABLE tracker(
    tracker_id SERIAL PRIMARY KEY,
    project VARCHAR(80),
    issue_description TEXT,
    resolution TEXT,
    added_by VARCHAR(80), 
    validated VARCHAR(10)
);

