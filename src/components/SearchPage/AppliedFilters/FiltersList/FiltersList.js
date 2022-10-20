import React, { useEffect } from "react";
import "./FiltersList.css";
import SingleFilterLayout from "../SingleFilterLayout/SingleFilterLayout";
import AppliedSingleFilter from "../AppliedSingleFilter/AppliedSingleFilter";
import { useAppContext } from "../../../../Context/SearchContext/SearchContext";

// define all applied filters list
const FiltersList = () => {
  // state
  const {
    sorting,
    setSorting,
    searchValue,
    selectedData,
    setNewData,
    newData,
  } = useAppContext();
  // state end

  // delete specific filter by clicking on its delete button
  const deleteFilterHandler = (index) => {
    const updatedSorting = [...sorting];
    updatedSorting.splice(index, 1);
    setSorting(updatedSorting);
  };
  // delete specific filter by clicking on its delete button -end
  // useEffect(() => {
  //   console.log(newData);
  //   let filter = newData
  //     .filter((items) => {
  //       items.name.toLowerCase().includes(searchValue, 0);
  //     })
  //     .filter((item) => {
  //       item.author[0].includes(selectedData, 0);

  //       console.log(item.author[0]);
  //     });

  //   setNewData(filter);
  //   console.log(newData);
  // }, [selectedData]);

  return (
    <div className="filter-list">
      <AppliedSingleFilter Filter={`جستجوی عبارت : ${searchValue}`} />
      {sorting?.map((item, index) => {
        return (
          <SingleFilterLayout
            key={index}
            Filter={item}
            click={() => deleteFilterHandler(index)}
          />
        );
      })}
    </div>
  );
};

// define all applied filters list -end

export default FiltersList;
