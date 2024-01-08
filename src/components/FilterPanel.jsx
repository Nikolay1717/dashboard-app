import { useSelector, useDispatch } from 'react-redux';
import { selectFilters } from 'store/filters/selectors';
import { removeFilter, clearFilter } from 'store/filters/actions';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';


const FilterPanel = () => {
  const currentFilters = useSelector(selectFilters);
  const dispatch = useDispatch();

  if (currentFilters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {
            currentFilters.map(filter => (
              <Badge 
                key={filter} 
                variant='clearable'
                onClear={() => dispatch(removeFilter(filter))} 
              >
                {filter}
              </Badge>
            ))
          }
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter)}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};