import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, Navigate } from "react-router-dom";
import Home from "../../../assets/Images/icon/Home.svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Breadcrumb.css";
import { useRef } from "react";


// define Breadcrumb bootstrap 
const CustomBreadcrumb = (props) => {

  // define state and ref 
  const searchRef = useRef(null);
  // define state and ref 


  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {searchRef.current.innerHTML}
    </Tooltip>
  );

  return (
    <div className={`breadcrumb-container ${props.breadcrumbcontainercustomstyle}`}>
      <Breadcrumb className={`${props.CustomBreadcrumbStyle} breadcrumb-main `}>
        <Breadcrumb.Item>
          {/* <Navigate to="/" className="breadcrumb-icon"> */}
          <img src={Home} alt="home" width="100%" height="100%" />
          {/* </Navigate> */}
        </Breadcrumb.Item>
        {props.children}
        <Breadcrumb.Item className="breadcrumb-result-container" active>
          <div className="breadcrumb-icon breadcrumb-padding">
            <img src={props.activeImage} alt="active-icon" width="100%" height="100%" />
          </div>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <span ref={searchRef} className="breadcrumb-text breadcrumb-padding">{props.activeText}</span>
          </OverlayTrigger>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
// define Breadcrumb bootstrap end

export default CustomBreadcrumb;