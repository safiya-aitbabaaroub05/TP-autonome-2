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
