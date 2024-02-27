import { useState } from "react"
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native"


export function Formulario(){

    // uma para leitura e outra para alteração
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    function adicionarUsuario(){
        let novoUsuario = {
            nome: nome,
            email: email,
            telefone: telefone
        }

        console.log(novoUsuario)
    }

    // onChangeText - executado a cada alteração que acontece dentro o input
    // value - a informação que vai ser mostrada no input

    return(
        <View style={estilos.container}>

        <View style={estilos.containerCampos}>
            <TextInput style={estilos.campo}
                placeholder="Nome"
                placeholderTextColor='#fff'
                keyboardType='default'
                onChangeText={setNome}
                value={nome}
            />

            <TextInput style={estilos.campo}
                placeholder="E-mail"
                placeholderTextColor='#fff'
                keyboardType='email-address'
                onChangeText={setEmail}
                value={email}
            />

            <TextInput style={estilos.campo}
                placeholder="Telefone"
                placeholderTextColor='#fff'
                keyboardType='phone-pad'
                onChangeText={setTelefone}
                value={telefone}
            />
        </View>

            <TouchableOpacity 
                style={estilos.botao}
                onPress={adicionarUsuario}
            >
                <Text style={estilos.texto}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: '#284b63'
    },
    containerCampos: {
        flex: 1
    },
    campo: {
        height: 50,
        backgroundColor: '#590d22',
        color: '#fff',
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        fontSize: 16
    },
    botao: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: 170,
        // ,argin start é equivalente ao margin left
        marginStart: 10,
        backgroundColor: '#590d22',
        // marginVertical: 5,
        // padding: 10,
        borderRadius: 5,
        fontSize: 30
    },
    texto: {
        color: '#fff',
        fontSize: 26
    }
})