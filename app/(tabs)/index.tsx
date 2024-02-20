import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";

const Main = () => {
  const [nativeWord, setNativeWord] = useState("");
  const [foreignWord, setForeignWord] = useState("");

  const onAddWord = async () => {
    const word = {
      nativeWord,
      foreignWord,
    };

    const words = (await AsyncStorage.getItem("@words_app")) || [];
    const newWordsArray = [...words, word];
    AsyncStorage.setItem("@words_app", JSON.stringify(newWordsArray));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Native word"
          onChangeText={(enteredText) => setNativeWord(enteredText)}
        />
        <TextInput
          style={styles.input}
          placeholder="Foreign word"
          onChangeText={(enteredText) => setForeignWord(enteredText)}
        />
      </View>
      <Button title="Add word" onPress={onAddWord} />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    alignItems: "center",
    backgroundColor: "#adbbe0",
  },
  text: {
    borderWidth: 3,
    padding: 16,
  },
  inputsWrapper: {
    display: "flex",
    gap: 32,
    justifyContent: "center",
    marginTop: "40%",
    marginBottom: 32,
    width: "70%",
  },
  input: {
    padding: 8,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#525354",
  },
});
