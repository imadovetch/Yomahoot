// Add Remove Game //

import { Connecttomongodb } from "@/utils/modules";
import { GameModel } from "@/data/modules";

export default async function handdler(req, res) {
  // Add Game
  if (req.method === "POST" && req.body) {
    await addGame(req.body);
    res.json({ message: "Add Game" });
  }
  // Get Game Data
  if (req.method === "GET" && req.query.id) {
    const game = await getGame(req.query.id);
    if (game) res.json({ game });
    else res.json({ message: "couldn't find this game" });
  }
  // Get All Games Data
  if (req.method === "GET" && req.query.getall === '1'){
    const games = await getAllGames();
    if (games.length) res.json({ games });
    else res.json({ message: "There is no game" });
  }

}

async function addGame(data) {
  try {
    // Connect to database
    Connecttomongodb();
    // Add Game
    const NewGame = GameModel(data);
    await NewGame.save();
  } catch (e) {
    console.log("Error while adding game");
    throw e;
  }
}

async function getGame(id) {
  try {
    // Connect to database
    Connecttomongodb();
    // Get Game
    const game = await GameModel.findOne({ id: id });
    return game;
  } catch (e) {
    console.log("Error while getting game");
    throw e;
  }
}


async function getAllGames() {
  try {
    // Connect to database
    Connecttomongodb();
    // Get Game
    const games = await GameModel.find();
    return games;
  } catch (e) {
    console.log("Error while getting game");
    throw e;
  }
}