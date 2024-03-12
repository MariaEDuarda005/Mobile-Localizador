import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

export function Usuario({nome, email, telefone, remover}){
    return(
        <View style={estilos.conteiner}>

            <View style={estilos.conteinerDados}>
                <Text style={estilos.texto}>{nome}</Text>
                <Text style={estilos.texto}>{email}</Text>
                <Text style={estilos.texto}>{telefone}</Text>
            </View>

            <TouchableOpacity style={estilos.botao} onPress={remover}>
                <Text style={estilos.textoBotao}>-</Text>
            </TouchableOpacity>

        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        margin: 5
    },
    conteinerDados: {
        flex: 1,
        backgroundColor: '#590d22',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    botao: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 10,
        backgroundColor: '#590d22',
        borderRadius: 5,   
    },
    texto: {
        color: '#fff',
        fontSize: 14
    },
    textoBotao: {
        color: '#fff',
        fontSize: 36
    }
})