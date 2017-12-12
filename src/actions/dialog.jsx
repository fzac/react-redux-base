const close = () => (
  {
    type: 'CLOSE_DIALOG',
    isDialog: false,
  }
);

const open = message => (
  {
    type: 'OPEN_DIALOG',
    isDialog: true,
    message,
  }
);

/**
 * @method closeDialog
 * @description ダイアログを閉じる
 */
export const closeDialog = () => (
  (dispatch) => {
    dispatch(close());
  }
);

/**
 * @method openDialog
 * @description ダイアログを開く
 * @param {String} message
 */
export const openDialog = message => (
  (dispatch) => {
    dispatch(open(message));
  }
);
