import { useState } from "react"
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native"


export function Formulario({adicionar}){

    // uma para leitura e outra para alteração
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    // onChangeText - executado a cada alteração que acontece dentro o input
    // value - a informação que vai ser mostrada no input

    return(
        <View style={estilos.container}>

        <View style={estilos.containerCampos}>
            <TextInput style={estilos.campo}
                placeholder="Nome"
                placeholderTextColor='#000'
                keyboardType='default'
                onChangeText={setNome}
                value={nome}
            />

            <TextInput style={estilos.campo}
                placeholder="E-mail"
                placeholderTextColor='#000'
                keyboardType='email-address'
                onChangeText={setEmail}
                value={email}
            />

            <TextInput style={estilos.campo}
                placeholder="Telefone"
                placeholderTextColor='#000'
                keyboardType='phone-pad'
                onChangeText={setTelefone}
                value={telefone}
            />
        </View>

            <TouchableOpacity 
                style={estilos.botao}
                onPress={() => adicionar(nome,email,telefone)}
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
        //backgroundColor: '#284b63'
    },
    containerCampos: {
        flex: 1
    },
    campo: {
        height: 50,
        backgroundColor: '#e5e5e5',
        color: '#000',
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
        // margin start é equivalente ao margin left
        marginStart: 10,
        backgroundColor: '#415a77',
        // marginVertical: 5,
        // padding: 10,
        borderRadius: 5,
        fontSize: 30
    },
    texto: {
        color: '#000',
        fontSize: 26
    }
})