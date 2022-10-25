import { useState, useEffect } from 'react';
import { fetchResumeJSON } from './api';
import { Resume } from './components/Resume';
import { Footer } from './components/Footer';
import './sass/index.scss';


export const App = () => {
  let [ resume, setResume ] = useState();

  useEffect(() => {
    fetchResumeJSON()
      .then(res => setResume(res));
  }, []);

  return <>
    <section className="section">
      <Resume resume={resume} />
    </section>
    <Footer />
  </>;
}