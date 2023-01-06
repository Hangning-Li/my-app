import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AppStyles from "../styles/AppStyles"
import BouncyCheckbox from "react-native-bouncy-checkbox";
// import Todo from '../models/todo'
import ToDoList from './ToDoList';


const arr = [
    { 'id': '1', 'content': 'to-do-list-1', 'color':'red' },
    { 'id': '2', 'content': 'to-do-list-2', 'color':'green' },
    { 'id': '3', 'content': 'to-do-list-3', 'color':'blue'}
];

const Todos = () => {

    const [selected, setSelected] = useState(false);

    return (
        <View style={styles.container}>
            <FlatList style={styles.list}
                data={arr}
                renderItem={(item: any) => {
                    return (
                      <ToDoList data={item.item}/>
                    )
                  }
                }
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default Todos

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: 'auto',
        // color: 'black',
        alignItems: 'center',
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
    },
    list: {
        height: 500,
        width: '100%',
        flexDirection: 'column',
        padding: 10,
        overflow: 'scroll',
    },
    text: {
        color: 'white',
        width: '100%',
    }
});