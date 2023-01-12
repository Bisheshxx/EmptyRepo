import React, { useState } from "react";
import { StyleSheet, Button, View, Text, Alert } from "react-native";

const CalculatorComponent = () => {
  const [result, setResult] = useState("0");
  const onChange = (data) => {
    // console.log(value);
    console.log(data);
  };
  const calcLayout = [
    ["reset", "+/-", "%", "divide"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 3, backgroundColor: "red" }}>
        <Text style={styles.result}>{result}</Text>
      </View>
      {calcLayout.map((value, index) => {
        return (
          <View
            key={`${index}Out`}
            style={{
              flex: 3,
              backgroundColor: "green",
              flexDirection: "row",
            }}
          >
            {value.map((actions, innerIndex) => {
              return (
                <View key={innerIndex} style={styles.grid}>
                  <Button
                    onPress={() => setResult(actions.toString())}
                    title={actions.toString()}
                  ></Button>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  grid: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
    backgroundColor: "pink",
    height: 100,
    width: 120,
  },
  result: {
    fontSize: 36,
    marginBottom: 0,
    color: "white",
  },
});

export default CalculatorComponent;
