import styled from 'styled-components';
import { bgColor, primaryColor } from '../../../GlobalStyle';

// FormDialog와 관련된 styled component
export const ButtonInput = styled.button`
    margin : 0px 0px 20px 20px;
    background-color: ${primaryColor};
    color: white;
    width: 114px;
    height: 50px;
    border: 0px solid ${primaryColor};
    border-radius: 10px;

    @media all and (max-width: 1280px) {
        width: ${(props) => (props.navToggle ? '100px' : '114px')};
        margin : 0px 0px 10px 10px;
    }
    @media (max-height: 450px) or (max-width: 980px) {
        width: 10vw;
        margin : 0px 0px 10px 10px;
    }
`;
