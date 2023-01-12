import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting</Text>
      <StatusBar style="auto" />
      <View style={styles.button}>
        <Button
          style={styles.button}
          onPress={() => {
            alert("You tapped the!!");
          }}
          title="Press Me!!"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
  button: {
    border: "2px solid black",
    marginTop: "5%",
  },
});

export default SettingScreen;
