import styled from "styled-components";

export const Box = styled.form`
    margin-top: 30px;
`;

export const Fieldset = styled.fieldset`
    background-color: white;
    border-radius: 15px; 
    border: none;
    box-shadow: rgba(156, 146, 156, 50);
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    color: white;
    background-color: hsl(180, 94%, 27%);
    padding: 10px;
    margin-bottom: 20px;
    cursor: pointer;
`;

export const Legend = styled.legend`
    border-radius: 5px;
    background-color: #025252;
    color: white;
    padding: 5px;
`;

export const LabelText = styled.span`
    display: inline-block;
    max-width: 150px;
    width: 100%;
    margin-right: 10px;
`;

export const Field = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    max-width: 300px;
`;

export const Loading = styled.p`
  color: black;
`;

export const Failure = styled.p`
  color: crimson;
`;