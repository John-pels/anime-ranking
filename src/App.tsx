import { useEffect, useState } from 'react';
import { Anime } from './anime';
import { Chart } from './chart';
import './global.css';
import { iAnime } from './types';
import { filterChartData } from './util';
function App() {
  const API_URL = 'https://api.jikan.moe/v4/top/anime?limit=20';
  const [animeData, setAnimeData] = useState<Array<iAnime>>([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleFetchAnime = async () => {
      try {
        const response = await fetch(API_URL)
        const jsonData = await response.json()
        setAnimeData(jsonData.data)
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }

    }
    handleFetchAnime()

  }, []);



  if (isLoading) return <p>Loading...</p>
  return (
    <main className="App">
      <h1>Anime Ranking Page</h1>
      <Anime data={animeData} />
      <Chart data={filterChartData(animeData)} />
    </main>
  );
}

export default App;
