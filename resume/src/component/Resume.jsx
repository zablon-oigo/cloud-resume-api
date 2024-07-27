import { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from './Profile';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';
import Certificates from './Certificates';
import Projects from './Projects';

const Resume = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios.get('https://tuipma3603.execute-api.eu-north-1.amazonaws.com/prod/')
      .then(response => {
        console.log('API Response:', response.data);
        const resumeData = response.data[0];
        setData(resumeData);
        setLoading(false);
      })
      .catch(error => {
        console.error('API Error:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className='text-3xl text-white'>Loading....</h2>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data && (
        <>
          <Profile profileData={data.basics} />
          <Work workData={data.work} />
          <Education educationData={data.education} />
          <Certificates certificatesData={data.certificates} />
          <Projects projectsData={data.projects} />
          <Skills skillsData={data.skills} />
        </>
      )}
    </div>
  );
};

export default Resume;
