import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {Types as OrderTypes} from '../../store/ducks/orders';

const List = ({status}) => {
  const orders = useSelector(state =>
    state.orders.filter(order => order.status === status),
  );
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleNewOrder = () => {
    const order = {
      status: 'pendentes',
      name,
      phone: '27981670051',
      items: [
        {id: 0, item: 'Brahma - 1L', quantity: 5},
        {id: 1, item: 'Brahma - Latão', quantity: 1},
      ],
    };

    dispatch({
      type: OrderTypes.ADD_ORDER,
      order,
    });
  };

  return (
    <View>
      {orders.length == 0 && (
        <Text>Você já recebeu todos os seus litrões de volta!!!</Text>
      )}

      {orders.map(order => (
        <Text key={order.id}>{order.name}</Text>
      ))}
      <Text>--------</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        onSubmitEditing={handleNewOrder}
        placeholder="Seu nome"
      />
      <Button title="Novo" onPress={handleNewOrder} />
    </View>
  );
};

export default List;
