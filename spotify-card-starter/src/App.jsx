import SongCard from './components/SongCard';

const song = {
image: 'https://i1.sndcdn.com/artworks-Ffg0b7qVgNGo-0-t500x500.jpg',
title: 'DtMF',
artist: 'Bad Bunny',
duration: '3,56',
};

function App() {
  return (
    <div className="app-container">
    <SongCard 
      coverImage={song.image}
      title={song.title}
      artist={song.artist}
      duration={song.duration}
    />
    <h1>hola mundo</h1>
  </div>
  );
}

export default App;
