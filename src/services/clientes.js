import { doRequest } from "./baseapi";

const RESOURSE = "v1/clientes/";

export const buscarCliente = (id) => {
  return doRequest(RESOURSE, "GET", "", id);
};

export const inserirCliente = (usuario) => {
  return doRequest(RESOURSE, "POST", usuario);
};

export const removerCliente = (id) => {
  return doRequest(RESOURSE, "DELETE", "", id);
};

export const atualizarCliente = (usuario) => {
  return doRequest(RESOURSE, "PUT", usuario, usuario.id);
};
