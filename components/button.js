import React from "react";
import { Text, View } from "react-native";

export default function CustomButton({ color, navigation, path, text }) {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: color,
        borderRadius: 100,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: color,
      }}
    >
      <Text style={{fontSize:18,marginLeft:10,marginRight:10,color:'white'}}>{text}</Text>
    </View>
  );
}
