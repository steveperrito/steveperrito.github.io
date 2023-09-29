import { BoxColumn } from './BoxColumn';
import { IconListItem } from './IconListItem';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import headShotSrc from '../img/PXL_20221001_173958017.jpg';

export const Basics = ({basics = {}}) => {
  if (!basics || !basics.name || !basics.summary) return null;

  return <div>
    <figure className="image is-128x128 mx-auto mb-3">
      <img alt="Steve Perry Head Shot" className="is-rounded" src={headShotSrc} />
    </figure>

    <h1 className="title is-1 has-text-centered has-text-primary">
      {basics.name.toUpperCase()}
    </h1>

    <h6 className="subtitle is-6 has-text-centered">
      {basics.label}
      <br/>
      <em>{basics.location.city}, {basics.location.region}</em>
    </h6>

    <div className="content is-large">
      <p>
        {basics.summary}
      </p>

      <div className="columns">
        <BoxColumn>
          <IconListItem icon={faEnvelope}>
            <a href={`mailto:${basics.email}`}>{basics.email}</a>
          </IconListItem>

          <IconListItem icon={faPhone}>
            <a href={`tel:${basics.phone}`}>{basics.phone}</a>
          </IconListItem>
        </BoxColumn>

        <BoxColumn>
          <IconListItem icon={faGithub}>
            <a href={basics.github} target="_blank">{basics.github.split('/').at(-1)}</a>
          </IconListItem>

          <IconListItem icon={faLinkedin}>
            <a href={basics.linkedin} target="_blank">{basics.linkedin.split('/').at(-1)}</a>
          </IconListItem>
        </BoxColumn>
      </div>
    </div>
  </div>;
};