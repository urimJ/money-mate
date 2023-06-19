import { useState } from 'react';
import styled from 'styled-components';
import { bgColor } from '../../../GlobalStyle';

const DropdownButton = styled.button`
  background-color: ${(props) => props.theme.bgColor};
  width: 200px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.StatisticButtonColor};
  font-size: 16px;
  font-family: 'GmarketSansTTFLight';
  &:hover {
    border: 1px solid black;
  }
`;

const DropdownMenu = styled.ul`
  background-color: ${(props) => props.theme.bgColor};
  width: 200px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.StatisticButtonColor};
  text-align: center;
`;

const DropdownItem = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.StatisticButtonColor};
  height: 50px;
  padding: 15px;
`;

const DropdownChart = ({ handleChartSelect, selectedChart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <DropdownButton className="dropdown-button" onClick={toggleDropdown}>
        {selectedChart || '차트 선택'}
      </DropdownButton>
      {isOpen && (
        <DropdownMenu className="dropdown-menu">
          <DropdownItem onClick={() => {handleChartSelect('Pie'); setIsOpen(false);}}>
            Pie
          </DropdownItem>
          <DropdownItem onClick={() => {handleChartSelect('Bar'); setIsOpen(false);}}>
            Bar
          </DropdownItem>
          <DropdownItem onClick={() => {handleChartSelect('Line'); setIsOpen(false);}}>
            Line
          </DropdownItem>
          <DropdownItem onClick={() => {handleChartSelect('PolarArea'); setIsOpen(false);}}>
            PolarArea
          </DropdownItem>
          <DropdownItem onClick={() => {handleChartSelect('Radar'); setIsOpen(false);}}>
            Radar
          </DropdownItem>
        </DropdownMenu>
      )}
    </div>
  );
};

export default DropdownChart;

