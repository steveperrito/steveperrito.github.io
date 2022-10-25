import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const IconListItem = ({children, icon}) => {
  return <div className="columns is-mobile">
    <div className="column is-narrow">
      <span className="icon has-text-weight-bold has-text-primary">
        <FontAwesomeIcon icon={icon} />
        {/*<i className={iconClasses} />*/}
      </span>
    </div>
    <div className="column">
      {children}
    </div>
  </div>
}