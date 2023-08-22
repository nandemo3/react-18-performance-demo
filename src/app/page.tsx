import { getLocalApi, getAxiosLocalApi } from "./api"
import Children from "./children"

// let data: any;
  // getLocalApi().then((res) => {
  //   data = res.data
  // })
  // // getLocalApi()

export default async function Home() {
  const { data } = await getLocalApi()
  // const { data } = await getAxiosLocalApi()

  return (
    <main>
      <div>
        <h3>Home</h3>
        <ul>
          {data.map((d:any, index: number) => (
            <li key={index}>{d.name}</li>
          ))}
        </ul>
      </div>
      <Children />
    </main> 
  )
}