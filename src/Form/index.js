import { currencies } from "../currencies";
import { useState } from "react";
import Result from "../Result";
import Clock from "../Clock";
import { Box, Field, Fieldset, LabelText, Legend } from "./styled";

const Form = () => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);
    const rate = currencies.find(({ short }) => short === currency).rate;

    return (

        <Box>
            <Fieldset>
                <Legend>Kalkulator Walut</Legend>
                <Clock />
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
                            {currencies.map((currency) => (
                                <option
                                    value={currency.short}
                                    key={currency.short}
                                >
                                    {currency.name}
                                </option>
                            ))}
                        </Field>
                    </label>
                </p>
                <p>Kurs walut z dnia 28.12.2022</p>
                <Result
                    amount={amount}
                    currency={currency}
                    rate={rate}
                />
            </Fieldset>
        </Box>
    );
};

export default Form;