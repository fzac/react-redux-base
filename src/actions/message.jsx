const close = () => (
  {
    type: 'CLOSE_MESSAGE',
    isDialog: false,
  }
);

const open = (message, warn) => (
  {
    type: 'OPEN_MESSAGE',
    isDialog: true,
    message,
    warn,
  }
);

/**
 * @method closeMessage
 * @description ダイアログを閉じる
 */
export const closeMessage = () => (
  (dispatch) => {
    dispatch(close());
  }
);

/**
 * @method openMessage
 * @description ダイアログを開く
 * @param {String} message
 */
export const openMessage = message => (
  (dispatch) => {
    dispatch(open(message));
  }
);
