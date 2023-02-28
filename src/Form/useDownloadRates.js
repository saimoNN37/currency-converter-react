import axios from "axios";
import { useEffect, useState } from "react";

export const useDownloadRates = () => {
    const [ratesData, setRatesData] = useState({ state: "loading" });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                setRatesData({
                    state: "success",
                    rates: response.data.rates,
                    date: response.data.date,
                });
            }
            catch (error) {
                setRatesData({
                    state: "error"
                });
            }
        };
        setTimeout(fetchRates, 2000)
    }, []);

    return ratesData;
};