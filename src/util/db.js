
// Mock database with two methods

import frost from "./data/frost.js";
import magazine from "./data/magazine.js";

const db = {
  frost,
  magazine
};

export const getDataFromDB = (website, pageNum) => {
  return db[website].page.find((page) => page.id == pageNum);
};

export const getDB = (website) => {
  return db[website];
};

export default db;



