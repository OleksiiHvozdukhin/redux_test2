import { combineReducers, createStore } from 'redux';

import { devToolsEnhancer } from '@redux-devtools/extension';
import { accountReducer } from './AccountSlice';
import { localeReducer } from './LocaleSlice';

const initionalState = {
  account: {
    balance: 5,
  },
  locale: {
    lang: 'uk',
  },
};

const rootReducer = combineReducers({
  account: accountReducer,
  locale: localeReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
