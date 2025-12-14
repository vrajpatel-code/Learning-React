import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function GitHub() {
//  const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('https://api.github.com/users/vrajpatel-code')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

const data = useLoaderData()
  return (
    <div className="text-xl bg-gray-700 text-white p-4">
      GitHub Followers : {data.followers}
      <br />
      <img src={data.avatar_url} alt="Git Pic" width={300} />
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/vrajpatel-code')
    return response.json()
}