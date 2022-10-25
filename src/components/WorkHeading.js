import { formatWorkDate } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCalendar } from '@fortawesome/free-solid-svg-icons';

export const WorkHeading = ({company, position, website, startDate, endDate}) => {
  return <div>
    <h3 className="title is-3">{position} - {company}</h3>
    <h6 className="subtitle is-6">
      <a className="is-inline-block mr-2" href={website} target="_blank">
        <span className="icon">
          <FontAwesomeIcon icon={faLink} />
          {/*<i className="fa-solid fa-link"></i>*/}

        </span>
        <span>{website.split('//')[1]}</span>
      </a>

      <span className="is-inline-block mr-1">
        <span className="icon">
          <FontAwesomeIcon icon={faCalendar} />
          {/*<i className="fa-solid fa-calendar"></i>*/}
        </span>
        <span>
          {formatWorkDate(startDate)}
          &nbsp; - &nbsp;
          {endDate ? formatWorkDate(endDate) : 'Present'}
        </span>
      </span>
    </h6>
  </div>
}