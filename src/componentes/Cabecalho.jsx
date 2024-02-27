import { StyleSheet, View, Text } from "react-native"

// nome da função que gera o componente deve ter o mesmo nome que o arquivo
export const Cabecalho = ({titulo, subtitulo}) => {
    return(
        <View style={estilos.container}>
            <Text style={estilos.texto}>{titulo}</Text>
            <Text style={estilos.texto}>{subtitulo}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor: "#415a77",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12
    },
    texto:{
        justifyContent: 'center',
        alignItems: 'center',
        color: "#fff",
        fontSize: 24,
        fontWeight: '300'
    }
})

