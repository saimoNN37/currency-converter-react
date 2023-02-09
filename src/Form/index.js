import "./style.css";
import { currencies } from "../currencies";
import { useState } from "react";
import Result from "../Result";

const Form = () => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);
    const rate = currencies.find(({ short }) => short === currency).rate;

    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator Walut</legend>
                <p>
                    <label className="form__label">
                        <span className="form__labelText">Kwota w PLN</span>
                        <input
                            className="form__field"
                            type="number"
                            step="0.01"
                            required min="0"
                            placeholder="Wpisz kwotę"
                            value={amount}
                            onChange={({target }) => setAmount(target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label className="form__label">
                        <span className="form__labelText">Waluta</span>
                        <select
                            className="form__field"
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
                        </select>
                    </label>
                </p>
                <p>Kurs walut z dnia 28.12.2022</p>
                <Result 
                amount={amount}
                currency={currency}
                rate={rate}
                />              
            </fieldset>
        </form>
    );
};

export default Form;