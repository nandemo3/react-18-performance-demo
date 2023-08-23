import { getLocalApi, getAxiosLocalApi } from "./api"

export default async function Home() {
  const data1 = await getLocalApi("Kobayashi")
  const data2 = await getLocalApi("Kobayashi")
  // const data1 = await getAxiosLocalApi("Kobayashi")
  // const data2 = await getAxiosLocalApi("Kobayashi")

  return (
    <main>
      <div>
        <h3>Request1</h3>
        <div>{data1.message}</div>
        <div>{data1.date}</div>
      </div>
      <div>
        <h3>Request2</h3>
        <div>{data2.message}</div>
        <div>{data2.date}</div>
      </div>
    </main> 
  )
}