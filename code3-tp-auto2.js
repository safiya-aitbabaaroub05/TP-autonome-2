function statutEvenement(e: Evenement): string {
  const places = placesRestantes(e);
  if (places === 0) {
    return "Complet";
  } else if (places <= 3) {
    return "Presque complet";
  } else {
    return "Ouvert";
  }
}
