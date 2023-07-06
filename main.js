import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((response) => setData(response))
      .catch((error) => console.error(error));
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('API_URL');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error al obtener los datos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Aplicación Móvil</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
});

// Renderizar la aplicación en el elemento 'root'
ReactDOM.render(<App />, document.getElementById('root'));
