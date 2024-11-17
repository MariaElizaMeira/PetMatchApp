import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Switch, StyleSheet } from 'react-native';

const CadastroScreen = () => {
  const [tipoPet, setTipoPet] = useState('');
  const [formVisible, setFormVisible] = useState(false);
  const [nomePet, setNomePet] = useState('');
  const [sexoPet, setSexoPet] = useState('');
  const [ativo, setAtivo] = useState(false);

  const handlePetSelection = (tipo: string) => {
    setTipoPet(tipo);
    setFormVisible(true);
  };

  const handleCadastro = () => {
    alert(`Pet cadastrado:
      Nome: ${nomePet}
      Tipo: ${tipoPet}
      Sexo: ${sexoPet}
      Status: ${ativo ? 'Ativo' : 'Inativo'}
    `);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre seu pet</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={() => handlePetSelection('Gato')}>
          <Text style={styles.buttonText}>Gato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePetSelection('Cachorro')}>
          <Text style={styles.buttonText}>Cachorro</Text>
        </TouchableOpacity>
      </View>

      {formVisible && (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do Pet"
            value={nomePet}
            onChangeText={setNomePet}
          />
          <TextInput
            style={styles.input}
            placeholder="Sexo do Pet"
            value={sexoPet}
            onChangeText={setSexoPet}
          />
          <View style={styles.switchContainer}>
            <Text style={styles.label}>Ativo</Text>
            <Switch
              value={ativo}
              onValueChange={setAtivo}
            />
          </View>
          <TouchableOpacity style={styles.cadastrarButton} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f6f2f4',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#761e4a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
  },
  cadastrarButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default CadastroScreen;
