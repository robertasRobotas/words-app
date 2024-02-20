import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

const Words = () => {
  const [words, setWords] = useState([
    { nativeWord: "Aaa", foreignWord: "Bbb" },
  ]);
  const getWords = async () => {
    const storageWords = await AsyncStorage.getItem("@words_app");

    setWords(JSON.parse(storageWords || "[]"));
  };

  useEffect(() => {
    getWords();
  }, []);

  return (
    <View>
      {words.map((word) => (
        <View key={word.foreignWord} style={styles.wordsUnit}>
          <Text>{word.foreignWord}</Text>
          <Text>{word.nativeWord}</Text>
        </View>
      ))}
    </View>
  );
};

export default Words;

const styles = StyleSheet.create({
  wordsUnit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 64,
    gap: 16,
  },
});
