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
  const maxID = await Monster.find().sort({"id": -1}).limit(1);
  monsterData["id"] = maxID[0].id + 1;
  monsterData["image_url"] = "https://robohash.org/" + monsterData["id"] + "?set=set2&size =15x15";
  const newMonster = new Monster(monsterData);
  return await newMonster.save();
};

// Update monster
export const repoupdateMonster = async (id, monsterData) => {
  return await Monster.findOneAndUpdate(id, monsterData, {new: true});
};

// Delete monster
export const repodeleteMonster = async (id) => {
  return await Monster.findOneAndDelete(id);
};
