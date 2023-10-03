import { useEffect, useState } from "react";
import { JobInfo } from "./JobInfo";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async() => {
    const response = await fetch(url);
    const newJobs = await response.json();
    // console.log(data)
    setJobs(newJobs);
    setIsLoading(false);
  }

  useEffect(()=> {
    fetchJobs()
  },[])

  if(isLoading){
    <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }

  return (
    <section className="jobs-center">
      <JobInfo jobs={jobs}/>
    </section>
  );
};
export default App;
