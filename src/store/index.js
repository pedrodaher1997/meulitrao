/**
 * Esse arquivo geralmente é padrão, muda muito pouco
 * Uso sempre isso como base, famoso CTRL + C & CTRL + V
 */

//importando a função createStore do redux
import {createStore} from 'redux';

//importando as funções de persistencia do redux-persist
import {persistStore, persistReducer} from 'redux-persist';

//importando o tipo de storage que a aplicação irá usar
//aqui você pode usar outros como: SQLite, RealDB, etc...
import AsyncStorage from '@react-native-community/async-storage';

//importando o rootReducer que é o arquivo que junta todos os reducers em um só
import rootReducer from './ducks';

//configurações de persistencia
//eu costumo usar sempre o nome da aplicação
const persistConfig = {
  key: 'meulitrao',
  storage: AsyncStorage,
};

//criando o reducer persistido
const persistedReducer = persistReducer(persistConfig, rootReducer);

//criando o store
const store = createStore(persistedReducer);

//persistindo o reducer
const persistor = persistStore(store);

//exportando os dois que vão ser usados no App.js
export {store, persistor};

/**
 * Feito isso, todo o state da aplicação estará salvo offline, sempre que for alterado.
 * No persistConfig você ainda pode colocar duas propriedades que são:
 * 'whitelist' que é onde você diz quais states deseja salvar offline, os que não estiverem listados não serão gravados.
 * 'blacklist' que é onde você diz quais states não deseja salvar, todo o restante será salvo.
 * OBS: não pode usar os dois juntos.
 */
