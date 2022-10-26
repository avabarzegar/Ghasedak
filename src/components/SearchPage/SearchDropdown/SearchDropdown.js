import { React, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useAppContext } from "../../../Context/SearchContext/SearchContext";
import "./SearchDropdown.css";

function CustomDropdown() {
  // states and ref
  const {
    setSelectedData,
    categories,
    setSorting,
    sorting,
    authors,
    translators,
    hashtags,
    publishers,
    newData,
    setNewData,
    bookData,
  } = useAppContext();
  const navigate = useNavigate();
  const dropdown = useRef(null);
  const [allFilter, setAllFilter] = useState([]);
  // states and ref end

  const categoriesHandler = (event, title) => {
    // selected filter name
    const eventData = event.target.innerText;
    // selected filter name -end

    // all selected filter names
    setSelectedData((prevState) => [...prevState, eventData]);
    // all selected filter names -end

    // add a filter to list
    setSorting((prevState) => [
      ...new Set([...prevState, `${title} : ${eventData}`]),
    ]);
    // add a filter to list -end

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

    // store filter data in variable
    if (
      filter !== [] ||
      filter !== undefined ||
      filter.length !== 0 ||
      filter !== null
    ) {
      navigate("/search");
      // store filter data in variable
      setNewData((prevState) => {
        const updatedData = [];
        filter.map((items) => {
          updatedData.push(items);
        });

        [...prevState].map((items) => {
          updatedData.push(items);
        });

        return [...new Set(updatedData.map((item) => item))];
      });
      console.log(allFilter);
      
      // store filter data in variable
    } else {
      navigate("*");
    }
  };

  const authorsHandler = (event, title) => {
    // selected filter name
    const eventData = event.target.innerText;
    // selected filter name -end

    // all selected filter names
    setSelectedData((prevState) => [...prevState, eventData]);
    // all selected filter names -end

    // add a filter to list
    setSorting((prevState) => [
      ...new Set([...prevState, `${title} : ${eventData}`]),
    ]);
    // add a filter to list -end

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

    // store filter data in variable
    if (
      filter !== [] ||
      filter !== undefined ||
      filter.length !== 0 ||
      filter !== null
    ) {
      navigate("/search");
      // store filter data in variable
      setNewData((prevState) => {
        const updatedData = [];
        filter.map((items) => {
          updatedData.push(items);
        });

        [...prevState].map((items) => {
          updatedData.push(items);
        });

        return [...new Set(updatedData.map((item) => item))];
      });
      
      // store filter data in variable
    } else {
      navigate("*");
    }
  };

  const translatorsHandler = (event, title) => {
    // selected filter name
    const eventData = event.target.innerText;
    // selected filter name -end

    // all selected filter names
    setSelectedData((prevState) => [...prevState, eventData]);
    // all selected filter names -end

    // add a filter to list
    setSorting((prevState) => [
      ...new Set([...prevState, `${title} : ${eventData}`]),
    ]);
    // add a filter to list -end

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

    // store filter data in variable
    if (
      filter !== [] ||
      filter !== undefined ||
      filter.length !== 0 ||
      filter !== null
    ) {
      navigate("/search");
      // store filter data in variable
      setNewData((prevState) => {
        const updatedData = [];
        filter.map((items) => {
          updatedData.push(items);
        });

        [...prevState].map((items) => {
          updatedData.push(items);
        });

        return [...new Set(updatedData.map((item) => item))];
      });
      
      // store filter data in variable
    } else {
      navigate("*");
    }
  };

  const hashtagsHandler = (event, title) => {
    // selected filter name
    const eventData = event.target.innerText;
    // selected filter name -end

    // all selected filter names
    setSelectedData((prevState) => [...prevState, eventData]);
    // all selected filter names -end

    // add a filter to list
    setSorting((prevState) => [
      ...new Set([...prevState, `${title} : ${eventData}`]),
    ]);
    // add a filter to list -end

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

    // store filter data in variable
    if (
      filter !== [] ||
      filter !== undefined ||
      filter.length !== 0 ||
      filter !== null
    ) {
      navigate("/search");
      // store filter data in variable
      setNewData((prevState) => {
        const updatedData = [];
        filter.map((items) => {
          updatedData.push(items);
        });

        [...prevState].map((items) => {
          updatedData.push(items);
        });

        return [...new Set(updatedData.map((item) => item))];
      });
      
      // store filter data in variable
    } else {
      navigate("*");
    }
  };
  const publishersHandler = (event, title) => {
    // selected filter name
    const eventData = event.target.innerText;
    // selected filter name -end

    // all selected filter names
    setSelectedData((prevState) => [...prevState, eventData]);
    // all selected filter names -end

    // add a filter to list
    setSorting((prevState) => [
      ...new Set([...prevState, `${title} : ${eventData}`]),
    ]);
    // add a filter to list -end

    // return book data with selected publisher
    let filter = [];
    bookData.map((item) => {
      if (item.publisher === eventData) {
        filter.push(item);
      }
    });
    // return book data with selected publisher -end

    // store filter data in variable
    if (
      filter !== [] ||
      filter !== undefined ||
      filter.length !== 0 ||
      filter !== null
    ) {
      navigate("/search");
      // store filter data in variable
      setNewData((prevState) => {
        const updatedData = [];
        filter.map((items) => {
          updatedData.push(items);
        });

        [...prevState].map((items) => {
          updatedData.push(items);
        });

        return [...new Set(updatedData.map((item) => item))];
      });
      
      // store filter data in variable
    } else {
      navigate("*");
    }
  };

  // useEffect(() => {
  //   console.log(allFilter);
  //   // if (
  //   //   allFilter !== [] ||
  //   //   allFilter !== undefined ||
  //   //   allFilter.length !== 0 ||
  //   //   allFilter !== null
  //   // ) {
  //   setNewData((prevState) => {
  //     const updatedData = [];
  //     allFilter.map((items) => {
  //       console.log(items);
  //       updatedData.push(items);
  //     });

  //     [...prevState].map((items) => {
  //       console.log(items);
  //       updatedData.push(items);
  //     });

  //     console.log(updatedData);
  //     return [...new Set(updatedData.map((item) => item))];
  //   });

  //   // }
  //   console.log(newData);
  // }, [allFilter]);

  return (
    <div className="search-dropdown">
      <DropdownButton
        as={ButtonGroup}
        variant={categories[0]}
        title={categories[0]}
      >
        {categories.map((item) => (
          <Dropdown.Item
            ref={dropdown}
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
            ref={dropdown}
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
            ref={dropdown}
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
            ref={dropdown}
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
            ref={dropdown}
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
