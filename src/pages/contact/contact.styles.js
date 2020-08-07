import styled from 'styled-components';
import "@ui5/webcomponents/dist/Label";

export const Wrapper = styled.div`
    margin: 0 40px 20px 40px;
    max-width: 50%;

    @media (max-width: 1020px) {
        max-width: 100%;
    }
`;

export const ContactBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px 20px 0;
`;

export const ContactNameBlock = styled.div`
    display: flex;

    @media (max-width: 1020px) {
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
`;
