// TODO: Import useEffect hook
import React, { useState, useEffect } from 'react';
import IssueList from './components/IssueList';

function App() {
  // TODO: Create a state variable `issues` and a function to update it using `useState`
  // Your code here
  const [issues, setIssues] = useState([]);
  let repo = 'facebook/react';

  // TODO: Create a useEffect hook that will invoke our getRepoIssues method passing in "facebook/react" as the desired repo
  // Your code here
  useEffect(() => {
    document.title = "Repo: facebook/react";
    getRepoIssues(repo);
  }, []);



  // TODO: Create a function that preforms a fetch request to using the provided endpoint. Update state with the results from the API request.
  const getRepoIssues = async (repo) => {
    let issuesURL = `https://api.github.com/repos/${repo}/issues?direction=asc`;

    const response = await fetch(issuesURL);
    const data = await response.json();
    setIssues(data);
    console.log("HI!");

    fetch(issuesURL)
      .then((res) => res.json())
      .then((data) => setIssues(data));
    console.log("HI!");

  };

  return (
    <div className="container">
      <h2 className="header">GitHub issues for React</h2>
      <span className="text-primary">
        Stored in state variable <code>issues</code>
      </span>
      <hr></hr>
      <div className="ui grid">
        <div className="row">
          <div className="col-11">
            <IssueList issues={issues} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
