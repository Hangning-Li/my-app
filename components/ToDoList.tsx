import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ITodo from "../models/todo";
import { collection, addDoc } from "firebase/firestore";
import app from "../Firebase";
import { getFirestore } from 'firebase/firestore'; 

interface ITodoProps {
  data: ITodo
}

const ToDoList = (props: ITodoProps) => {

  const [isDone, setDone] = useState(false);
  const db = getFirestore(app);

  async function addTodo() {
    let dateTime = new Date();
    try {
      if(isDone == false){
        await addDoc(collection(db, "isDone"), {
          id: props.data.id,
          date: dateTime
        });
        setDone(true);
        alert("a task is selected successfully");
      }else{
        setDone(false);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: props.data.color }]}>
      <BouncyCheckbox
        fillColor="black"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "black" }}
        isChecked={isDone}
        onPress={addTodo}
        style={styles.checkbox}
      />
      <Text style={styles.text}>{props.data.content}</Text>
    </View>
  );
}

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
    opacity: 0.8,
  },
  checkbox: {
    width: 40,
    minWidth: 40, height: 40,
  },
  text: {
    color: 'white',
    width: '100%',
  }
});