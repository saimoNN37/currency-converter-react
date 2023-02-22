import { useEffect, useState } from "react";
import { StyledClock } from "./styled";

export const Clock = () => {
    const [date, setDate] = useState(new Date());
    const formatedData = (date) => 
    date.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    
    

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <StyledClock>
            Dzisiaj jest
            {" "}
            {formatedData(date)}
        </StyledClock>
    );
};
export default Clock;
