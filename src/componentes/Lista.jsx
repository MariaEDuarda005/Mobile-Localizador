import { View, StyleSheet , Text, FlatList} from "react-native"
import { Usuario } from "./Usuario"

export function Lista(){
    const listaUsuarios = [
        {
            codigo: '1',
            nome: 'Maria',
            email: 'maria@gmail.com.br',
            telefone:'(19) 12934-5678'
        },
        {
            codigo: '2',
            nome: 'Joao',
            email: 'joao@gmail.com.br',
            telefone:'(19) 99895-5678'
        },
        {
            codigo: '3',
            nome: 'Marcela',
            email: 'marcela@gmail.com.br',
            telefone:'(19) 91053-5678'
        }
    ]
    // {} dentro do javascript desestrutura o componente
    return(
        <View>
            <FlatList 
                data={ listaUsuarios }
                keyExtractor={ (item) => {item.codigo} }
                renderItem={ ({item}) => (
                    <Usuario 
                        nome={item.nome}
                        email={item.email}
                        telefone={item.telefone}
                    />
                ) }
            />
        </View>
    )
}
const estilos = StyleSheet.create({
    texto: {
        color: '#fff',
        paddingTop: 25
    },
})