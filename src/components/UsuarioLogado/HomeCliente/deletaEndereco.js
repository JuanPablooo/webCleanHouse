import { buscarCliente, atualizarCliente } from "../../../services/clientes";

const deletaEndereco = async (id, user, setGetLocalStorage) => {
  //Definindo variáveis
  var retorno = "";
  console.log(id);
  //Busca cliente
  retorno = await buscarCliente(user.id);

  const usuario = await retorno.json();

  //Muda a data para formato americano
  var rsData = usuario.dataNascimento.split("/");
  const data = rsData[2] + "-" + rsData[1] + "-" + rsData[0];

  // //Altera os dados
  usuario.dataNascimento = data;

  const residencias = usuario.residencias;
  var residenciasCliente = [];

  for (var i = 0; i < residencias.length; i++) {
    if (usuario.residencias[i].id !== id) {
      residenciasCliente = [...residenciasCliente, usuario.residencias[i]];
    }
  }

  usuario.residencias = residenciasCliente;
  //Atualiza cliente
  var response = await atualizarCliente(usuario);

  //Alterações necessárias para salvar no localstorage
  usuario.email = usuario.usuario.email;
  usuario.tipo = usuario.usuario.tipo;
  delete usuario.usuario;

  if (response.ok) {
    localStorage.setItem("user", JSON.stringify(usuario));
    setGetLocalStorage(JSON.parse(localStorage.getItem("user")));
  }
};

export default deletaEndereco;
