import React from 'react';

//importo os hooks do React - Redux
import {useSelector, useDispatch} from 'react-redux';

import {Alert, AlertText, Container} from './styles';
import ListItem from '../../components/ListItem';

//importo os Types criados no reducer
import {Types as BrandTypes} from '../../store/ducks/brands';

const List = ({received}) => {
  //declaro o dispatch pra poder disparar eventos ao state
  const dispatch = useDispatch();

  //com o useSelector consigo acessar diretamento state
  //estou utilizando um filter pra filtrar apenas os items que correspondem ao filtro da pagina
  //mas se fosse pra listar tudo eu usaria:
  //const orders = useSelector(state => state.orders) -> assim eu acesso o reducer de orders
  //const brands = useSelector(state => state.brands) -> assim eu acesso o reducer de brands
  //const state = useSelector(state => state) -> assim eu acesso todo meu state
  const orders = useSelector(state =>
    state.orders.filter(order => order.received === received),
  );

  const handleAddUser = name => {
    /**
     * Disparando um evento para o redux
     * Basta user o dispatch criando anteriormente, passando sempre um type (criado lá no reducer) e passando os parametros que sua funcção espera (também criada no reducer)
     */
    dispatch({
      type: BrandTypes.ADD_BRAND,
      name: name,
    });
  };

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
