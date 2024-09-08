import * as React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    height: 44,
  },
  subTitle: {
    fontSize: 12,
    color: "gray",
    paddingTop: 2,
    paddingLeft: 10
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%', 
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
});

const FlatListElements = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[data]}
        renderItem={({ item }) => 
        {
          if(item?.knowledgeGraph) {    
            return(
              <View style={{ flex: 1, flexDirection: "row",backgroundColor: "white", padding: 20 }}>
                <Image source={{ uri: item.knowledgeGraph.imageUrl }} style={{ width: 50, height: 50 }} />
                <View style={{ flex: 1, flexDirection: "column" }}>
                  <Text style={styles.title}>{item.knowledgeGraph.title}</Text>
                  <Text style={styles.subTitle}>{item.knowledgeGraph.description}</Text>
                  <Text style={styles.subTitle}>Fuente: {item.knowledgeGraph.descriptionSource}</Text>
                </View>
              </View>
              )        
          }
          else {
            return (
              <View style={{ flex: 1, flexDirection: "row",backgroundColor: "white", padding: 20 }}>
                <Text style={styles.title}>No hay resultados</Text>
              </View>
              )
          }
        }
      }
      />
    </View>
  );
};

const FlatListImages = ({data}) => {
  return (
    <View style={styles.gridContainer}>
      {data.images && data.images.map((image, index) => (
        <View key={index} style={styles.gridItem}>
          <Image source={{ uri: image.imageUrl }} style={styles.image} />
        </View>
      ))}
      {!data.images && (
        <View style={styles.gridItem}>
          <Text style={styles.title}>No hay resultados</Text>
        </View>
      )}
    </View>
  );
};

export default function TabviewMenu({data, navigation}) {
  const FirstRoute = () => <FlatListElements data={data} />;

  const SecondRoute = () => <FlatListImages data={data} />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "All" },
    { key: "second", title: "Images" },
  ]);

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: "100%", height: "100%" }}
      />
    </>
  );
}
