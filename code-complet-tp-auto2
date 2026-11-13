import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type Evenement = {
  id: string;
  titre: string;
  categorie: string;
  capacite: number;
  inscrits: number;
};

type Statut = 'Complet' | 'Presque complet' | 'Ouvert';

const evenements: Evenement[] = [
  { id: 'E01', titre: 'Atelier React', categorie: 'Atelier', capacite: 25, inscrits: 25 },
  { id: 'E02', titre: 'Conférence IA', categorie: 'Conférence', capacite: 70, inscrits: 52 },
  { id: 'E03', titre: 'Sécurité mobile', categorie: 'Atelier', capacite: 20, inscrits: 17 },
  { id: 'E04', titre: 'Design UI', categorie: 'Atelier', capacite: 18, inscrits: 9 },
  { id: 'E05', titre: 'Forum projets', categorie: 'Rencontre', capacite: 50, inscrits: 49 },
  { id: 'E06', titre: 'Découverte Git', categorie: 'Atelier', capacite: 24, inscrits: 24 },
];

function placesRestantes(e: Evenement): number {
  return Math.max(0, e.capacite - e.inscrits);
}

function statutEvenement(e: Evenement): Statut {
  const places = placesRestantes(e);

  if (places === 0) {
    return 'Complet';
  } else if (places <= 3) {
    return 'Presque complet';
  } else {
    return 'Ouvert';
  }
}

const nombreEvenements = evenements.length;

const nombreEvenementsComplets = evenements.filter(
  (e) => placesRestantes(e) === 0
).length;

const nombreEvenementsAvecPlaces = evenements.filter(
  (e) => placesRestantes(e) > 0
).length;

const totalPlacesRestantes = evenements.reduce(
  (total, e) => total + placesRestantes(e),
  0
);

const ateliersDisponibles = evenements.filter(
  (e) => e.categorie === 'Atelier' && placesRestantes(e) > 0
);

type BadgeEtatProps = {
  statut: Statut;
};

function BadgeEtat({ statut }: BadgeEtatProps) {
  let couleur = styles.badgeOuvert;

  if (statut === 'Complet') {
    couleur = styles.badgeComplet;
  } else if (statut === 'Presque complet') {
    couleur = styles.badgePresqueComplet;
  }

  return (
    <View style={[styles.badge, couleur]}>
      <Text style={styles.texteBadge}>{statut}</Text>
    </View>
  );
}

type CarteEvenementProps = {
  evenement: Evenement;
};

function CarteEvenement({ evenement }: CarteEvenementProps) {
  const places = placesRestantes(evenement);
  const statut = statutEvenement(evenement);

  return (
    <View style={styles.carte}>
      <View style={styles.enteteCarte}>
        <Text style={styles.titreCarte}>{evenement.titre}</Text>
        <BadgeEtat statut={statut} />
      </View>

      <Text style={styles.categorieCarte}>{evenement.categorie}</Text>

      <Text style={styles.placesCarte}>
        {places} {places === 1 ? 'place libre' : 'places libres'}
      </Text>
    </View>
  );
}

type BlocStatistiqueProps = {
  libelle: string;
  valeur: number;
};

function BlocStatistique({ libelle, valeur }: BlocStatistiqueProps) {
  return (
    <View style={styles.blocStatistique}>
      <Text style={styles.valeurStatistique}>{valeur}</Text>
      <Text style={styles.libelleStatistique}>{libelle}</Text>
    </View>
  );
}

const mode: 'tous' | 'ateliers' = 'tous';

export default function App() {
  const evenementsAffiches =
    mode === 'tous' ? evenements : ateliersDisponibles;

  const titreMode =
    mode === 'tous' ? 'Tous les événements' : 'Ateliers disponibles';

  return (
    <View style={styles.page}>
      <StatusBar style='dark' />

      <Text style={styles.titrePrincipal}>CampusAgenda</Text>
      <Text style={styles.sousTitre}>Événements du campus</Text>

      <View style={styles.rangeeStatistiques}>
        <BlocStatistique
          libelle='Événements au total'
          valeur={nombreEvenements}
        />
        <BlocStatistique
          libelle='Événements complets'
          valeur={nombreEvenementsComplets}
        />
        <BlocStatistique
          libelle='Événements avec des places'
          valeur={nombreEvenementsAvecPlaces}
        />
        <BlocStatistique
          libelle='Places restantes'
          valeur={totalPlacesRestantes}
        />
      </View>

      <Text style={styles.titreListe}>{titreMode}</Text>

      <FlatList
        data={evenementsAffiches}
        renderItem={({ item }) => (
          <CarteEvenement evenement={item} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contenuListe}
        ListEmptyComponent={
          <Text style={styles.messageVide}>
            Aucun événement à afficher.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F3F6FC',
    paddingTop: 56,
    paddingHorizontal: 20,
  },
  titrePrincipal: {
    color: '#173B70',
    fontSize: 28,
    fontWeight: 'bold',
  },
  sousTitre: {
    color: '#5C6B80',
    fontSize: 16,
    marginTop: 4,
    marginBottom: 20,
  },
  rangeeStatistiques: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  blocStatistique: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  valeurStatistique: {
    color: '#173B70',
    fontSize: 22,
    fontWeight: 'bold',
  },
  libelleStatistique: {
    color: '#5C6B80',
    fontSize: 13,
    marginTop: 4,
  },
  titreListe: {
    color: '#173B70',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  contenuListe: {
    paddingBottom: 24,
    flexGrow: 1,
  },
  carte: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  enteteCarte: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  titreCarte: {
    color: '#1F2937',
    fontSize: 17,
    fontWeight: 'bold',
    flexShrink: 1,
    marginRight: 8,
  },
  categorieCarte: {
    color: '#64748B',
    marginTop: 8,
  },
  placesCarte: {
    color: '#334155',
    fontSize: 14,
    marginTop: 6,
  },
  badge: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 2,
  },
  badgeComplet: {
    backgroundColor: '#FDE2E2',
  },
  badgePresqueComplet: {
    backgroundColor: '#FFEDD5',
  },
  badgeOuvert: {
    backgroundColor: '#DCFCE7',
  },
  texteBadge: {
    color: '#263238',
    fontSize: 12,
    fontWeight: 'bold',
  },
  messageVide: {
    color: '#64748B',
    textAlign: 'center',
    marginTop: 24,
  },
});
