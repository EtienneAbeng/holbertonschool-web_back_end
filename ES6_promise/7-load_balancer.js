// Définir la fonction loadBalancer
export default function loadBalancer(chinaDownload, USDownload) {
  /* Utiliser Promise.race pour résoudre ou 
  rejeter avec la première promesse qui se résout ou se rejette */
  return Promise.race([chinaDownload, USDownload])
  // Une fois que l'une des promesses est réglée, retourner sa valeur
    .then((value) => value);
}
