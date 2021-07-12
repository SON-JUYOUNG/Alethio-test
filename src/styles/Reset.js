import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Reset = createGlobalStyle`
    ${reset}

    * {
        box-sizing : border-box;
    }

    input:focus {
        outline: none;
    }
`;

export default Reset;
