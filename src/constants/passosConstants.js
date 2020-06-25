import Passo1Cliente from '../components/Cadastro/Clientes/Passo1Cliente';
import Passo2Cliente from '../components/Cadastro/Clientes/Passo2Cliente';
import Passo3Cliente from '../components/Cadastro/Clientes/Passo3Cliente';

const actionsTypes = {
    MUDA_PASSO: 'MUDA_PASSO'
}
const todosPassos = [Passo1Cliente, Passo2Cliente, Passo3Cliente];

const passoInicial = { passo : todosPassos[0]}

export { actionsTypes, todosPassos, passoInicial }