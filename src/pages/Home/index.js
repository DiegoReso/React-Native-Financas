
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';


const list = [
  {
    id:1,
    label:'Boleto Conta Luz',
    value: '300,03',
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id:2,
    label:'PIX Taiwane',
    value: '1.321,00',
    date: '21/09/2022',
    type: 1 //receitas /entradas
  },
  {
    id:3,
    label:'Salário',
    value: '4.340,00',
    date: '22/09/2022',
    type: 1 //receitas /entradas
  }
]



export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Diego Reis"/>

      <Balance saldo="9.250,00" gastos="-527,00"/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator ={false}
        renderItem={({item})=><Moviments data={item}/>}
        />
        
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginStart:14,
    marginEnd:14,
    marginTop: 14,
  },
  list:{
    marginStart:14,
    marginEnd:14,
    marginTop: 14,
  }
});
