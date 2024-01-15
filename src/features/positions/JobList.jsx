import { useDispatch } from 'react-redux';
import { addFilter } from 'features/filter/filter-slice';
import { JobPosition } from './JobPosition';
import { usePositions } from './use-positions';
import { useFetchPositions } from './use-fetch-positions';

const JobList = () => {
  useFetchPositions();
  const positions = usePositions();
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {dispatch(addFilter(filter))};

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
      ))}
    </div>
  )
}

export {JobList};