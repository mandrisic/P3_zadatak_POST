import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";

export function HomeScreen({ route, navigation }) {
 const [name, setName] = useState("");
 const [surname, setSurname] = useState("");
 const [number, setNumber] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [passwordAgain, setPasswordAgain] = useState("");
 const [dateOfBirth, setDateOfBirth] = useState("");
 const [placeOfBirth, setPlaceOfBirth] = useState("");

  const sendRequest = async () => {
    try {
      await fetch("https://webhook.site/2c288619-2815-4f7a-83fb-a908c80d2c28", {
        method: "post",
        mode: "no-core",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          number: number,
          email: email,
          password: password,
          passwordAgain: passwordAgain,
          dateOfBirth: dateOfBirth,
          placeOfBirth: placeOfBirth
        }),
      });
     setName("");
     setSurname("");
     setNumber("");
     setEmail("");
     setPassword("");
     setPasswordAgain("");
     setDateOfBirth("");
     setPlaceOfBirth("");
    } catch (error) {}
  };

  function handleSettingsPress() {
    navigation.navigate("Settings");
  }

  return (
 <View style={styles.screen}>
      <View>
        <Text> Unesi ime </Text>
        <TextInput style={styles.input} value={name} onChangeText={setName}/>
      </View>
       <View>
        <Text> Unesi prezime </Text>
        <TextInput style={styles.input} value={surname} onChangeText={setSurname}/>
      </View>
      <View>
        <Text> Unesi broj mobitela </Text>
        <TextInput style={styles.input} value={number} onChangeText={setNumber}/>
      </View>
        <View>
        <Text> Unesi email </Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail}/>
      </View>
      <View>
        <Text> Unesi lozinku </Text>
        <TextInput style={styles.input} value={password} onChangeText={setPassword}/>
      </View>
      <View>
        <Text> Potvrdi lozinku </Text>
        <TextInput style={styles.input} value={passwordAgain} onChangeText={setPasswordAgain}/>
      </View>
      <View>
        <Text>Datum rođenja </Text>
        <TextInput style={styles.input} value={dateOfBirth} onChangeText={setDateOfBirth}/>
      </View>
      <View>
        <Text>Mjesto rođenja </Text>
        <TextInput style={styles.input} value={placeOfBirth} onChangeText={setPlaceOfBirth}/>
      </View>
      <Button title="Send request" onPress={sendRequest} />
    </View>
  );
}

const styles = StyleSheet.create({
screen: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    //justifyContent: "center",
  },
  input: {
    height: 20,
    width: 220,
    borderWidth:1,
    borderColor: "grey",
    marginBottom: 12
  }
});