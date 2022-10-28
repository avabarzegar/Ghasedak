import React, { useEffect } from "react";
import "./FiltersList.css";
import SingleFilterLayout from "../SingleFilterLayout/SingleFilterLayout";
// import AppliedSingleFilter from "../AppliedSingleFilter/AppliedSingleFilter";
import { useAppContext } from "../../../../Context/SearchContext/SearchContext";
import { useNavigate } from "react-router-dom";

// define all applied filters list
const FiltersList = () => {
  // define state and variables
  const { sorting, setSorting, searchValue, setNewData, newData } =
    useAppContext();
  const navigate = useNavigate();
  // define state and variables -end

  // delete specific filter by clicking on its delete button
  const deleteFilterHandler = (index) => {
    const updatedSorting = [...sorting];
    updatedSorting.splice(index, 1);
    setSorting(updatedSorting);

    const sortingTitle = sorting[index].title;
    const sortingFilter = sorting[index].eventFilter;

    let filters = newData;

    sorting.map(() => {
      if (sortingTitle === "دسته بندی") {
        newData.map((items) => {
          items.category.map((item) => {
            if (item === sortingFilter) {
              filters.splice(items, 1);
            }
          });
        });
        setNewData(filters);
      }

      if (sortingTitle === "نویسندگان") {
        newData.map((items) => {
          items.author.map((item) => {
            if (item === sortingFilter) {
              filters.splice(items, 1);
            }
          });
        });
        setNewData(filters);
      }

      if (sortingTitle === "مترجمان") {
        newData.map((items) => {
          items.translator.map((item) => {
            if (item === sortingFilter) {
              filters.splice(items, 1);
            }
          });
        });
        setNewData(filters);
      }

      if (sortingTitle === "برچسب ها") {
        newData.map((items) => {
          items.hashtag.map((item) => {
            if (item === sortingFilter) {
              filters.splice(items, 1);
            }
          });
        });
        setNewData(filters);
      }

      if (sortingTitle === "ناشران") {
        newData.map((items) => {
          if (items.publisher === sortingFilter) {
            filters.splice(items, 1);
          }
        });
        setNewData(filters);
      }
    });
    console.log(sorting[index].title);
  };
  useEffect(() => {
    if (sorting == [] || (sorting.length === 0 && searchValue === "")) {
      setNewData([]);
      navigate("*");
    }
  }, [sorting]);
  console.log(sorting);
  return (
    <div className="filter-list">
      {sorting?.map((item, index) => {
        return (
          <SingleFilterLayout
            key={index}
            title={item.title}
            Filter={item.eventFilter}
            click={() => deleteFilterHandler(index)}
          />
        );
      })}
    </div>
  );
};

// define all applied filters list -end

export default FiltersList;
