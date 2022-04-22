import React, { Fragment } from 'react';
import './App.css';



//Components
import NewIssue from './components/NewIssue';
import ListIssues from './components/listIssues';

function App()
{

  return (

    <Fragment>

      <center>
        <img src={process.env.PUBLIC_URL + "assets/images/mt.jpg "} alt="LOGO" />
      </center>


      <div className='container'>

        <NewIssue />
        <br></br><br></br>
        <ListIssues />
      </div>

    </Fragment>
  );


};

export default App;
