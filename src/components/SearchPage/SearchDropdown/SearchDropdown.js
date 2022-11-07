import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useAppContext } from "../../../Context/SearchContext/SearchContext";
import "./SearchDropdown.css";

function CustomDropdown() {
  const [eventData, setEventData] = useState(false);
  const [title, setTitle] = useState("");
  const [categoryEvent, setCategoryEvent] = useState("");
  const [authorEvent, setAuthorEvent] = useState("");
  const [hashtagEvent, setHashtagEvent] = useState("");
  const [translatorEvent, setTranslatorEvent] = useState("");
  const [publisherEvent, setPublisherEvent] = useState("");
  // states and ref
  const {
    setSorting,
    sorting,
    categories,
    authors,
    translators,
    hashtags,
    publishers,
    setNewData,
    newData,
    searchData,
    bookData,
    available,
    setAvailable,
    allData,
    setAllData,
    setPrevData,
  } = useAppContext();
  const navigate = useNavigate();
  const saveSelectedFilter = [];

  // states and ref end

  const categoriesHandler = (event, title) => {
    // setCategoryControl((current) => !current);

    if (available === true) {
      setAvailable(false);
    }
    setTitle(title);
    // selected filter name
    setCategoryEvent(event.target.innerText);
    console.log(categoryEvent);
    // selected filter name -end

    // save selected filter in a varible
    // saveSelectedFilter.push({
    //   title: title,
    //   eventFilter: eventData,
    // });
    // // save selected filter in a varible -end

    // // update applied filter list in sorting state
    // setSorting((prevState) => {
    //   const savingData = [];
    //   saveSelectedFilter.map((item) => {
    //     savingData.push(item);
    //   });
    //   [...prevState].map((item) => {
    //     savingData.push(item);
    //   });

    //   // make data unique
    //   const returnData = [...new Set(savingData)];
    //   // make data unique -end
    //   return returnData;
    // });
    // update applied filter list in sorting state -end

    // return book data with selected category
    // let filter = [];
    // bookData.map((items) => {
    //   items.category.map((item) => {
    //     if (item === eventData) {
    //       filter.push(items);
    //     }
    //   });
    // });
    // // return book data with selected category -end

    // if (filter.length > 0) {
    //   navigate("/search");

    //   setAllData((prevState) => {
    //     const updatedData = [];
    //     filter.map((items) => {
    //       updatedData.push(items);
    //     });

    //     if (prevState) {
    //       [...prevState].map((items) => {
    //         updatedData.push(items);
    //       });
    //     }

    //     // make data unique
    //     const returnData = [...new Set(updatedData.map((item) => item))];
    //     // make data unique -end

    //     return returnData;
    //   });
    //   // update all books list which will be shown -end
    // }
    // if (
    //   (newData === null || newData.length === 0) &&
    //   available === false &&
    //   searchData.length === 0
    // ) {
    //   navigate("*");
    // } else {
    //   navigate("/search");
    // }
  };

  const authorsHandler = (event, title) => {
    // setAuthorControl((current) => !current);

    if (available === true) {
      setAvailable(false);
    }
    setTitle(title);
    // selected filter name
    setAuthorEvent(event.target.innerText);
    console.log(authorEvent);

    // selected filter name -end

    // save selected filter in a varible
    // saveSelectedFilter.push({
    //   title: title,
    //   eventFilter: eventData,
    // });
    // // save selected filter in a varible -end

    // // update applied filter list in sorting state
    // setSorting((prevState) => {
    //   const savingData = [];
    //   saveSelectedFilter.map((item) => {
    //     savingData.push(item);
    //   });
    //   [...prevState].map((item) => {
    //     savingData.push(item);
    //   });

    //   // make data unique
    //   const returnData = [...new Set(savingData)];
    //   // make data unique -end

    //   return returnData;
    // });
    // update applied filter list in sorting state -end

    // return book data with selected author
    // let filter = [];
    // bookData.map((items) => {
    //   items.author.map((item) => {
    //     if (item === eventData) {
    //       filter.push(items);
    //     }
    //   });
    // });
    // // return book data with selected author -end

    // if (filter.length > 0) {
    //   navigate("/search");

    //   // update all books list which will be shown
    //   setAllData((prevState) => {
    //     const updatedData = [];
    //     filter.map((items) => {
    //       updatedData.push(items);
    //     });

    //     if (prevState) {
    //       [...prevState].map((items) => {
    //         updatedData.push(items);
    //       });
    //     }
    //     // make data unique
    //     const returnData = [...new Set(updatedData.map((item) => item))];
    //     // make data unique -end
    //     return returnData;
    //   });

    //   // update all books list which will be shown -end
    // }
    // if (
    //   (newData === null || newData.length === 0) &&
    //   available === false &&
    //   searchData.length === 0
    // ) {
    //   navigate("*");
    // } else {
    //   navigate("/search");
    // }
  };

  const translatorsHandler = (event, title) => {
    // setTranslatorControl((current) => !current);

    if (available === true) {
      setAvailable(false);
    }
    setTitle(title);
    // selected filter name
    setTranslatorEvent(event.target.innerText);
    console.log(translatorEvent);
    // selected filter name -end

    // save selected filter in a varible
    // saveSelectedFilter.push({
    //   title: title,
    //   eventFilter: eventData,
    // });
    // // save selected filter in a varible -end
    // // update applied filter list in sorting state
    // setSorting((prevState) => {
    //   const savingData = [];
    //   saveSelectedFilter.map((item) => {
    //     savingData.push(item);
    //   });
    //   [...prevState].map((item) => {
    //     savingData.push(item);
    //   });

    //   // make data unique
    //   const returnData = [...new Set(savingData)];
    //   // make data unique -end
    //   return returnData;
    // });
    // update applied filter list in sorting state -end

    // return book data with selected translator
    // let filter = [];
    // bookData.map((items) => {
    //   items.translator.map((item) => {
    //     if (item === eventData) {
    //       filter.push(items);
    //     }
    //   });
    // });
    // // return book data with selected translator -end

    // if (filter.length > 0) {
    //   navigate("/search");

    //   // update all books list which will be shown
    //   setAllData((prevState) => {
    //     const updatedData = [];
    //     filter.map((items) => {
    //       updatedData.push(items);
    //     });

    //     if (prevState) {
    //       [...prevState].map((items) => {
    //         updatedData.push(items);
    //       });
    //     }
    //     // make data unique
    //     const returnData = [...new Set(updatedData.map((item) => item))];
    //     // make data unique -end
    //     return returnData;
    //   });

    //   // update all books list which will be shown -end
    // }
    // if (
    //   (newData === null || newData.length === 0) &&
    //   available === false &&
    //   searchData.length === 0
    // ) {
    //   navigate("*");
    // } else {
    //   navigate("/search");
    // }
  };

  const hashtagsHandler = (event, title) => {
    // setHashtagControl((current) => !current);

    if (available === true) {
      setAvailable(false);
    }
    setTitle(title);
    // selected filter name
    setHashtagEvent(event.target.innerText);
    console.log(hashtagEvent);
    // selected filter name -end

    // save selected filter in a varible

    // saveSelectedFilter.push({
    //   title: title,
    //   eventFilter: eventData,
    // });
    // // save selected filter in a varible -end

    // // update applied filter list in sorting state
    // setSorting((prevState) => {
    //   const savingData = [];
    //   saveSelectedFilter.map((item) => {
    //     savingData.push(item);
    //   });
    //   [...prevState].map((item) => {
    //     savingData.push(item);
    //   });

    //   // make data unique
    //   const returnData = [...new Set(savingData)];
    //   // make data unique -end
    //   return returnData;
    // });
    // update applied filter list in sorting state -end

    // return book data with selected hashtag
    // let filter = [];
    // bookData.map((items) => {
    //   items.hashtag.map((item, index) => {
    //     if (item === eventData) {
    //       filter.push(items);
    //     }
    //   });
    // });
    // // return book data with selected hashtag -end

    // if (filter.length > 0) {
    //   navigate("/search");

    //   // update all books list which will be shown
    //   setAllData((prevState) => {
    //     const updatedData = [];
    //     filter.map((items) => {
    //       updatedData.push(items);
    //     });

    //     if (prevState) {
    //       [...prevState].map((items) => {
    //         updatedData.push(items);
    //       });
    //     }
    //     // make data unique
    //     const returnData = [...new Set(updatedData.map((item) => item))];
    //     // make data unique -end
    //     return returnData;
    //   });

    //   // update all books list which will be shown -end
    // }
    // if (
    //   (newData === null || newData.length === 0) &&
    //   available === false &&
    //   searchData.length === 0
    // ) {
    //   navigate("*");
    // } else {
    //   navigate("/search");
    // }
  };

  const publishersHandler = (event, title) => {
    // setPublisherControl((current) => !current);

    if (available === true) {
      setAvailable(false);
    }
    setTitle(title);
    // selected filter name
    setPublisherEvent(event.target.innerText);
    console.log(publisherEvent);
    // selected filter name -end

    // save selected filter in a varible
    // saveSelectedFilter.push({
    //   title: title,
    //   eventFilter: eventData,
    // });
    // // save selected filter in a varible -end

    // // update applied filter list in sorting state
    // setSorting((prevState) => {
    //   const savingData = [];
    //   saveSelectedFilter.map((item) => {
    //     savingData.push(item);
    //   });
    //   [...prevState].map((item) => {
    //     savingData.push(item);
    //   });

    //   // make data unique
    //   const returnData = [...new Set(savingData)];
    //   // make data unique -end
    //   return returnData;
    // });
    // update applied filter list in sorting state -end

    // return book data with selected publisher
    // let filter = [];
    // bookData.map((item) => {
    //   if (item.publisher === eventData) {
    //     filter.push(item);
    //   }
    // });
    // // return book data with selected publisher -end

    // if (filter.length > 0) {
    //   navigate("/search");

    //   // update all books list which will be shown
    //   setAllData((prevState) => {
    //     const updatedData = [];
    //     filter.map((items) => {
    //       updatedData.push(items);
    //     });

    //     if (prevState) {
    //       [...prevState].map((items) => {
    //         updatedData.push(items);
    //       });
    //     }
    //     // make data unique
    //     const returnData = [...new Set(updatedData.map((item) => item))];
    //     // make data unique -end
    //     return returnData;
    //   });

    //   // update all books list which will be shown -end
    // }
    // if (
    //   (newData === null || newData.length === 0) &&
    //   available === false &&
    //   searchData.length === 0
    // ) {
    //   navigate("*");
    // } else {
    //   navigate("/search");
    // }
  };

  useEffect(() => {
    if (categoryEvent) {
      // api config
      const token = "qtjAvo6VkoiFRlQ7lufYbRh3R4u6vEnKEN19JKSz";

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      // api config -end

      // save selected filter in a varible
      if (title !== "" && categoryEvent !== "") {
        saveSelectedFilter.push({
          title: title,
          eventFilter: categoryEvent,
        });
      }
      // save selected filter in a varible -end

      // update applied filter list in sorting state
      setSorting((current) => {
        const savingData = [];
        saveSelectedFilter.map((item) => {
          savingData.push(item);
        });
        if (current) {
          [...current].map((item) => {
            savingData.push(item);
          });
        }

        // make data unique
        const returnData = savingData.filter(
          (ele, ind) =>
            ind ===
            savingData.findIndex(
              (elem) =>
                elem.eventFilter === ele.eventFilter &&
                elem.eventFilter === ele.eventFilter
            )
        );

        // make data unique -end
        return returnData;
      });

      // update applied filter list in sorting state

      // api config

      const bodyParameters = {
        category: categoryEvent,
      };
      // api config -end

      // book list data
      axios
        .post("/books/list/all", bodyParameters, config)
        .then((response) => {
          const filter = [];
          response.data.data.map((item) => {
            filter.push({
              id: item.id,
              name: item.name,
              img: item.images.data,
              category: item.categories,
              author: item.authors,
              translator: item.translators,
              hashtag: item.hashtags,
              price: item.best_price,
              available: item.is_available,
              publisher: item.publisher,
            });
          });

          if (filter.length > 0) {
            navigate("/search");

            setAllData((current) => {
              const updatedData = [];
              filter.map((items) => {
                updatedData.push(items);
              });

              if (current) {
                [...current].map((items) => {
                  updatedData.push(items);
                });
              }

              // make data unique
              const returnData = updatedData.filter(
                (ele, ind) =>
                  ind ===
                  updatedData.findIndex(
                    (elem) => elem.id === ele.id && elem.id === ele.id
                  )
              );
              // make data unique -end

              return returnData;
            });
            console.log(allData);
            // update all books list which will be shown -end
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
      // book list data -end

      // if (allData && allData.length > 0) {
      //   setNewData(allData);
      //   setPrevData(allData);
      //   navigate("/search");
      // } else if (
      //   (newData === null || newData.length === 0) &&
      //   available === false &&
      //   searchData.length === 0
      // ) {
      //   navigate("*");
      // }
    }
  }, [categoryEvent]);

  useEffect(() => {
    if (authorEvent) {
      // api config
      const token = "qtjAvo6VkoiFRlQ7lufYbRh3R4u6vEnKEN19JKSz";

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      // api config -end

      // save selected filter in a varible
      if (title !== "" && authorEvent !== "") {
        saveSelectedFilter.push({
          title: title,
          eventFilter: authorEvent,
        });
      }
      // save selected filter in a varible -end

      // update applied filter list in sorting state
      setSorting((current) => {
        const savingData = [];
        saveSelectedFilter.map((item) => {
          savingData.push(item);
        });
        if (current) {
          [...current].map((item) => {
            savingData.push(item);
          });
        }

        // make data unique
        const returnData = savingData.filter(
          (ele, ind) =>
            ind ===
            savingData.findIndex(
              (elem) =>
                elem.eventFilter === ele.eventFilter &&
                elem.eventFilter === ele.eventFilter
            )
        );

        // make data unique -end
        return returnData;
      });

      // update applied filter list in sorting state

      // api config

      const bodyParameters = {
        author: authorEvent,
      };
      // api config -end

      // book list data
      axios
        .post("/books/list/all", bodyParameters, config)
        .then((response) => {
          const filter = [];
          response.data.data.map((item) => {
            filter.push({
              id: item.id,
              name: item.name,
              img: item.images.data,
              category: item.categories,
              author: item.authors,
              translator: item.translators,
              hashtag: item.hashtags,
              price: item.best_price,
              available: item.is_available,
              publisher: item.publisher,
            });
          });

          if (filter.length > 0) {
            navigate("/search");

            setAllData((current) => {
              const updatedData = [];
              filter.map((items) => {
                updatedData.push(items);
              });

              if (current) {
                [...current].map((items) => {
                  updatedData.push(items);
                });
              }

              // make data unique
              const returnData = updatedData.filter(
                (ele, ind) =>
                  ind ===
                  updatedData.findIndex(
                    (elem) => elem.id === ele.id && elem.id === ele.id
                  )
              );
              // make data unique -end

              return returnData;
            });
            console.log(allData);
            // update all books list which will be shown -end
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
      // book list data -end

      // if (allData && allData.length > 0) {
      //   setNewData(allData);
      //   setPrevData(allData);
      //   navigate("/search");
      // } else if (
      //   (newData === null || newData.length === 0) &&
      //   available === false &&
      //   searchData.length === 0
      // ) {
      //   navigate("*");
      // }
    }
  }, [authorEvent]);

  useEffect(() => {
    if (translatorEvent) {
      // api config
      const token = "qtjAvo6VkoiFRlQ7lufYbRh3R4u6vEnKEN19JKSz";

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      // api config -end

      // save selected filter in a varible
      if (title !== "" && translatorEvent !== "") {
        saveSelectedFilter.push({
          title: title,
          eventFilter: translatorEvent,
        });
      }
      // save selected filter in a varible -end

      // update applied filter list in sorting state
      setSorting((current) => {
        const savingData = [];
        saveSelectedFilter.map((item) => {
          savingData.push(item);
        });
        if (current) {
          [...current].map((item) => {
            savingData.push(item);
          });
        }

        // make data unique
        const returnData = savingData.filter(
          (ele, ind) =>
            ind ===
            savingData.findIndex(
              (elem) =>
                elem.eventFilter === ele.eventFilter &&
                elem.eventFilter === ele.eventFilter
            )
        );

        // make data unique -end
        return returnData;
      });

      // update applied filter list in sorting state

      // api config

      const bodyParameters = {
        translator: translatorEvent,
      };
      // api config -end

      // book list data
      axios
        .post("/books/list/all", bodyParameters, config)
        .then((response) => {
          const filter = [];
          response.data.data.map((item) => {
            filter.push({
              id: item.id,
              name: item.name,
              img: item.images.data,
              category: item.categories,
              author: item.authors,
              translator: item.translators,
              hashtag: item.hashtags,
              price: item.best_price,
              available: item.is_available,
              publisher: item.publisher,
            });
          });

          if (filter.length > 0) {
            navigate("/search");

            setAllData((current) => {
              const updatedData = [];
              filter.map((items) => {
                updatedData.push(items);
              });

              if (current) {
                [...current].map((items) => {
                  updatedData.push(items);
                });
              }

              // make data unique
              const returnData = updatedData.filter(
                (ele, ind) =>
                  ind ===
                  updatedData.findIndex(
                    (elem) => elem.id === ele.id && elem.id === ele.id
                  )
              );
              // make data unique -end

              return returnData;
            });
            console.log(allData);
            // update all books list which will be shown -end
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
      // book list data -end

      // if (allData && allData.length > 0) {
      //   setNewData(allData);
      //   setPrevData(allData);
      //   navigate("/search");
      // } else if (
      //   (newData === null || newData.length === 0) &&
      //   available === false &&
      //   searchData.length === 0
      // ) {
      //   navigate("*");
      // }
    }
  }, [translatorEvent]);

  useEffect(() => {
    if (hashtagEvent) {
      // api config
      const token = "qtjAvo6VkoiFRlQ7lufYbRh3R4u6vEnKEN19JKSz";

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      // api config -end

      // save selected filter in a varible
      if (title !== "" && hashtagEvent !== "") {
        saveSelectedFilter.push({
          title: title,
          eventFilter: hashtagEvent,
        });
      }
      // save selected filter in a varible -end

      // update applied filter list in sorting state
      setSorting((current) => {
        const savingData = [];
        saveSelectedFilter.map((item) => {
          savingData.push(item);
        });
        if (current) {
          [...current].map((item) => {
            savingData.push(item);
          });
        }

        // make data unique
        const returnData = savingData.filter(
          (ele, ind) =>
            ind ===
            savingData.findIndex(
              (elem) =>
                elem.eventFilter === ele.eventFilter &&
                elem.eventFilter === ele.eventFilter
            )
        );

        // make data unique -end
        return returnData;
      });

      // update applied filter list in sorting state

      // api config

      const bodyParameters = {
        hashtag: hashtagEvent,
      };
      // api config -end

      // book list data
      axios
        .post("/books/list/all", bodyParameters, config)
        .then((response) => {
          const filter = [];
          response.data.data.map((item) => {
            filter.push({
              id: item.id,
              name: item.name,
              img: item.images.data,
              category: item.categories,
              author: item.authors,
              translator: item.translators,
              hashtag: item.hashtags,
              price: item.best_price,
              available: item.is_available,
              publisher: item.publisher,
            });
          });

          if (filter.length > 0) {
            navigate("/search");

            setAllData((current) => {
              const updatedData = [];
              filter.map((items) => {
                updatedData.push(items);
              });

              if (current) {
                [...current].map((items) => {
                  updatedData.push(items);
                });
              }

              // make data unique
              const returnData = updatedData.filter(
                (ele, ind) =>
                  ind ===
                  updatedData.findIndex(
                    (elem) => elem.id === ele.id && elem.id === ele.id
                  )
              );
              // make data unique -end

              return returnData;
            });
            console.log(allData);
            // update all books list which will be shown -end
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
      // book list data -end

      // if (allData && allData.length > 0) {
      //   setNewData(allData);
      //   setPrevData(allData);
      //   navigate("/search");
      // } else if (
      //   (newData === null || newData.length === 0) &&
      //   available === false &&
      //   searchData.length === 0
      // ) {
      //   navigate("*");
      // }
    }
  }, [hashtagEvent]);

  useEffect(() => {
    if (publisherEvent) {
      // api config
      const token = "qtjAvo6VkoiFRlQ7lufYbRh3R4u6vEnKEN19JKSz";

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      // api config -end

      // save selected filter in a varible
      if (title !== "" && publisherEvent !== "") {
        saveSelectedFilter.push({
          title: title,
          eventFilter: publisherEvent,
        });
      }
      // save selected filter in a varible -end

      // update applied filter list in sorting state
      setSorting((current) => {
        const savingData = [];
        saveSelectedFilter.map((item) => {
          savingData.push(item);
        });
        if (current) {
          [...current].map((item) => {
            savingData.push(item);
          });
        }

        // make data unique
        const returnData = savingData.filter(
          (ele, ind) =>
            ind ===
            savingData.findIndex(
              (elem) =>
                elem.eventFilter === ele.eventFilter &&
                elem.eventFilter === ele.eventFilter
            )
        );

        // make data unique -end
        return returnData;
      });

      // update applied filter list in sorting state

      // api config

      const bodyParameters = {
        publisher: publisherEvent,
      };
      // api config -end

      // book list data
      axios
        .post("/books/list/all", bodyParameters, config)
        .then((response) => {
          const filter = [];
          response.data.data.map((item) => {
            filter.push({
              id: item.id,
              name: item.name,
              img: item.images.data,
              category: item.categories,
              author: item.authors,
              translator: item.translators,
              hashtag: item.hashtags,
              price: item.best_price,
              available: item.is_available,
              publisher: item.publisher,
            });
          });

          if (filter.length > 0) {
            navigate("/search");

            setAllData((current) => {
              const updatedData = [];
              filter.map((items) => {
                updatedData.push(items);
              });

              if (current) {
                [...current].map((items) => {
                  updatedData.push(items);
                });
              }

              // make data unique
              const returnData = updatedData.filter(
                (ele, ind) =>
                  ind ===
                  updatedData.findIndex(
                    (elem) => elem.id === ele.id && elem.id === ele.id
                  )
              );
              // make data unique -end

              return returnData;
            });
            console.log(allData);
            // update all books list which will be shown -end
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
      // book list data -end

      // if (allData && allData.length > 0) {
      //   setNewData(allData);
      //   setPrevData(allData);
      //   navigate("/search");
      // } else if (
      //   (newData === null || newData.length === 0) &&
      //   available === false &&
      //   searchData.length === 0
      // ) {
      //   navigate("*");
      // }
    }
  }, [publisherEvent]);

  useEffect(() => {
    if (allData && allData.length > 0) {
      setNewData(allData);
      setPrevData(allData);
      navigate("/search");
    } else if (
      (newData === null || newData.length === 0) &&
      available === false &&
      searchData.length === 0
    ) {
      navigate("*");
      setNewData([]);
    }
  }, [allData]);

  return (
    <div className="search-dropdown">
      <DropdownButton
        as={ButtonGroup}
        variant={categories[0] ? categories[0] : null}
        title={categories[0] ? categories[0] : null}
      >
        {categories?.map((item) => [
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
        {authors?.map((item) => [
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
        {translators?.map((item) => [
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
        {hashtags?.map((item) => [
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
        {publishers?.map((item) => [
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
