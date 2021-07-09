import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Reset = createGlobalStyle`
    ${reset}

    * {
        box-sizing : border-box;
    }

    :focus {
        outline: none;
    }
`;

export default Reset;
