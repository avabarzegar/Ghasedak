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
    const {searchValue , setSearchValue , bookData } = useAppContext();
   
    // define variables, states and refs end

    // handle when the input value change 
    const inputChangeHandler = (event) => {
        setInputChanage(event.target.value)
    };
    // handle when the input value change - end
   
   
   //    show search result page by clicking enter key 
    const handleKeyDown = (event) => {
        // e.preventDefault()
        if (event.key === "Enter"){
            
            setSearchValue(inputRef.current.value);
            
            bookData.map((item) => {
                
                if( inputChange.toString() === item.name.toString() ){
                    console.log(typeof(item.name)+item.name.toString());
                    console.log(typeof(inputChange)+inputChange)
                    console.log(item.name.toString())
                    console.log(item.name.toString() === inputChange.toString())
                    navigate("/search");
                   
                    
                }
                else{
                    navigate("/searchNull")

                }
            })  
         
        }
    }

    //    show search result page by clicking enter key - end
    
   //    show search result page by clicking on search button 
    const handleClick =()=>{
       
        setSearchValue(inputRef.current.value);

        bookData.map((item) => {
            if(item.name.toString() === inputChange.toString()){
                navigate("/search");
            }
            else{
                navigate("/searchNull");

            }
            // inputChange == item.name ? navigate("/search") : navigate("/searchNull")
           
        })  
       
    }
   //    show search result page by clicking on search button - end
    
   
  
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

