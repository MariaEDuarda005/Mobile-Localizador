import { StyleSheet, View, Text } from "react-native";
import { Cabecalho } from "../componentes/Cabecalho";
import { Botao } from "../componentes/Botao";

// esse formato de função é uma função literal
export function Inicial(){
    return(
        <View style={estilos.conteiner}>
            <Cabecalho 
                titulo="Senai Roberto Mange"
                subtitulo="2DS"
            />
            <Botao texto="Usuário"/>
            <Botao texto="Sensores"/>
            <Botao texto="Sobre"/>
        </View>
    );
}

// deixar o estilo no mesmo arquivo por conta das boas praticas
const estilos = StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor: '#1b263b',
    },
})