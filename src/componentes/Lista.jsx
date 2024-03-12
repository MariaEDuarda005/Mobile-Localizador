import { View, StyleSheet , Text, FlatList} from "react-native"
import { Usuario } from "./Usuario"

export function Lista({colecao, remover}){
    // {} dentro do javascript desestrutura o componente


    // () => {} - arrow function expression
    // quando é só um parametro fuca assim: x => console.log()


    return(
        <View>
            <FlatList 
                data = {colecao}
                keyExtractor = {item => item.codigo}
                renderItem = {({item}) => (
                    <Usuario 
                        nome={item.nome}
                        email={item.email}
                        telefone={item.telefone}
                        remover={() => remover(item.codigo)}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={estilos.texto}>
                        Nenhum usuario cadastrado
                    </Text>
                )}
            />
        </View>
    )
}
const estilos = StyleSheet.create({
    texto: {
        color: '#fff',
        paddingTop: 25,
        textAlign: 'center',
        fontSize: 16
    },
})

// 