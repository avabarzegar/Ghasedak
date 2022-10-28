import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useAppContext } from "../../../Context/SearchContext/SearchContext";
import "./SearchDropdown.css";

function CustomDropdown() {
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
    searchValue,
    setSearchValue,
    available,
    setAvailable,
  } = useAppContext();
  const navigate = useNavigate();
  const saveSelectedFilter = [];
  // states and ref end

  const categoriesHandler = (event, title) => {
    // set available toggeler to false
    if (available === true) {
      setAvailable(false);
      setNewData([]);
    }
    // set available toggeler to false -end

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

    // set previous result books to null
    console.log(searchValue);
    if (searchValue !== "") {
      setSearchValue("");
      setNewData([]);
    }
    // set previous result books to null -end

    // store filter data in variable
    if (
      filter !== [] ||
      filter !== undefined ||
      filter.length !== 0 ||
      filter !== null
    ) {
      navigate("/search");
      // store filter data in variable -end
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

      // store filter data in variable
    } else {
      navigate("*");
    }
  };

  const authorsHandler = (event, title) => {
    // set available toggeler to false
    if (available === true) {
      setAvailable(false);
      setNewData([]);
    }
    // set available toggeler to false -end
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

    // set previous result books to null
    console.log(searchValue);
    if (searchValue !== "") {
      setSearchValue("");
      setNewData([]);
    }
    // set previous result books to null -end

    // store filter data in variable
    if (
      filter !== [] ||
      filter !== undefined ||
      filter.length !== 0 ||
      filter !== null
    ) {
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
  };

  const translatorsHandler = (event, title) => {
    // set available toggeler to false
    if (available === true) {
      setAvailable(false);
      setNewData([]);
    }
    // set available toggeler to false -end
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

    // set previous result books to null
    console.log(searchValue);
    if (searchValue !== "") {
      setSearchValue("");
      setNewData([]);
    }
    // set previous result books to null -end

    // store filter data in variable
    if (
      filter !== [] ||
      filter !== undefined ||
      filter.length !== 0 ||
      filter !== null
    ) {
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

      // store filter data in variable
    } else {
      navigate("*");
    }
  };

  const hashtagsHandler = (event, title) => {
    // set available toggeler to false
    if (available === true) {
      setAvailable(false);
      setNewData([]);
    }
    // set available toggeler to false -end
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

    // set previous result books to null
    console.log(searchValue);
    if (searchValue !== "") {
      setSearchValue("");
      setNewData([]);
    }
    // set previous result books to null -end

    // store filter data in variable
    if (
      filter !== [] ||
      filter !== undefined ||
      filter.length !== 0 ||
      filter !== null
    ) {
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

      // store filter data in variable
    } else {
      navigate("*");
    }
  };

  const publishersHandler = (event, title) => {
    // set available toggeler to false
    if (available === true) {
      setAvailable(false);
      setNewData([]);
    }
    // set available toggeler to false -end
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

    // set previous result books to null
    console.log(searchValue);
    if (searchValue !== "") {
      setSearchValue("");
      setNewData([]);
    }
    // set previous result books to null -end

    // store filter data in variable
    if (
      filter !== [] ||
      filter !== undefined ||
      filter.length !== 0 ||
      filter !== null
    ) {
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

      // store filter data in variable
    } else {
      navigate("*");
    }
  };
console.log(searchValue)
console.log(newData)
  return (
    <div className="search-dropdown">
      <DropdownButton
        as={ButtonGroup}
        variant={categories[0]}
        title={categories[0]}
      >
        {categories.map((item) => (
          <Dropdown.Item
            onClick={(event) => categoriesHandler(event, categories[0])}
            key={item.id}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <DropdownButton as={ButtonGroup} variant={authors[0]} title={authors[0]}>
        {authors.map((item) => (
          <Dropdown.Item
            onClick={(event) => authorsHandler(event, authors[0])}
            key={item.id}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        variant={translators[0]}
        title={translators[0]}
      >
        {translators.map((item) => (
          <Dropdown.Item
            onClick={(event) => translatorsHandler(event, translators[0])}
            key={item.id}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        variant={hashtags[0]}
        title={hashtags[0]}
      >
        {hashtags.map((item) => (
          <Dropdown.Item
            onClick={(event) => hashtagsHandler(event, hashtags[0])}
            key={item.id}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        variant={publishers[0]}
        title={publishers[0]}
      >
        {publishers.map((item) => (
          <Dropdown.Item
            onClick={(event) => publishersHandler(event, publishers[0])}
            key={item.id}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}

export default CustomDropdown;
