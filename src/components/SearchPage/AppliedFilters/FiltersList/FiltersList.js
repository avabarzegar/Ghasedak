import React, { useEffect } from "react";
import "./FiltersList.css";
import SingleFilterLayout from "../SingleFilterLayout/SingleFilterLayout";
import { useAppContext } from "../../../../Context/SearchContext/SearchContext";
import { useNavigate } from "react-router-dom";

// define all applied filters list
const FiltersList = () => {
  // define state and variables
  const {
    sorting,
    setSorting,
    setNewData,
    newData,
    searchData,
    available,
    allData,
    setAllData,
    setPrevData,
  } = useAppContext();

  const navigate = useNavigate();

  // define state and variables -end
  useEffect(() => {
    // if (allData && allData.length > 0) {
    //   setNewData(allData);
    //   setPrevData(allData);
    //   navigate("/search");
    // }

    if ((sorting.length === 0 || sorting === []) && available === false) {
      setNewData(searchData);
      if (searchData.length === 0) {
        navigate("*");
        setNewData([]);
        setAllData([]);
      }
    }

    // set book data to null if we do not have any applied filter or search input -end
  }, [sorting, available, searchData]);
  // delete specific filter by clicking on its delete button
  const deleteFilterHandler = (selected) => {
    // delete filter name
    setSorting((current) => current.filter((item) => item !== selected));
    // delete filter name -end

    const sortingTitle = selected.title;
    const sortingFilter = selected.eventFilter;

    // delete category filters
    sorting.map(() => {
      if (sortingTitle === "دسته بندی") {
        newData?.map((items) => {
          items.category.map((item) => {
            if (sortingFilter.includes(item)) {
              setNewData((current) =>
                current.filter((data) => data.id !== items.id)
              );
            }
          });
        });
      }
      // delete category filters -end

      // delete author filters
      if (sortingTitle === "نویسندگان") {
        newData?.map((items) => {
          items.author.map((item) => {
            if (sortingFilter.includes(item)) {
              setNewData((current) =>
                current.filter((data) => data.id !== items.id)
              );
            }
          });
        });
      }
      // delete author filters -end

      // delete translator filters
      if (sortingTitle === "مترجمان") {
        newData?.map((items) => {
          items.translator.map((item) => {
            if (sortingFilter.includes(item)) {
              setNewData((current) =>
                current.filter((data) => data.id !== items.id)
              );
            }
          });
        });
      }
      // delete translator filters -end

      // delete hashtag filters
      if (sortingTitle === "برچسب ها") {
        newData?.map((items) => {
          items.hashtag.map((item) => {
            if (sortingFilter.includes(item)) {
              setNewData((current) =>
                current.filter((data) => data.id !== items.id)
              );
            }
          });
        });
      }
      // delete hashtag filters -end

      // delete publisher filters
      if (sortingTitle === "ناشران") {
        newData?.map((items) => {
          if (items.publisher === sortingFilter) {
            setNewData((current) =>
              current.filter((data) => data.id !== items.id)
            );
          }
        });
      }
      // delete publisher filters -end
    });
    // if (
    //   newData.length === 0 &&
    //   searchData.length === 0 &&
    //   available === false
    // ) {
    //   navigate("*");
    // }
  };
  return (
    <div className="filter-list">
      {sorting?.map((item, index) => {
        return (
          <SingleFilterLayout
            key={index}
            title={item.title}
            Filter={item.eventFilter}
            click={() => deleteFilterHandler(item)}
          />
        );
      })}
    </div>
  );
};

// define all applied filters list -end

export default FiltersList;
