// //1. Manipuler des variables

// let gold = 100;

// console.log(`tu as ${gold} pieces d'or`);

// gold += 50;

// console.log(`tu as maintenant ${gold} pieces d'or`);

// gold -= 30;

// console.log(`après avoir acheté une épée, il te reste ${gold} pieces d'or`);

// const kingdomName = "Rive d'asure";

// console.log(`Bienvenue dans le royaume de ${kingdomName}`);

// // changer la valeur d'une constante créer une erreur

// //Travailler avec des tableaux

// const quests = [
//   "Sauver le poisson-chat du village",
//   "Explorer la mer sombre",
//   "Trouver la potion magique",
//   "Chasser les squelettes",
// ];

// console.log('Commencer par la quête : ' + quests[0]);

// quests.push("Parler au gérant de la taverne");

// const QuestWithLa = quests.filter(quest => quest.includes(" la "));

// console.log(`Regarder aussi ces quêtes : ${QuestWithLa}`);

// const QuestWithPotion = quests.filter(quest => quest.includes(" potion "));

// console.log(`Tu cherche la fameuse potion, consulte donc la quête : ${QuestWithPotion}`)

// //Gérer des objets

// const player = {
//     name: "Captaine Barbe Sombre",
//     level: 1,
//     health: 100,
//     inventory: ["Perroquet bavard"],
// }

// console.log('Les statistiques du joueur sont : ' + player.name + ', est un pirate niveau ' + player.level + ', il lui reste ' + player.health + ' pv et il possède dans son inventaire : ' + player.inventory);

// player.level += 1;

// console.log('Vous passez au niveau ' + player.level + ' !');

// player.health -= 20;

// console.log('Vous subissez des dégâts, il vous reste ' + player.health + ' pv !');

// player.isAlive = true;

// console.log(`Le joueur est-il en vie ? ${player.isAlive}`);

// //Créer une fonction

// function heal(player) {
//     if (player.isAlive) {
//         if (player.health <= 80) {
//             player.health += 20;
//         } else {
//             player.health = 100;
//         }
//     }
//     return player;
// }

// function damage(player, amount) {
//     player.health -= amount;
//     if (player.health <= 0) {
//         player.health = 0;
//         player.isAlive = false;
//     }
//     return player;
// }

// //Filtrer des objets

// const items = [
//     { name: "PANZER (l'épée)", price: 10, rare: false},
//     { name: "Matthilde (chapeau)", price: 50, rare: false },
//     { name: "La faible (épée laser)", price: 120, rare: true },
//     { name: "L’Obscur Parangon des Hurle-Plumes (juste un perroquet)", price: 300, rare: true }
// ]

// console.log('Objets disponibles : \n' + items.map(item => item.name).join(',\n'));

// const rareItems  = items.filter(item => item.rare==true);

// console.log('Objets rares : \n' + rareItems.map(item => item.name).join(',\n'));

// const ArcItems  = items.filter(item => item.name=="L’Obscur Parangon des Hurle-Plumes (juste un perroquet)");

// console.log('Objets demander : \n' + ArcItems.map(item => item.name).join(',\n'));

// //Système de boutique

// player.gold = 150;

// function buy(player, item) {
//     if (player.gold >= item.price) {
//         player.gold -= item.price;
//         player.inventory.push(item.name);
//         console.log(`Vasy prend moi ce ${item.name} que t'a acheter ${item.price} et profite en temps que tu peux petit gars.`);
//     } else {
//         console.log("Sale pauvre");
//     }
//     return player;
// }

// //Le système d’EXP

// player.xp = 0;

// function gainXp(player, amount) {
//     player.xp += amount;
//     while (player.xp >= 100) {
//         player.xp -= 100;
//         player.level += 1;
//         console.log(`Félicitation ! Vous avez atteint le niveau ${player.level} !`);
//     }
// }