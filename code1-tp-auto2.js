import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  type Evenements={
    id:string;
    titre:string;
    categorie:string;
    capacite:number;
    inscrits:number;
  };
  const evenements: Evenements[]=[
     {id:'E01',titre:'Atelier React',categorie:'Atelier',capacite: 25,inscrits: 25  },
    {id:'E02',titre:'Conférence IA',categorie:'Conférence',capacite:70,inscrits:52},
    {id:'E03',titre:'Sécurité mobile',categorie:'Atelier',capacite:20,inscrits:17},
    {id:'E04',titre:'Design UI',categorie:'Atelier',capacite:18,inscrits:9},
    {id:'E05',titre:'Forum projets',categorie:'Rencontre',capacite:50,inscrits:49},
    {id:'E06',titre:'Découverte Git',categorie:'Atelier',capacite:24,inscrits:24},
  ];

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
