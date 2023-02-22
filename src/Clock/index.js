import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrenDate";

export const Clock = () => {
    const {date, formatedData} = useCurrentDate();
    return (
        <StyledClock>
            Dzisiaj jest
            {" "}
            {formatedData(date)}
        </StyledClock>
    );
};
export default Clock;
