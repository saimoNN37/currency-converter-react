import "./style.css";

const Result = ({amount, currency, rate}) => {
    const result = amount / rate;

    return (
        <p className="result">{result.toFixed(2)} {currency}</p>
    )
};

export default Result;

