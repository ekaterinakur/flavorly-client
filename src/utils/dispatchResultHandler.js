import toast from 'react-hot-toast';

export const dispatchResultHandler = async (
  dispatchActionPromise,
  successMessage,
  errorMessage
) => {
  try {
    await dispatchActionPromise;

    toast.success(successMessage);
  } catch (err) {
    toast.error(err.message || errorMessage);
  }
};
