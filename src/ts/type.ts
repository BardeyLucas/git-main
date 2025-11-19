type User = {
  id: number;
  name: string;
  age: number;
  role: "user" | "admin";
};

const users: User[] = [
  { id: 1, name: "Alice", age: 22, role: "user" },
  { id: 2, name: "Bob", age: 28, role: "admin" },
  { id: 3, name: "Charlie", age: 19, role: "user" },
];

function addUser(user: User) {
  users.push(user);
}

function findUser(id: User["id"]) {
  return users.find((u) => u.id === id);
}

function updateUser(id: User["id"], update: User) {
  const user = findUser(id);
  if (user) {
    Object.assign(user, update);
  }
  return user;
}

function filterByRole(role: User["role"]) {
  return users.filter((u) => u.role === role);
}

type Log = {
  level: number;
  message: string;
  time: number;
};
const logs: Log[] = [];

function addLog(level: Log["level"], message: Log["message"]) {
  logs.push({ level, message, time: Date.now() });
}

function fetchData<T>(endpoint: string): Promise<{ data: T[]; time: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [],
        time: Date.now(),
      });
    }, 500);
  });
}

const response = fetchData<User>("/api/user");
const responseLogs = fetchData<Log>("/api/log");

function mergeObjects<T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}

const user: User = { id: 1, name: "Alice", age: 22, role: "user" };
const log: Log = { level: 1, message: "coucou", time: 2132131 };
const mergedObject = mergeObjects(user, log);

type Product = { title: string; price: number; stock: number };
type Products = Record<string, Product>;
// type Products = {
//   [key: "p1" | "p2" | "p3"]: Product;
// };

const products: Products = {
  p1: { title: "Keyboard", price: 30, stock: 12 },
  p2: { title: "Mouse", price: 20, stock: 50 },
  p3: { title: "Mouse", price: 20, stock: 50 },
};

function getProduct(id: keyof Products) {
  return products[id];
}

function updatePrice(id: keyof Products, price: Product["price"]) {
  const product = getProduct(id);
  if (product) {
    product.price = price;
  }
  return product;
}
