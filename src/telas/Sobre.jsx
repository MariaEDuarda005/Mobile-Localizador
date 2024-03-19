import { StyleSheet, View, Text } from "react-native";
import { Cabecalho } from "../componentes/Cabecalho";

// esse formato de função é uma função literal
export function Sobre(){
    return(
        <View style={estilos.conteiner}>
            <Cabecalho 
                titulo="Sobre"
                subtitulo="2DS"
            />
            <Text style={estilos.texto}>Pagina do sobre!</Text>
        </View>
    );
}

// deixar o estilo no mesmo arquivo por conta das boas praticas
const estilos = StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor: '#1b263b',
    },
    texto: {
        color: '#fff'
    }
})