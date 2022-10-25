import { IconListItem } from './IconListItem';
import { formatWorkDate } from '../utils';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export const EducationItem = ({item}) => {
  return <IconListItem icon={faGraduationCap}>
    <div className="content">
      <h5>{item.institution}</h5>
      <p>
        {item.area} <em>({item.studyType})</em>
        <br/>
        {formatWorkDate(item.startDate)} - {formatWorkDate(item.endDate)}
      </p>
    </div>
  </IconListItem>
}