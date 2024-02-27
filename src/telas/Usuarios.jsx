import { View, StyleSheet } from "react-native"
import { Cabecalho } from "../componentes/Cabecalho" 
import { Formulario } from "../componentes/Formulario" 
import { Lista } from "../componentes/Lista"


export function Usuarios(){
    return(
        <View style={estilos.conteiner}>
            <Cabecalho titulo="Usuários"/>  
            <Formulario />
            <Lista />
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#003049'
    }
})