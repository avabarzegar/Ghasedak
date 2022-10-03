import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import Home from '../../../assets/Images/icon/Home.svg';
import './Breadcrumb.css';


// define Breadcrumb bootstrap 
const CustomBreadcrumb=(props)=> {
  return (
    <div className='breadcrumb-container'>
    <Breadcrumb className='breadcrumb-main'>
      <Breadcrumb.Item component={Link} to='/'>
       
          <div className='breadcrumb-icon'>
            <img src={Home} alt='home' width='100%' height='100%' />
          </div>
       
      </Breadcrumb.Item>
      {props.children}
      <Breadcrumb.Item active>
        <div className='breadcrumb-icon breadcrumb-padding'>
          <img src={props.activeImage} alt='active-icon' width='100%' height='100%'/>
        </div>
        <span className='breadcrumb-text breadcrumb-padding'>{props.activeText}</span>
      </Breadcrumb.Item>
    </Breadcrumb>
    </div>
  );
}
// define Breadcrumb bootstrap end

export default CustomBreadcrumb;