// src/screens/telaestoque.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const telaestoque = () => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [stock, setStock] = useState([]);

  useEffect(() => {
    const loadStock = async () => {
      const storedStock = JSON.parse(await AsyncStorage.getItem('stock')) || [];
      setStock(storedStock);
    };
    loadStock();
  }, []);

  const addToStock = async () => {
    const newStock = { item, quantity };
    const updatedStock = [...stock, newStock];
    await AsyncStorage.setItem('stock', JSON.stringify(updatedStock));
    setStock(updatedStock);
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
      <Button title="Adicionar ao Estoque" onPress={addToStock} />
      <FlatList
        data={stock}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.stockItem}>
            <Text>{item.item}</Text>
            <Text>{item.quantity}</Text>
          </View>
        )}
      />
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
    height: 20,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
  },
  stockItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default telaestoque;
