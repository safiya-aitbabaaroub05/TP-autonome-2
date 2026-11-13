function placesRestantes(e: Evenement): number{
  const place = e.capacite - e.inscrits;

if (place < 0) {
  return 0;
} else {
  return place;
}
}  
