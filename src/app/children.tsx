"use client"

import React, { useEffect, useState, useTransition } from "react";
import JsonData from "./data.json"

 function List({keyword}: any) {
  //@ts-ignore
  const jsonData: any[] = JsonData
  const [data, setData] = useState<any[]>(jsonData);

  useEffect(() => {
    if(!keyword) return 
    const filterArry = jsonData.filter((d: any) => {
      return d.repo.name.includes(keyword);
    })
    setData(filterArry)
  }, [keyword])

  return (
    <ul>
      {data.map((d:any, index) => (
        <li key={index}>{d.repo.name}</li>
      ))}
    </ul>
  )
 }

export default function Children() {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState(text);
  const [isPending, startTransition] = useTransition();

   return (    
      <main>      
          <input  
              type="text" 
              value={text}
              onChange={(e) => {
                setText(e.target.value)
                startTransition(() => {
                  setKeyword(e.target.value)
                })
             }}  />      
          <List keyword={keyword} />    
      </main>  
     );
};