import { doRequest } from "./baseapi";

const RESOURSE = "v1/profissionais/";

export const buscarProfissional = (id) => {
  return doRequest(RESOURSE, "GET", "", id);
};

export const inserirProfissional = (usuario) => {
  return doRequest(RESOURSE, "POST", usuario);
};

export const removerProfissional = (id) => {
  return doRequest(RESOURSE, "DELETE", "", id);
};

export const atualizarProfissional = (usuario) => {
  return doRequest(RESOURSE, "PUT", usuario, usuario.id);
};
