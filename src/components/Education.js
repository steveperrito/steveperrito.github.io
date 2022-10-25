import { EducationItem } from './EducationItem';

export const Education = ({items}) => {
  return <div className="columns is-multiline" style={{pageBreakInside: 'avoid'}}>
    {
      items.map((item, i) => <div key={i} className="column is-3">
        <EducationItem item={item}/>
      </div>)
    }
  </div>
}