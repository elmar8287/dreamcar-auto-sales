import { createStore } from 'react-redux';

import { nameHandle, emailHandle, messageHandle } from "../redux/actions";
import reducer from "../redux/reducer";

const store = createStore(reducer);

store.dispatch(nameHandle());
store.dispatch(emailHandle());
store.dispatch(messageHandle());
