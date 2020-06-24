import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const ToastSuccess = () => {
  toast.success("Usuário atualizado com sucesso");
};

export default ToastSuccess;
