const RESOURCE = "clientes/";

export const listar = () => {
  return requisitaApi(RESOURCE, "GET");
};
export const buscarPorId = () => {};
export const inserir = (serie) => {
  return requisitaApi(RESOURCE, "POST", serie);
};

export const remover = (id) => {
  return requisitaApi(RESOURCE, "DELETE", "", id);
};
export const atualizar = (serie) => {
  return requisitaApi(RESOURCE, "PUT", serie, serie.id);
};
