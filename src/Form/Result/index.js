import { StyledResult } from "./styled";

export const Result = ({ result }) => (
    <StyledResult>
        {result !== undefined && (
            <>
                {result.startAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;

                <strong>
                    {result.finalAmount.toFixed(2)} {result.currency}
                </strong>
            </>
        )}
    </StyledResult>


);



