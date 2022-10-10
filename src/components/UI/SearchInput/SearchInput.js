import "./SearchInput.css";
import Search from "../../../assets/Images/icon/search-normal.svg";
import { Navigate, useNavigate  } from "react-router-dom";
import { React , useEffect, useRef , useState } from "react";
import { useAppContext }  from "../../../Context/SearchContext/SearchContext";
import { Link } from "react-router-dom";



// define search input 
const SearchInput =(props)=>{

    // define variables, states and refs 
    const [inputChange , setInputChanage ] =useState("");
    const [search , setSearch] = useState(false);
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const {searchValue , setSearchValue , bookData ,newData , setNewData } = useAppContext();
   
    // define variables, states and refs end

    // handle when the input value change 
    const inputChangeHandler = (event) => {
        setInputChanage(event.target.value)
    };
    // handle when the input value change - end
   
   
   //    show search result page by clicking enter key 

    let DataBook
    const handleKeyDown = (event) => {
        // e.preventDefault()
        if (event.key === "Enter"){  
          setSearchValue(inputRef.current.value);
          DataBook = bookData;
		  if (inputChange) {
			DataBook = bookData.filter((items) =>
				items.name.toLowerCase().includes(inputChange, 0)
			);
            navigate('/search')
            setNewData(DataBook)
            
		  }
          if(DataBook === [] || DataBook === undefined || DataBook.length === 0 || DataBook === null) {
            navigate('*')
          }
         
        }
    }
    
    //    show search result page by clicking enter key - end
    
   //    show search result page by clicking on search button 

    const handleClick =(event)=>{
       
        setSearchValue(inputRef.current.value);
        DataBook = bookData;
        if (inputChange) {
          DataBook = bookData.filter((items) =>
            items.name.toLowerCase().includes(inputChange, 0)
          );
          navigate('/search')
          setNewData(DataBook)
          
        }
        if(DataBook === [] || DataBook === undefined || DataBook.length === 0 || DataBook === null) {
          navigate('*')
        }
       
       
    }
   //    show search result page by clicking on search button - end
    // useEffect(() => {
    //     setNewData(newData)
    // }, [inputChange])

  
    return(
        <div className="search-input-container">
            <input className="search-input" ref={inputRef} onChange={inputChangeHandler}
            value={inputChange} type="text" onKeyDown={handleKeyDown} placeholder={props.placeholder} />
            <button className="search-icon" onClick={handleClick}>
              <img src={Search} width="100%" height="100%" alt="search icon" />
            </button>
        </div>
    )
}

// == define search input -end == 

export default SearchInput;

