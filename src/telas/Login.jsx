import React, { useState } from "react"; 
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import { Cabecalho } from "../componentes/Cabecalho";

export function Login(){

    const [mostrarCampos, setMostrarCampos] = useState(false);
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [usuarioLogado, setUsuarioLogado] = useState(false);

    const adicionarLogin = (usuario, senha) => {
        let novoLogin = {
            usuario: usuario,
            senha: senha
        }

        // Exibir os campos de usuário e senha após o primeiro envio
        setMostrarCampos(true);
        console.log(novoLogin);
    }

    const handleEnviarPress = () => {
        adicionarLogin(usuario, senha);
        setUsuarioLogado(true); // Define que o usuário está logado ao pressionar o botão "Enviar"
    }

    return(
        <View>
            <Cabecalho 
                titulo="Login"
                subtitulo="2DS"
            />
            
            {mostrarCampos && (
                <View style={estilos.containerInput}>
                    <TextInput style={estilos.campo}
                        placeholder="Usuário"
                        placeholderTextColor='#000'
                        keyboardType='default'
                        onChangeText={setUsuario}
                        value={usuario}
                    />
                    <TextInput style={estilos.campo}
                        placeholder="Senha"
                        placeholderTextColor='#000'
                        keyboardType='visible-password'
                        onChangeText={setSenha}
                        value={senha}
                        secureTextEntry={true}
                    />
                </View>
            )}

            <View style={estilos.containerBotao}>
                <TouchableOpacity 
                    style={estilos.botao}
                    onPress={handleEnviarPress} 
                >
                    <Text style={estilos.textoBotao}>Enviar</Text>
                </TouchableOpacity>
            </View>

            {usuarioLogado && (
                <View style={estilos.containerInput}>
                    <Text>Usuário Logado!</Text>
                </View>
            )}

        </View>
    );
}

const estilos = StyleSheet.create({
    containerInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80
    },
    containerBotao: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    campo: {
        width: 400,
        height: 45,
        backgroundColor: '#e5e5e5',
        color: '#000',
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        borderWidth: 1, // largura da borda
        borderColor: '#000', // cor da borda
    },
    botao: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        width: 100,
        height: 30,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#415a77',
        
    },
    textoBotao: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        color: '#e5e5e5'
    }
});