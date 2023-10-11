import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from 'redux/LocaleSlice';

export const LangSwitcher = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.locale.lang);
  return (
    <div>
      <select value={lang} onChange={e => dispatch(changeLang(e.target.value))}>
        <option value="uk">UK</option>
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};
