import { fetchPokeApi, getAxiosPokeApi } from "./api"
import Children from "./children"

// fetchPokeApi(10)
// getAxiosPokeApi(10)

export default function Home() {
  return (
    <main>
      <Children />
    </main> 
  )
}