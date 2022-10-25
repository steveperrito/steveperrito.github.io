import { Spinner } from './Spinner';
import { Basics } from './Basics';
import { Skills } from './Skills';
import { WorkItems } from './WorkItems';
import { Education } from './Education';

export const Resume = ({resume}) => {
  if (!resume) {
    return <Spinner />
  }

  return <div>
    <Basics basics={resume.basics} />

    <hr/>

    <h2 className="title is-2">Skills</h2>
    <Skills skills={resume.skills} />

    <hr/>

    <div style={{pageBreakInside: 'avoid'}}>
      <h2 className="title is-2">Work</h2>
      <WorkItems items={resume.work} />
    </div>

    <hr/>

    <h2 className="title is-2">Education</h2>
    <Education items={resume.education} />
  </div>;
};