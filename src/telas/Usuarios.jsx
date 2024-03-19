import { View, StyleSheet } from "react-native"
import { Cabecalho } from "../componentes/Cabecalho" 
import { Formulario } from "../componentes/Formulario" 
import { Lista } from "../componentes/Lista"
import { useState } from "react"
// fazer um id unico
import 'react-native-get-random-values' 
import {v4 as uuid} from 'uuid'


export function Usuarios(){

    const [listaUsuarios, setListaUsuarios] = useState([]);

    const adicionarUsuario = (nome,email,telefone) => {

        let novoUsuario = {
            codigo: uuid(),
            nome: nome,
            email: email,
            telefone: telefone
        }

        setListaUsuarios([...listaUsuarios, novoUsuario])

        console.log(novoUsuario)
    }

    const removerUsuario = codigo => {
        // função que gera um nova array a partir de uma regra que é colocada dentro do ()
        // só mantem na lista quem for diferente do codigo que eu quero excluir 
        setListaUsuarios(
            listaUsuarios.filter( usuario => usuario.codigo !== codigo )
        )
    }

    //... - pega o elemento e distribui em elementos individuais 
    // mas ele tambem pode servir para pegar tudo de um determinado local

    return(
        <View style={estilos.conteiner}>

            <Cabecalho titulo="Usuários"/>  

            <Formulario adicionar={adicionarUsuario}/>

            {/* <FormularioCadastro adicionar = {adicionarUsuario}/>*/}

            <Lista 
                colecao={listaUsuarios}
                remover={removerUsuario}
            />

        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#003049'
    }
})