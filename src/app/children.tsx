"use client"

import { useState } from "react";
import { fetchPokeApi } from "./api"

function Children() {
  const [data, setData] = useState<any>();

  // fetchPokeApi(10).then((res) => {
  //   setData(res.data)
  // })

  return (
    <main>
      <h1>Test Page</h1>
      <h2>
        {data.count}
      </h2>
    </main> 
  )
}

export default Children