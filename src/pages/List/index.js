import React from 'react';
import {useSelector} from 'react-redux';

import {Alert, AlertText, Container} from './styles';
import ListItem from '../../components/ListItem';

const List = ({received}) => {
  const orders = useSelector(state =>
    state.orders.filter(order => order.received === received),
  );

  return (
    <>
      {orders.length == 0 && (
        <Alert>
          <AlertText>Tudo certo por aqui</AlertText>
        </Alert>
      )}

      {orders.length > 0 && (
        <Container
          data={orders}
          renderItem={({item}) => <ListItem order={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </>
  );
};

export default List;
