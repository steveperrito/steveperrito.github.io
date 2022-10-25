import { WorkItem } from './WorkItem';

export const WorkItems = ({items}) => {
  return items.map((item, i) => <WorkItem key={i} item={item} />)
};