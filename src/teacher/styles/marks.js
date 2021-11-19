import styled, { css } from "styled-components";

export const Input = styled.input`
    // width: 30%;
    // height: 40px;
    ${(props) =>
        props.width === "full" &&
        css`
            width: 100%;
        `}

    ${(props) =>
        props.margin &&
        css`
            margin-top: 10px;
        `}

    @media (min-width:0px) and (max-width:766px) {
        width: 100% !important;
    }

    // :read-only {
    //     background-color: #fff;
    // }
    :focus {
        box-shadow: inset 0 -1px 0 #fff;
        border: 1px solid #ced4da;
    }

    :active {
        border-color: none;
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const StyledDiv = styled.div`
    ${(props) =>
        props.width === "full" &&
        css`
            width: 100%;
        `}

    ${(props) =>
        props.width === "small" &&
        css`
            width: 33.3%;
        `}
    ${(props) =>
        props.width === "med" &&
        css`
            width: 66.6%;
        `}
`;
