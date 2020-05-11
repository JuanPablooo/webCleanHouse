import Passo1Cliente from '../components/Cadastro/Passo1Cliente';
import Passo2Cliente from '../components/Cadastro/Passo2Cliente';
import Passo3Cliente from '../components/Cadastro/Passo3Cliente';

const actionsTypes = {
    MUDA_PASSO: 'MUDA_PASSO'
}
const todosPassos = [Passo1Cliente, Passo2Cliente, Passo3Cliente];


const passoInicial = { passo : todosPassos[2]}

export { actionsTypes, todosPassos, passoInicial }