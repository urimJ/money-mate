import { useState } from 'react';
import { bgColor } from '../../../GlobalStyle';

const DropdownChart = ({ handleChartSelect, selectedChart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
        {selectedChart || '차트 선택'}
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
            onClick={() => {handleChartSelect('Pie'); setIsOpen(false);}}
            style={{
              borderBottom: '1px solid grey',
              height: '50px',
              padding: '15px',
            }}
          >
            Pie
          </li>
          <li
            onClick={() => {handleChartSelect('Line'); setIsOpen(false);}}
            style={{
              borderBottom: '1px solid grey',
              height: '50px',
              padding: '15px',
            }}
          >
            Line
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownChart;
