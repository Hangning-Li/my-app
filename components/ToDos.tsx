import React from 'react';
import { StyleSheet,View, FlatList } from 'react-native';
import ToDoList from './ToDoList';


const arr = [
    { 'id': '1', 'content': 'to-do-list-1', 'color':'red' },
    { 'id': '2', 'content': 'to-do-list-2', 'color':'green' },
    { 'id': '3', 'content': 'to-do-list-3', 'color':'blue'}
];

const Todos = () => {

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