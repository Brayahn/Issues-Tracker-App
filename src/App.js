import React, { Fragment } from 'react';
import './App.css';

//Components
import NewIssue from './components/NewIssue';

function App()
{

  return (

    <Fragment>

      <div className='container'>
        <NewIssue />
      </div>

    </Fragment>
  );


};

export default App;
