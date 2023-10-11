import { useSelector } from 'react-redux';
import { Account } from './Account';
import { LangSwitcher } from './LangSwitcher';

export const App = () => {
  const lang = useSelector(state => state.locale.lang);
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <LangSwitcher />
      <Account />
      <b>Selected lang: {lang}</b>
    </div>
  );
};
