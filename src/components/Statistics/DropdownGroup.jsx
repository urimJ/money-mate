import { useState } from 'react';
import styled from 'styled-components';

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
  &:hover {
    border: 1px solid black;
  }
`;

const DropdownGroup = ({ handleGroupSelect, selectedGroup }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (group) => {
    handleGroupSelect(group);
    localStorage.setItem('selectedGroup', group);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <DropdownButton className="dropdown-button" onClick={toggleDropdown}>
        {selectedGroup || '그룹 선택'}
      </DropdownButton>
      {isOpen && (
        <DropdownMenu className="dropdown-menu">
          <DropdownItem onClick={() => {handleSelect('Group1')}}>
            Group1
          </DropdownItem>
          <DropdownItem onClick={() => {handleSelect('Group2')}}>
            Group2
          </DropdownItem>
        </DropdownMenu>
      )}
    </div>
  );
};

export default DropdownGroup;
