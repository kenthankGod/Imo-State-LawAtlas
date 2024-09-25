import React, { useState } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function Carousels() {
  const width = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  const list = [
    {
      id: 1,
      title: "first image",
      image: require("../assets/images/anvil.jpg"),
    },
    {
      id: 2,
      title: "second image",
      image: require("../assets/images/law.jpg"),
    },
    {
      id: 3,
      title: "third image",
      image: require("../assets/images/wig.jpg"),
    },
  ];

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {list.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? "#800020" : "#D1D5DB",
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop
        width={width}
        height={width}
        autoPlay={true}
        data={list}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={item.image}
              resizeMode="cover"
            />
          </View>
        )}
      />
      {renderPagination()}
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20, // Spacing around carousel
   
  },
  imageContainer: {
    padding: 15,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10, 
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});
