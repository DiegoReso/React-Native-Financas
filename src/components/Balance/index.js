
import { Text, View,StyleSheet } from 'react-native';

export default function Balance({saldo,gastos}) {
 return (
   <View style={styles.container}>
    <View style={styles.item}>
      <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
    </View>

    <View style={styles.item}>
      <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{gastos}</Text>
        </View>
        
    </View>
   </View>

   
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingEnd:18,
    paddingStart: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd:14,
    borderRadius: 10,
    paddingTop:22,
    paddingBottom:22,
    zIndex:99,
  },
  item:{
  
  },
  itemTitle:{
    fontSize: 20,
    color: "#DADADA",

  },
  content:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  currencySymbol:{
    color:'#DADADA',
    marginRight:6,
  },
  balance:{
    fontSize: 22,
    color: 'green'
  },
  expenses:{  
    fontSize: 22,
    color: 'red'
  }
})