import Passo1Cliente from '../components/Cadastro/Passo1Cliente';
import Passo2Cliente from '../components/Cadastro/Passo2Cliente';

const actionsTypes = {
    MUDA_PASSO: 'MUDA_PASSO'
}
const todosPassos = [Passo1Cliente, Passo2Cliente];


const passoInicial = { passo: todosPassos[0]}

export { actionsTypes, todosPassos, passoInicial }