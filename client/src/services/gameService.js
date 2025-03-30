import request from "../utils/request";

const baseUrl = "http://localhost:3030/jsonstore/games";

export default {
  async getAll() {
    const result = await request.get(baseUrl);

    // Transform data to array
    const games = Object.values(result);

    return games;
  },
  getOne(gameId) {
    return request.get(`${baseUrl}/${gameId}`);
  },
  create(gameData) {
    return request.post(baseUrl, gameData);
  },
};
