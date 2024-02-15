import {
  repogetAllMonsters,
  repogetMonsterById,
  repocreateMonster,
  repoupdateMonster,
  repodeleteMonster,
} from '../repositories/monsterRepository.js';

// Get all monsters
export const getAllMonsters = async (req, res) => {
  try {
    const monsters = await repogetAllMonsters();
    res.json(monsters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get monster by id
export const getMonsterById = async (req, res) => {
  try {
    const monster = await repogetMonsterById({id: req.params.id});
    res.json(monster);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create monster
export const createMonster = async (req, res) => {
  try {
    const newMonster = await repocreateMonster(req.body);
    res.json(newMonster);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update monster
export const updateMonster = async (req, res) => {
  try {
    const updatedMonster = await repoupdateMonster({id: req.params.id}, req.body);
    res.json(updatedMonster);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete monster
export const deleteMonster = async (req, res) => {
  try {
    await repodeleteMonster({id: req.params.id});
    res.json({ message: 'Monster deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
