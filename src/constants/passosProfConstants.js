import Passo1Profissional from '../components/Cadastro/Profissional/Passo1Profissional';
import Passo2Profissional from '../components/Cadastro/Profissional/Passo2Profissional';
import Passo3Profissional from '../components/Cadastro/Profissional/Passo3Profissional';
import Passo4Profissional from '../components/Cadastro/Profissional/Passo4Profissional';
import Passo5Profissional from '../components/Cadastro/Profissional/Passo5Profissional';

const actionsTypes = {
    MUDA_PASSO: 'MUDA_PASSO'
}

const todosPassos = [Passo1Profissional, Passo2Profissional, Passo3Profissional, Passo4Profissional, Passo5Profissional];

const passoInicial = { passo: todosPassos[0] }

export { actionsTypes, todosPassos, passoInicial }