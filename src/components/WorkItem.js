import { WorkHeading } from './WorkHeading';

export const WorkItem = ({item}) => {
  return <div className="box" style={{borderLeft: '5px solid #df691a', pageBreakInside: 'avoid'}}>

    <WorkHeading {...item} />

    <div className="content is-medium mt-3">
      <p>
        {item.summary}
      </p>
      <ul>
        {item.highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
      </ul>
    </div>
  </div>;
}