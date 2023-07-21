const db = [
    {
      songId: 1,
      songName: "superbass",
      artist: "Nicki Minaj",
    },
    {
      songId: 2,
      songName: "high hopes",
      artist: "Pink Floyd",
    },
    {
      songId: 3,
      songName: "fight night",
      artist: "Migos",
    },
    {
      songId: 4,
      songName: "final countdown",
      artist: "Europa",
    },
    {
      songId: 5,
      songName: "muhammad",
      artist: "Young Dolph",
    },
  ];
  
  let songId = 6;
  // CRUD- Create Read Update Delete
  module.exports = {
    addSong: (req, res) => {
      const { songName, artist } = req.body;
      const newObj = {
        songId,
        songName,
        artist,
      };
      db.push(newObj);
      res.status(200).send(db);
      songId++;
    },
    getSongs: (req, res) => {
      res.status(200).send(db);
    },
    updateSong: (req, res) => {
      const { id } = req.params;
      const { newSongName, newArtist } = req.query;
      //use the id to locate the resource/object
      const indexofSong = db.findIndex((song) => song.songId === +id);
      if (indexofSong === -1) {
        res.status(400).send("song not found");
        return;
      }
      //reassign the object/key-value pairs
      db[indexofSong].songName = newSongName;
      db[indexofSong].artist = newArtist;
      res.status(200).send(db);
    },
    deleteSong: (req, res) => {
      const { id } = req.params;
  
      //use the id to locate the resource/object
      const indexofSong = db.findIndex((song) => song.songId === +id);
      if (indexofSong === -1) {
        res.status(400).send("song not found");
        return;
      }
      //delete the object
      db.splice(indexofSong,1);
      res.status(200).send(db);
    },
  };