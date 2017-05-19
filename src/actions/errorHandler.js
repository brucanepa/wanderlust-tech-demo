import { errors } from './requests';

const errorHandler = (dispatch, actionType) => {
  dispatch(errors.generic(actionType))
};

export default errorHandler;