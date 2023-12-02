import { Text, View, StyleSheet } from "react-native";
import { usePokemonList } from "@src/hooks/usePokemon";

const Home = () => {
  const { data } = usePokemonList();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View>{/* <Text>Hello World</Text> */}</View>
      <Text style={styles.subtitle}>This is the Details page of your app.</Text>
      <View>
        {data?.results ? (
          data.results.map((item) => <Text key={item.name}>{item.name}</Text>)
        ) : (
          <Text>No data</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },

  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  linkButton: {
    fontSize: 24,
    color: "#1B95E0",
    marginTop: 16,
  },
});

export default Home;
