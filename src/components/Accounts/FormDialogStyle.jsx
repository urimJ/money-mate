import styled from 'styled-components';
import { bgColor, primaryColor } from '../../../GlobalStyle';

// FormDialog와 관련된 styled component
export const ButtonInput = styled.button`
    margin : 0px 0px 0px 20px;
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.bgColor};
    width: 114px;
    height: 50px;
    border: 0px solid ${(props) => props.theme.primaryColor};
    border-radius: 10px;
    cursor: pointer;
    
    @media all and (max-width: 1280px) {
    width: ${(props) => (props.navToggle ? '80px' : '10vw')};
    }
    @media (max-height: 450px) or (max-width: 678px) {
        width: 60%
    }
`;

export const SelectedVariantsSpending = styled.div`
    display: flex;
    flex-direction: row;
`