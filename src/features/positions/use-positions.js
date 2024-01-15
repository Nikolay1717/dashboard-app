import { selectFilters } from "features/filter/filter-slice";
import { useSelector } from "react-redux";
import { selectVisiblePositions } from "./position-slice";

export const usePositions = () => {
  const filters = useSelector(selectFilters);
  const positions = useSelector((state) => selectVisiblePositions(state, filters));

  return positions;
}