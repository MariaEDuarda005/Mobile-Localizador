import { StyleSheet, TouchableOpacity , Text} from "react-native"
import { useState } from 'react'

// os () são parametros
//  props são mecanismos que permitem transmitir dados de um componente pai para um componente filho.
// props - recupera propriedades que foram passadas
// ({texto}) isso é para pegar apenas a props que interessa, desestruturando na passagem dela
// onPress={} vincular evento a um componente do html

export const Botao = ({texto}) => {

    // se o dado tem que ficar gravado dentro do componente usa o state
    // como se fosse um get e um set, uma função de leitura e uma de operação
    const [cliques, setCliques] = useState(0)

    const contarCliques = () =>{
        // ++ só funciona com tipos primitivos
        setCliques( cliques + 1 )
    }

    return(
        <TouchableOpacity 
            style={estilos.conteiner}
            onPress={contarCliques}
        >
            <Text style={estilos.texto}>{ texto } { cliques }</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    conteiner:{
        backgroundColor: '#415a77',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 150,
        marginTop: 24,
        marginStart: 24,
        borderRadius: 12,
        borderColor: '#778da9',
        borderWidth: 1
    },
    texto:{
        color:'#fff',
        fontSize: 20
    }
})