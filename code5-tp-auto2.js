type BadgeEtatProps = {
    statut: string;
  };

  function BadgeEtat({ statut }: BadgeEtatProps) {
    let couleur = styles.badgeOuvert;

    if (statut === "Complet") {
      couleur = styles.badgeComplet;
    } else if (statut === "Presque complet") {
      couleur = styles.badgePresqueComplet;
    }

    return (
      <View style={[styles.badge, couleur]}>
        <Text style={styles.texteBadge}>{statut}</Text>
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
    badge: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 20,
    },
    badgeOuvert: {
      backgroundColor: "#DCFCE7",
    },
    badgeComplet: {
      backgroundColor: "#FDE2E2",
    },
    badgePresqueComplet: {
      backgroundColor: "#FFEDD5",
    },
    texteBadge: {
      color: "#263238",
      fontSize: 12,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <Text>CampusAgenda</Text>
      <StatusBar style="auto" />
    </View>
  );
}
