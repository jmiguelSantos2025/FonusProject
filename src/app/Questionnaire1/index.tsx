import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { signIn } from "../../components/authenticator";
import { Picker } from "@react-native-picker/picker";

const { width, height } = Dimensions.get("window");

export default function Questionnaire() {
  const [difficulties, setDifficulties] = useState();
  const [conditions, setConditions] = useState();
  const pickerRef = useRef<Picker<undefined>>(null);

 return(
    <View style={styles.container}>
      <View style={styles.viewBackButton}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.6} onPress={() => router.push('/TreatmentQuestion')}>
          <Text style={styles.text}><MaterialCommunityIcons name="chevron-left" size={36} color="black" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Para prosseguirmos</Text>
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.text}>Selecione as dificuldades do seu filho:</Text>
      <Picker
        ref={pickerRef}
        selectedValue={difficulties}
        onValueChange={(itemValue)=>{
            setDifficulties(itemValue)
        }}
        style={styles.button2}
        >
        <Picker.Item label='PLACEHOLDER1' value={'P1'}/>
        <Picker.Item label='PLACEHOLDER2' value={'P2'}/>
        <Picker.Item label='PLACEHOLDER3' value={'P3'}/>
    </Picker>
      <Text style={styles.text}>Agora, selecione se ele possui alguma dessas condições:</Text>
    <Picker
        ref={pickerRef}
        selectedValue={conditions}
        onValueChange={(itemValue)=>{
            setConditions(itemValue)
        }}
        style={styles.button2}
    >
        <Picker.Item label='PLACEHOLDER4' value={'P4'}/>
        <Picker.Item label='PLACEHOLDER5' value={'P5'}/>
        <Picker.Item label='PLACEHOLDER6' value={'P6'}/>
    </Picker>
     </View>
     <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button1} onPress={() => router.push('/Questionnaire2Start')}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  viewTitle: {
    marginTop: "10%",
  },
  title: {
    color: "#47065B",
    fontSize: width * 0.1,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: "20%",
    marginBottom: "20%",
  },
  inputText: {
    width: width * 0.8,
    height: height * 0.06,
    marginTop: "5%",
    marginBottom: "5%",
    backgroundColor: "#C6C6C6",
  },
  viewButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: "20%",
  },
  button1: {
    width: "80%",
    height: height * 0.07,
    backgroundColor: "#47065B",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-35%",
    marginBottom: "20%", 
  },
  button2: {
    width: width * 0.7,
    height: height * 0.06,
    marginTop: 15,
    marginBottom: "40%", 
    backgroundColor: "#C6C6C6",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  viewBackButton: {
    width: "90%",
    alignItems: "flex-start",
    marginTop: "30%",
    marginBottom: "40%",
  },
  backButton: {
    height: height * 0.01,
    justifyContent: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: width * 0.1,
  },
  text: {
    color: "#47065B",
    fontSize: width * 0.035,
    textAlign: "center",
    marginTop: "-15%",
  },
  forgotPasswordText: {
    color: "#47065B",
    fontSize: width*0.03,
    textDecorationLine: "underline",
    marginBottom: "190%", 
  },
});