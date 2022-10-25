export const Skills = ({skills}) => {
  return <div className="tags are-large">
    {skills.map(skill => <span key={skill} className="tag is-primary">{skill}</span> )}
  </div>
};