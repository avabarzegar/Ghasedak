import React, { useEffect } from "react";
import "./FiltersList.css";
import SingleFilterLayout from "../SingleFilterLayout/SingleFilterLayout";
// import AppliedSingleFilter from "../AppliedSingleFilter/AppliedSingleFilter";
import { useAppContext } from "../../../../Context/SearchContext/SearchContext";
import { useNavigate } from "react-router-dom";

// define all applied filters list
const FiltersList = () => {
  // define state and variables
  const { sorting, setSorting, searchValue, setNewData, newData, searchData } =
    useAppContext();
  const navigate = useNavigate();
  // define state and variables -end

  // delete specific filter by clicking on its delete button
  const deleteFilterHandler = (index) => {
    // delete filter name
    const updatedSorting = [...sorting];
    updatedSorting.splice(index, 1);
    setSorting(updatedSorting);
    // delete filter name -end

    const sortingTitle = sorting[index].title;
    const sortingFilter = sorting[index].eventFilter;

    let filters = newData;
    // delete category filters
    sorting.map(() => {
      if (sortingTitle === "دسته بندی") {
        newData.map((items) => {
          items.category.map((item) => {
            if (item === sortingFilter) {
              // filters.splice(items, 1);
              setNewData((current) =>
                current.filter((data) => data.id !== items.id)
              );
            }
          });
        });
        console.log(newData);
      }
      // delete category filters -end

      // delete author filters
      if (sortingTitle === "نویسندگان") {
        newData.map((items) => {
          items.author.map((item) => {
            if (item === sortingFilter) {
              // filters.splice(items, 1);
              setNewData((current) =>
                current.filter((data) => data.id !== items.id)
              );
            }
          });
        });
        console.log(newData);
      }
      // delete author filters -end

      // delete translator filters
      if (sortingTitle === "مترجمان") {
        newData.map((items) => {
          items.translator.map((item) => {
            if (item === sortingFilter) {
              // filters.splice(items, 1);
              setNewData((current) =>
                current.filter((data) => data.id !== items.id)
              );
            }
          });
        });
        console.log(newData);
      }
      // delete translator filters -end

      // delete hashtag filters
      if (sortingTitle === "برچسب ها") {
        newData.map((items) => {
          items.hashtag.map((item) => {
            if (item === sortingFilter) {
              // filters.splice(items, 1);
              setNewData((current) =>
                current.filter((data) => data.id !== items.id)
              );
            }
          });
        });
        console.log(newData);
      }
      // delete hashtag filters -end

      // delete publisher filters
      if (sortingTitle === "ناشران") {
        newData.map((items) => {
          if (items.publisher === sortingFilter) {
            // filters.splice(items, 1);
            setNewData((current) =>
              current.filter((data) => data.id !== items.id)
            );
          }
        });
        console.log(newData);
      }
      // delete publisher filters -end
    });
  };

  useEffect(() => {
    // set book data to null if we do not have any applied filter or search input
    // if (sorting.length === 0) {
    //   setNewData(searchData);
    //   console.log(searchData);
    //   navigate("/search");
    // }
    // set book data to null if we do not have any applied filter or search input -end
  }, [sorting]);

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
