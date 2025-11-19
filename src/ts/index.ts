// type Player = {
//   name: string;
//   gold: number;
//   level: number;
//   life: number;
//   xp: number;
//   inventory: string[];
//   isAlive?: boolean;
// };

// type Item = { name: string; price: number; rare: boolean };

// type User = {
//   name: string;
//   age?: number;
//   address: string;
//   phone: string;
// };

// type SuperUser = User & {
//   power: string;
// };

// //type UnNamedUser = Pick<User, "address" | "age" | "phone">;
// type UnNamedUser = Omit<User, "name">;

// let gold = 100;
// console.log(gold);

// gold = gold + 50;
// console.log(gold);

// gold = gold - 30;
// console.log(gold);

// const kingdomName = "Mon royaume";

// const quests: string[] = [
//   "Sauver le chat du village",
//   "Explorer la forêt sombre",
//   "Boire la potion magique",
//   "Trouver la potion magique",
//   "Chasser les gobelins",
// ];

// console.log(quests[0]);
// quests.push("Parler au sage de la montagne");
// console.log(quests);

// const filteredQuests = quests.filter((quest) => quest.includes(" la "));
// console.log(filteredQuests);

// const potionQuest = quests.findLast((toto) => toto.includes("potion"));
// console.log(potionQuest);

// function heal(player: Player): Player {
//   const newLife = player.life + 20;

//   if (newLife > 100) {
//     player.life = 100;
//   } else {
//     player.life = newLife;
//   }

//   return player;
// }

// const player: Player = {
//   name: "Aeris",
//   gold: 100,
//   level: 1,
//   life: 100,
//   xp: 0,
//   inventory: ["épée"],
// };

// player.level = 5;

// player.inventory.push("bouclier");

// player.life = 60;
// player.isAlive = true;

// heal(player);
// heal(player);
// heal(player);

// const damage = (player: Player, amount: number): Player => {
//   const newLife = player.life - amount;
//   if (newLife <= 0) {
//     player.life = 0;
//     player.isAlive = false;
//   } else {
//     player.life = newLife;
//   }
//   return player;
// };

// console.log(damage(player, 50));
// console.log(damage(player, 30));
// console.log(damage(player, 20));

// const items: Item[] = [
//   { name: "Potion", price: 10, rare: false },
//   { name: "Épée en fer", price: 50, rare: false },
//   { name: "Arc elfique", price: 120, rare: true },
//   { name: "Armure d’or", price: 300, rare: true },
// ];

// // const rareItems = items.filter((item) => item.rare);
// // console.log(rareItems);

// // const cheapItems = items.filter((item) => item.price < 100);
// // console.log(cheapItems);
// // const weapon = items.find((item) => (item.name = "Arc elfique"));

// function buy(player: Player, weapon: string): Player {
//   const selectedWeapon = items.find((item) => item.name === weapon);

//   if (!selectedWeapon) return player;

//   console.log(selectedWeapon.price, player.gold);
//   if (selectedWeapon.price > player.gold) {
//     console.log("Pas assez de gold");
//   } else {
//     player.inventory.push(selectedWeapon.name);
//     player.gold = player.gold - selectedWeapon.price;
//   }

//   return player;
// }

// console.log(buy(player, "ezaezaeaz"));
// console.log(buy(player, "Potion"));

// function gainXP(player: Player, amount: number): Player {
//   const newXp = player.xp + amount;
//   if (newXp >= 100) {
//     player.level++;
//     player.xp = amount - player.xp;
//   } else {
//     player.xp = newXp;
//   }
//   return player;
// }

// console.log(gainXP(player, 50));
// console.log(gainXP(player, 100));
// console.log(gainXP(player, 50));

// const user: User = {
//   name: "Alex",
//   address: "6 rue de l'adresse",
//   phone: "0601020304",
// };

// const superUser: SuperUser = {
//   name: "Alex2",
//   address: "6 rue de l'adresse",
//   phone: "0601020304",
//   power: "fly",
// };

// const unNamedUser: UnNamedUser = {
//   address: "6 rue de l'adresse",
//   phone: "0601020304",
// };

// type Actor = {
//   firstName: string;
//   lastName: string;
// };

// type Film = {
//   name: string;
//   note: number;
//   actors: Actor[];
// };

// type Review = {
//   note: number;
//   message: string;
// };

// function customFetch<T>(endpoint: string): T[] {
//   if (endpoint === "/api/films") {
//     //return films
//   } else if (endpoint === "/api/reviews") {
//     //return reviews
//   }
// }

// const films = customFetch<Film>("/api/films");
// const reviews = customFetch<Review>("/api/reviews");

// console.log(films[0])
