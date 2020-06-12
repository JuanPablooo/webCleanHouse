//import { getToken } from "./auth";

const url = "http://localhost:8080/";

//Faz requisição privada
export const doRequest = async (rota, method, data = "", urlParam = "") => {
  const params = {
    method: method,
    headers: {
      Accept: "applicatiom/json",
      "Content-Type": "application/json",
      //Authorization: "Bearer " + getToken(),
    },
  };

  //Verifica se o método é PUT ou POST
  if (!["GET", "DELETE"].includes(method)) {
    //Adiciona o json/data no body
    params.body = JSON.stringify(data);
  }

  console.log(url + rota + urlParam);
  return await fetch(url + rota + urlParam, params);
};

//Faz requisição pública
export const doPublicRequest = async (
  rota,
  method,
  data = "",
  urlParam = ""
) => {
  const params = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  //Verifica se o método é PUT ou POST
  if (!["GET", "DELETE"].includes(method)) {
    params.body = JSON.stringify(data);
  }

  return await fetch(url + rota + urlParam, params);
};
