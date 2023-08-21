"use client"

import React, { useEffect, useState, useTransition } from "react";
import JsonData from "./data.json"

 function List({searchQuery}: any) {
  //@ts-ignore
  const jsonData: any[] = JsonData
  const [data, setData] = useState<any[]>(jsonData);

  useEffect(() => {
    if(!searchQuery) return 
    const filterArry = jsonData.filter((d: any) => {
      return d.repo.name.includes(searchQuery);
    })
    setData(filterArry)
  }, [searchQuery])

  return (
    <ul>
      {data.map((d:any, index) => (
        <li key={index}>{d.repo.name}</li>
      ))}
    </ul>
  )
 }

export default function SearchCities() {
  const [text, setText] = useState("");
  const [searchQuery, setSearchQuery] = useState(text);
  const [isPending, startTransition] = useTransition();

   return (    
      <main>      
          <input  
              type="text" 
              value={text}
              onChange={(e) => {
                 setText(e.target.value)
                 startTransition(() => {
                    setSearchQuery(e.target.value)
                 })
             }}  />      
          <List searchQuery={searchQuery} />    
      </main>  
     );
};