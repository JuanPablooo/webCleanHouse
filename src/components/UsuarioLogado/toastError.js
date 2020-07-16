import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const ToastError = () => {
  toast.error(
    "Erro ao atualizar, certifique-se de que seus dados estão certos!"
  );
};

export default ToastError;
