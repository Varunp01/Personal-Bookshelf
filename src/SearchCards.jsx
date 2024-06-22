import Bookshelf from './Bookshelf'
import { useState } from 'react'
import Cards from './Cards';
export default function SearchCards({ queries }) {
  let [info, SetInfo] = useState([]);
  const Api_Url = `https://openlibrary.org/search.json?q=${queries}&limit=10&page=1`;
  let getCardInfo = async () => {
    let response = await fetch(`${Api_Url}`);
    let jsonResponse = await response.json();
    let data = await jsonResponse.docs;
    // let updatedInfo = info.concat(
      let update=data.map(element => ({
        Book_Title: element.title,
        Edition_count: element.edition_count,
      }))
    // );
    
    // let updatedInfo={[...info,{}]}
    await SetInfo(()=>update);
    // console.log(update);

  };

  let displayData = () => {
    getCardInfo();
  };

  return (
    <div>
      <Bookshelf info={info}></Bookshelf>
      {(queries != "") ?
        <div>
          {displayData()}
          <Cards info={info}></Cards>
        </div>
        :
        <h1>Enter book name</h1>
      }
    </div>
  )
}