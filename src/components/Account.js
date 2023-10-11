import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit, withdraw } from 'redux/AccountSlice';
import { Balance } from './Balance';

export const Account = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  return (
    <div>
      <Balance />
      <input
        type="number"
        value={value}
        onChange={event => setValue(Number(event.target.value))}
      />
      <button onClick={() => dispatch(deposit(value))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(value))}>Withdraw</button>
    </div>
  );
};
