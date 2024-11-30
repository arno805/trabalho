// src/screens/telapainel.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const telapainel = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <Button title="Registrar Venda" onPress={() => navigation.navigate('Sales')} />
      <Button title="Gerenciar Estoque" onPress={() => navigation.navigate('Stock')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    marginBottom: 18,
  },
});

export default telapainel;
