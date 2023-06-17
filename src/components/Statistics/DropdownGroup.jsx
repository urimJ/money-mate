import { useState } from 'react';
import { bgColor } from '../../../GlobalStyle';

const DropdownGroup = ({ handleGroupSelect, selectedGroup }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  console.log(selectedGroup);

  const handleSelect = (group) => {
    handleGroupSelect(group);
    setIsOpen(false);
    localStorage.setItem('selectedGroup', group); // 로컬 스토리지에 선택된 그룹 저장
  };

  return (
    <div className="dropdown">
      <button
        style={{
          backgroundColor: bgColor,
          width: '200px',
          height: '50px',
          borderRadius: '5px',
          border: '1px solid gray',
          fontSize: '16px',
        }}
        className="dropdown-button"
        onClick={toggleDropdown}
      >
        {selectedGroup || '그룹 선택'}
      </button>
      {isOpen && (
        <ul
          style={{
            backgroundColor: bgColor,
            width: '200px',
            borderRadius: '5px',
            border: '1px solid gray',
            textAlign: 'center',
          }}
          className="dropdown-menu"
        >
          <li
            onClick={() => {handleSelect('Group1'); setIsOpen(false);}}
            style={{
              borderBottom: '1px solid grey',
              height: '50px',
              padding: '15px',
            }}
          >
            Group1
          </li>
          <li
            onClick={() =>{handleSelect('Group2'); setIsOpen(false);}}
            style={{
              borderBottom: '1px solid grey',
              height: '50px',
              padding: '15px',
            }}
          >
            Group2
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownGroup;
