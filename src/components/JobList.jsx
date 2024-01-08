import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'store/filters/actions';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from 'store/positions/selectors';
import { selectFilters } from 'store/filters/selectors';

const JobList = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const data = useSelector((state) => selectVisiblePositions(state, filters));

  const handleAddFilter = (filter) => {dispatch(addFilter(filter))};

  return (
    <div className='job-list'>
      {data.map(item => (
        <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
      ))}
    </div>
  )
}

export {JobList};