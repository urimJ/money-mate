import { useState } from 'react';
import { bgColor} from '../../../GlobalStyle';

const DropdownGroup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button style={{ backgroundColor: bgColor, width:'200px', height:'50px', borderRadius:'5px', border:'1px solid gray', fontSize:'16px'}} className="dropdown-button" onClick={toggleDropdown}>
        그룹 선택
      </button>
      {isOpen && (
        <ul style={{backgroundColor: bgColor, width:'200px', borderRadius:'5px', border:'1px solid gray',textAlign:'center'}} className="dropdown-menu">
          <li style={{borderBottom:'1px solid grey',height:'50px',padding:'15px'}}>그룹 1</li>
          <li style={{borderBottom:'1px solid grey',height:'50px',padding:'15px'}}>그룹 2</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownGroup;