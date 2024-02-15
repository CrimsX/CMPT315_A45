import connection from './database/database.js'
import Monster from './models/monsterModel.js'

// Fetch data from the given URL and insert it into the database
const fetchData = async () => {
  const url = "https://gist.githubusercontent.com/mrchenliang/e438f666d121261b74abcd70a5f938d8/raw/a8f14ee5097fe2ab4f78798307d2dd3dcb0dcd3a/monsters.json"
  const data = await fetch(url);
  const monsters = await data.json();

  for (let i = 0; i < monsters.length; i++) {
    let newMonster = new Monster(monsters[i]);
    newMonster.save();
  }
  console.log("Data inserted successfully");
}

connection();
fetchData();
