import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useRouter } from 'expo-router'; // Importa o roteador do expo-router

// Configura o redirecionamento para o navegador
WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const router = useRouter(); // Inicializa o roteador para navegação

  // Configurar o provedor de autenticação com o Google
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '913028070234-7ju7v1rtjd9pqkg1gtd3btolobb3aesa.apps.googleusercontent.com',
  });

  // Verificar o resultado da autenticação
  useEffect(() => {
    if (response?.type === 'success') {
      router.push('/cadastro'); // Redireciona para a tela de cadastro
    }
  }, [response]);

  const handleLogin = () => {
    router.push('/cadastro'); // Redireciona para a tela de cadastro ao clicar no botão "Entrar"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamos começar a adotar!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => promptAsync()}
        disabled={!request} // Desabilita se o request não estiver pronto
      >
        <Text style={styles.googleButtonText}>Entrar com Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f2f4',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    backgroundColor: '#761e4a',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    width: '80%',
    backgroundColor: '#4285F4',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
