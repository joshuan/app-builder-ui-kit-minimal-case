import React from 'react';

export const Calculator = () => {
    const [a, setA] = React.useState<number>(0);
    const [b, setB] = React.useState<number>(0);

    const handleChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
        setA(Number(event.target.value));
    };
    const handleChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
        setB(Number(event.target.value));
    };

    return (
        <fieldset>
            <legend>Calculator</legend>
            <p>
                A: <input type="number" value={String(a)} onChange={handleChangeA} />
            </p>
            <p>
                B: <input type="number" value={String(b)} onChange={handleChangeB} />
            </p>
            <hr />
            <p>
                Result: <input disabled value={String(a + b)} />
            </p>
        </fieldset>
    );
};
