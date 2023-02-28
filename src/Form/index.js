import { useState } from "react";
import { Result } from "./Result";
import Clock from "../Clock";
import { Box, Failure, Field, Fieldset, LabelText, Legend, Loading, Button } from "./styled";
import { useDownloadRates } from "./useDownloadRates";

const Form = () => {
    const ratesData = useDownloadRates();

    const [amount, setAmount] = useState();
    const [currency, setCurrency] = useState("USD");
    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            currency,
            startAmount: +amount,
            finalAmount: amount * rate,
        });
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (

        <Box onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>Kalkulator Walut</Legend>
                <Clock />
                {ratesData.state === "loading"
                    ? (
                        <Loading>Chwileczke...⏳  <strong>Ładuję aktualne kursy walut z Europejskiego Banku Centralnego ⏳ </strong>
                        </Loading>
                    )
                    : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Kursy walut nie pobrały się 😐 . Sprawdź swoje połączenie internetowe 😐
                        </Failure>
                    ) : (
                        <>
                            <p>
                                <label>
                                    <LabelText>Kwota w PLN</LabelText>
                                    <Field
                                        type="number"
                                        step="0.01"
                                        required min="0"
                                        placeholder="Wpisz kwotę"
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    <LabelText>Waluta</LabelText>
                                    <Field
                                        as="select"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {Object.keys(ratesData.rates).map((currency) => (
                                            <option key={currency} value={currency}>
                                                {currency}
                                            </option>
                                        ))}
                                    </Field>
                                </label>
                            </p>
                            <Button>Przelicz</Button>
                            <p>Kurs walut z dnia {ratesData.date}</p>
                           <Result result={result}/>
                        </>
                    ))}
                   
            </Fieldset>
        </Box>
    );
};

export default Form;