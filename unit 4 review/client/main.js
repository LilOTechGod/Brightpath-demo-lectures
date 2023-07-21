console.log(`hello universe`);
const baseUrl = `http://localhost:4444`;
//bring in the display section element
const displaySection = document.querySelector("#display-section");
//grab html elements we wanna work with
const newArtist = document.querySelector("#newArtist");
const newSong = document.querySelector("#newSong");
const addForm = document.querySelector("#add-song");
const updateForm = document.querySelector("#update-form");
const songId = document.querySelector("#song-id");
const updateArtist = document.querySelector("#update-artist");
const updateSong = document.querySelector("#update-song");


const deleteSong = (id) => {
  axios
    .delete(`${baseUrl}/api/song/${id}`)
    .then((res) => createSongCard(res.data))
    .catch((err) => console.error(err));
};

//creates the card for songs/response
createSongCard = (songArr) => {
  displaySection.innerHTML = ``;
  songArr.map((song) => {
    const holdingDiv = document.createElement("div");
    holdingDiv.innerHTML = `
            <ul>
            <li>Id: ${song.songId}</li>
                <li>Song: ${song.songName}</li>
                <li>Artist: ${song.artist}</li>
                <button onclick="deleteSong(${song.songId})"> Delete </button>
            </ul>
        `;
    displaySection.appendChild(holdingDiv);
  });
};


//gets all songs
const getSongs = () => {
  axios
    .get(`${baseUrl}/api/song`)
    .then((res) => {
      console.log(res.data);
      createSongCard(res.data);
    })
    .catch((err) => console.error(err));
};

//adds new song to db
const addFormHandler = (e) => {
  e.preventDefault();
  const body = {
    songName: newSong.value,
    artist: newArtist.value,
  };
  axios
    .post(`${baseUrl}/api/song`, body)
    .then((res) => createSongCard(res.data))
    .catch((err) => console.error(err));
  newSong.value = ``;
  newArtist.value = ``;
};

const updateHandler = (e) => {
  e.preventDefault();
  // console.log(songId,newArtist,newSong)
  axios
    .put(
      `${baseUrl}/api/song/${songId.value}?newArtist=${updateArtist.value}&newSongName=${updateSong.value}`
    )
    .then((res) => createSongCard(res.data))
    .catch((err) => console.error(err));
};

//event-listeners
document.addEventListener("DOMContentLoaded", getSongs);
addForm.addEventListener("submit", addFormHandler);
updateForm.addEventListener("submit", updateHandler);