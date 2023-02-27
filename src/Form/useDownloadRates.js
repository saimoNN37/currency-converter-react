import axios from "axios";
import { useEffect, useState } from "react";

export const useDownloadRates = () => {
    const [ratesData, setRatesData] = useState({state: "Loading"});

    useEffect(() => {
        const fetchRates = async () => {
            try {
              const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
              setRatesData({
                state: "success",
                rates: response.data.rates,
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