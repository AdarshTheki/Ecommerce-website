import { useContext } from "react";
import { FilterContext } from "./FilterProvider";

// export to used filter Data
const useFilterContext = () => {
  return useContext(FilterContext);
};
export default useFilterContext;