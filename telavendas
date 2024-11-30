// src/screens/telavendas.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const telavendas = () => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');

  const registerSale = async () => {
    const sales = JSON.parse(await AsyncStorage.getItem('sales')) || [];
    const newSale = { item, quantity, date: new Date().toISOString() };
    await AsyncStorage.setItem('sales', JSON.stringify([...sales, newSale]));
    setItem('');
    setQuantity('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Item"
        value={item}
        onChangeText={setItem}
        style={styles.input}
      />
      <TextInput
        placeholder="Quantidade"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Registrar Venda" onPress={registerSale} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 30,
    borderColor: 'yellow',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});

export default telavendas;
