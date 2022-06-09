import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector,
} from '../store/todo/selectors';
import {fetchTodoRequest} from '../store/todo/actions';
import {ITodo} from '../store/todo/types';

interface Props {
  navigation: any;
  title: string;
}

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const todos = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  const Item = ({data}: {data: ITodo}) => (
    <View
      style={{
        backgroundColor: '#eeeeee',
        borderRadius: 10,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      }}>
      <Text style={{fontSize: 24}}>{data.title}</Text>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={todos}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={(item: ITodo) => item.id}
      />
    </View>
  );
};

// {pending ? (
//   <View>
//     <Text>Loading...</Text>
//   </View>
// ) : error ? (
//   <View>
//     <Text>Error</Text>
//   </View>
// ) : (
//   todos.map((todo, index) => (
//     <View style={{marginBottom: 10}} key={todo.id}>
//       <Text>
//         {++index}.{todo.title}
//       </Text>
//     </View>
//   ))
// )}
