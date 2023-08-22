import { getLocalApi, getAxiosLocalApi } from "./api";

// let data: any;
// getLocalApi().then((res) => {
//     data = res.data
// })

async function GrandChild() {
  
  const { data } = await getLocalApi()
  // const { data } = await getAxiosLocalApi()

  return (    
    <div>
      <h3>GrandChild</h3>
      <ul>
        {data.map((d:any, index: number) => (
          <li key={index}>{d.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default async function Children() {
  
  const { data } = await getLocalApi()
  // const { data } = await getAxiosLocalApi()


  return (    
    <div>
      <h3>Child</h3>
      <ul>
        {data.map((d:any, index: number) => (
          <li key={index}>{d.name}</li>
        ))}
      </ul>
      <GrandChild />
    </div>
  );
};