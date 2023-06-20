import styled from 'styled-components';
import { bgColor, primaryColor } from '../../../GlobalStyle';

// FormDialog와 관련된 styled component
export const ButtonInput = styled.button`
    margin : 0px 170px 0px 0px;
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.bgColor};
    width: 114px;
    height: 50px;
    border: 0px solid ${(props) => props.theme.primaryColor};
    border-radius: 10px;
    cursor: pointer;
    
    @media all and (max-width: 1280px) {
        width: ${(props) => (props.navToggle ? '30%' : '10vw')};
    }
    @media (max-height: 450px) or (max-width: 980px) {
        width: 30px;  
        width: ${(props) => (props.navToggle ? '15%' : '30px')};
    }
`;

export const SelectedVariantsSpending = styled.div`
    display: flex;
    flex-direction: row;
`