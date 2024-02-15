import Monster from '../models/monsterModel.js';

// Get all monsters
export const repogetAllMonsters = async () => {
  return await Monster.find();
};

// Get monster by id
export const repogetMonsterById = async (id) => {
  return await Monster.find(id);
};

// Create monster
export const repocreateMonster = async (monsterData) => {
  return await Monster.create(monsterData);
};

// Update monster
export const repoupdateMonster = async (id, monsterData) => {
  return await Monster.findByOneAndUpdate(id, monsterData, {new: true});
};

// Delete monster
export const repodeleteMonster = async (id) => {
  return await Monster.findOneAndDelete(id);
};
