import {showMessage, hideMessage} from 'react-native-flash-message';

export const flashMessage = {
  success: (msg: string) => {
    showMessage({
      message: msg,
      type: 'success',
      duration: 2000,
      floating: true,
    });
  },
  error: (msg: string) => {
    showMessage({
      message: msg,
      type: 'danger',
      duration: 4000,
      floating: true,
    });
  },
};
