import { useState } from "react";
import Result from "../Result";
import Clock from "../Clock";
import { Box, Field, Fieldset, LabelText, Legend } from "./styled";
import { useDownloadRates } from "./useDownloadRates";

const Form = () => {
    const ratesData = useDownloadRates();

    const [amount, setAmount] = useState('EUR');
    const [currency, setCurrency] = useState('');
    const [result, setResult] = useState('');

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
                        <div>Chwileczke...⏳  <strong>Ładuję aktualne kursy walut z Europejskiego Banku Centralnego ⏳ </strong>
                        </div>
                    )
                    : (
                        ratesData.state === "error" ? (
                            <div>
                                Kursy walut nie pobrały się 😐 . Sprawdź swoje połączenie internetowe 😐
                            </div>
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
                <button>Przelicz</button>
                <p>Kurs walut z dnia 28.12.2022</p>
                <Result
                    result={result}
                />
                </>
                        ))}
            </Fieldset>
        </Box>
    );
};

export default Form;