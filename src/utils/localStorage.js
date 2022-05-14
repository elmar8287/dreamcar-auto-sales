import { createStore, binActionCreators } from "react-redux";
import * as actions from "../redux/actions";
import reducer from "../redux/reducer";

const store = createStore(reducer);
const { dispatch } = store;
const { nameHandle, emailHandle, messageHandle } = binActionCreators(actions, dispatch);

dispatch(nameHandle());
dispatch(emailHandle());
dispatch(messageHandle());
