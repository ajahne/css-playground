// note, may need to wrap all of thse code to avoid global pollution
//const app = {};
//
// app.handler = function(songUrl) {
//
// }

const songs = [
  {
    title: "Super Amazing Song",
    artist: 'Awesome Artist (feat. Cool singer)',
    icon: 'https://www.designformusic.com/wp-content/uploads/2016/09/electro-synthwave-album-cover-500x500.jpg',
    url: 'song.mp3'
  },
  {
    title: "Lorem Ipsom Dolor",
    artist: 'Greatness (feat. Goodness)',
    icon: 'http://best-sci-fi-books.com/wp-content/uploads/2017/03/deep_space.jpg',
    url: 'song.mp3'
  },
  {
    title: "Top 40 hit",
    artist: 'Pop Artist',
    icon: 'https://f4.bcbits.com/img/a2403689430_16.jpg',
    url: 'song.mp3'
  },
  {
    title: "Underground",
    artist: 'Below and keep',
    icon: 'https://f4.bcbits.com/img/a1151387807_16.jpg',
    url: 'song.mp3'
  },
  {
    title: "Here is a song with a super long title to test out our layout",
    artist: 'Then there is an artist with a long name',
    icon: 'https://f4.bcbits.com/img/a1878237415_16.jpg',
    url: 'song.mp3'
  },
];

const container = document.getElementById('content');

function handler(songUrl) {
  console.log(songUrl)
}

function getTemplate(props) {
  const template = `<div class="song-item-wrapper">
          <div class="song-number">${props.songNumber}</div>
          <img class="song-image" src='${props.icon}' onclick=handler('${props.url}')>
          <div class="song-info">
            <div class="song-title" onclick=handler('${props.url}')>${props.title}</div>
            <div class="song-artist" onclick=handler('${props.url}')>${props.artist}</div>
          </div>
        </div>`

  return template;
};

function addSongs() {
  //loop through array of songs and add to the Dom
  songs.forEach(function(element, index) {
    element.songNumber = ++index;
    container.innerHTML += getTemplate(element);
  });

};


function main() {
  addSongs();
}

main();
