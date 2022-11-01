import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useAppContext } from "../../../Context/SearchContext/SearchContext";
import "./SearchDropdown.css";

function CustomDropdown() {
  const [allData, setAllData] = useState(null);
  // states and ref
  const {
    setSorting,
    categories,
    authors,
    translators,
    hashtags,
    publishers,
    setNewData,
    newData,
    bookData,
    searchData,
    // searchValue,
    // setSearchValue,
    available,
    setAvailable,
  } = useAppContext();
  const navigate = useNavigate();
  const saveSelectedFilter = [];

  // states and ref end
  console.log(allData);
  const categoriesHandler = (event, title) => {
    if (available === true) {
      setAvailable(false);
    }
    // selected filter name
    const eventData = event.target.innerText;
    // selected filter name -end

    // save selected filter in a varible
    saveSelectedFilter.push({
      title: title,
      eventFilter: eventData,
    });
    // save selected filter in a varible -end

    // update applied filter list in sorting state
    setSorting((prevState) => {
      const savingData = [];
      saveSelectedFilter.map((item) => {
        savingData.push(item);
      });
      [...prevState].map((item) => {
        savingData.push(item);
      });

      // make data unique
      const returnData = [...new Set(savingData.map((item) => item))];
      // make data unique -end
      return returnData;
    });
    // update applied filter list in sorting state -end

    // return book data with selected category
    let filter = [];
    bookData.map((items) => {
      items.category.map((item) => {
        if (item === eventData) {
          filter.push(items);
        }
      });
    });
    // return book data with selected category -end

    if (filter.length > 0) {
      navigate("/search");

      setNewData((prevState) => {
        const updatedData = [];
        filter.map((items) => {
          updatedData.push(items);
        });

        [...prevState].map((items) => {
          updatedData.push(items);
        });

        // make data unique
        const returnData = [...new Set(updatedData.map((item) => item))];
        // make data unique -end

        return returnData;
      });
      // update all books list which will be shown -end
    } else {
      navigate("*");
    }
  };

  const authorsHandler = (event, title) => {
    if (available === true) {
      setAvailable(false);
    }
    // selected filter name
    const eventData = event.target.innerText;

    // selected filter name -end

    // save selected filter in a varible
    saveSelectedFilter.push({
      title: title,
      eventFilter: eventData,
    });
    // save selected filter in a varible -end

    // update applied filter list in sorting state
    setSorting((prevState) => {
      const savingData = [];
      saveSelectedFilter.map((item) => {
        savingData.push(item);
      });
      [...prevState].map((item) => {
        savingData.push(item);
      });

      // make data unique
      const returnData = [...new Set(savingData.map((item) => item))];
      // make data unique -end

      return returnData;
    });
    // update applied filter list in sorting state -end

    // return book data with selected author
    let filter = [];
    bookData.map((items) => {
      items.author.map((item) => {
        if (item === eventData) {
          filter.push(items);
        }
      });
    });
    // return book data with selected author -end

    if (filter.length > 0) {
      navigate("/search");

      // update all books list which will be shown
      setNewData((prevState) => {
        const updatedData = [];
        filter.map((items) => {
          updatedData.push(items);
        });

        [...prevState].map((items) => {
          updatedData.push(items);
        });
        // make data unique
        const returnData = [...new Set(updatedData.map((item) => item))];
        // make data unique -end
        return returnData;
      });

      // update all books list which will be shown -end
    } else {
      navigate("*");
    }

    console.log(newData);
  };

  const translatorsHandler = (event, title) => {
    if (available === true) {
      setAvailable(false);
    }
    // selected filter name
    const eventData = event.target.innerText;

    // selected filter name -end

    // save selected filter in a varible
    saveSelectedFilter.push({
      title: title,
      eventFilter: eventData,
    });
    // save selected filter in a varible -end
    // update applied filter list in sorting state
    setSorting((prevState) => {
      const savingData = [];
      saveSelectedFilter.map((item) => {
        savingData.push(item);
      });
      [...prevState].map((item) => {
        savingData.push(item);
      });

      // make data unique
      const returnData = [...new Set(savingData.map((item) => item))];
      // make data unique -end
      return returnData;
    });
    // update applied filter list in sorting state -end

    // return book data with selected translator
    let filter = [];
    bookData.map((items) => {
      items.translator.map((item) => {
        if (item === eventData) {
          filter.push(items);
        }
      });
    });
    // return book data with selected translator -end

    if (filter.length > 0) {
      navigate("/search");

      // update all books list which will be shown
      setNewData((prevState) => {
        const updatedData = [];
        filter.map((items) => {
          updatedData.push(items);
        });

        [...prevState].map((items) => {
          updatedData.push(items);
        });
        // make data unique
        const returnData = [...new Set(updatedData.map((item) => item))];
        // make data unique -end
        return returnData;
      });

      // update all books list which will be shown -end
    } else {
      navigate("*");
    }

    console.log(newData);
  };

  const hashtagsHandler = (event, title) => {
    if (available === true) {
      setAvailable(false);
    }
    // selected filter name
    const eventData = event.target.innerText;

    // selected filter name -end

    // save selected filter in a varible

    saveSelectedFilter.push({
      title: title,
      eventFilter: eventData,
    });
    // save selected filter in a varible -end

    // update applied filter list in sorting state
    setSorting((prevState) => {
      const savingData = [];
      saveSelectedFilter.map((item) => {
        savingData.push(item);
      });
      [...prevState].map((item) => {
        savingData.push(item);
      });

      // make data unique
      const returnData = [...new Set(savingData.map((item) => item))];
      // make data unique -end
      return returnData;
    });
    // update applied filter list in sorting state -end

    // return book data with selected hashtag
    let filter = [];
    bookData.map((items) => {
      items.hashtag.map((item, index) => {
        if (item === eventData) {
          filter.push(items);
        }
      });
    });
    // return book data with selected hashtag -end

    if (filter.length > 0) {
      navigate("/search");

      // update all books list which will be shown
      setNewData((prevState) => {
        const updatedData = [];
        filter.map((items) => {
          updatedData.push(items);
        });

        [...prevState].map((items) => {
          updatedData.push(items);
        });
        // make data unique
        const returnData = [...new Set(updatedData.map((item) => item))];
        // make data unique -end
        return returnData;
      });

      // update all books list which will be shown -end
    } else {
      navigate("*");
    }

    console.log(newData);
  };

  const publishersHandler = (event, title) => {
    if (available === true) {
      setAvailable(false);
    }
    // selected filter name
    const eventData = event.target.innerText;

    // selected filter name -end

    // save selected filter in a varible
    saveSelectedFilter.push({
      title: title,
      eventFilter: eventData,
    });
    // save selected filter in a varible -end

    // update applied filter list in sorting state
    setSorting((prevState) => {
      const savingData = [];
      saveSelectedFilter.map((item) => {
        savingData.push(item);
      });
      [...prevState].map((item) => {
        savingData.push(item);
      });

      // make data unique
      const returnData = [...new Set(savingData.map((item) => item))];
      // make data unique -end
      return returnData;
    });
    // update applied filter list in sorting state -end

    // return book data with selected publisher
    let filter = [];
    bookData.map((item) => {
      if (item.publisher === eventData) {
        filter.push(item);
      }
    });
    // return book data with selected publisher -end

    if (filter.length > 0) {
      navigate("/search");

      // update all books list which will be shown
      setNewData((prevState) => {
        const updatedData = [];
        filter.map((items) => {
          updatedData.push(items);
        });

        [...prevState].map((items) => {
          updatedData.push(items);
        });
        // make data unique
        const returnData = [...new Set(updatedData.map((item) => item))];
        // make data unique -end
        return returnData;
      });

      // update all books list which will be shown -end
    } else {
      navigate("*");
    }

    console.log(newData);
  };
  // useEffect(() => {
  //   if (newData.length < 1 && searchData.length<1) {
  //     navigate("*");
  //   }
  // }, [newData]);
  return (
    <div className="search-dropdown">
      <DropdownButton
        as={ButtonGroup}
        variant={categories[0] ? categories[0] : null}
        title={categories[0] ? categories[0] : null}
      >
        {categories.map((item) => [
          <Dropdown.Item
            onClick={(event) => categoriesHandler(event, categories[0])}
            key={item.id}
          >
            {item.name}
          </Dropdown.Item>,
        ])}
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        variant={authors[0] ? authors[0] : null}
        title={authors[0] ? authors[0] : null}
      >
        {authors.map((item) => [
          <Dropdown.Item
            onClick={(event) => authorsHandler(event, authors[0])}
            key={item.id}
          >
            {item.name}
          </Dropdown.Item>,
        ])}
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        variant={translators[0] ? translators[0] : null}
        title={translators[0] ? translators[0] : null}
      >
        {translators.map((item) => [
          <Dropdown.Item
            onClick={(event) => translatorsHandler(event, translators[0])}
            key={item.id}
          >
            {item.name}
          </Dropdown.Item>,
        ])}
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        variant={hashtags[0] ? hashtags[0] : null}
        title={hashtags[0] ? hashtags[0] : null}
      >
        {hashtags.map((item) => [
          <Dropdown.Item
            onClick={(event) => hashtagsHandler(event, hashtags[0])}
            key={item.id}
          >
            {item.name}
          </Dropdown.Item>,
        ])}
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        variant={publishers[0] ? publishers[0] : null}
        title={publishers[0] ? publishers[0] : null}
      >
        {publishers.map((item) => [
          <Dropdown.Item
            onClick={(event) => publishersHandler(event, publishers[0])}
            key={item.id}
          >
            {item.name}
          </Dropdown.Item>,
        ])}
      </DropdownButton>
    </div>
  );
}

export default CustomDropdown;
