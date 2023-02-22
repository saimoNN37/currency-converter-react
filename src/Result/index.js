import { StyledResult } from "./styled";

const Result = ({amount, currency, rate}) => {
    const result = amount / rate;

    return (
        <StyledResult>{result.toFixed(2)} {currency}</StyledResult>
    )
};

export default Result;

