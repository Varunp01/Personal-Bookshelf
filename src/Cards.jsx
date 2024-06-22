// import Bookshelf from './Bookshelf';
import './Cards.css'
import './button.css'

export default function Cards({ info }) {
    function AddToBookShelf(event){
        let title=document.getElementsByClassName('title');
        let bookName=document.getElementsByClassName('bookName');
        // const userData = { Book_Title: event.target.previousElementSibling.previousElementSibling.innerHTML, Edition_count: event.target.previousElementSibling.innerHTML};
        // const itemJson = JSON.stringify(userData);
        const itemJson = `${event.target.previousElementSibling.previousElementSibling.innerHTML}  ${event.target.previousElementSibling.innerHTML}`;
        const cartKey = `cart_item_${Math.random().toString(36).substring(2, 15)}`; // Random key prefix
        localStorage.setItem(cartKey, itemJson);
        console.log(itemJson);
        // console.log(event.target.previousElementSibling.innerHTML);
        // console.log(event.target.previousElementSibling.previousElementSibling.innerHTML);
    }
    return (
        <div className='container'>
          
        {/* <div>{console.log(info)}</div> */}
      {info.map((object, index) => {
        if (index < 10) { // Check if index is less than 10
          return (
            <div key={index} className="cardoutline">
              <p className='title'>Book Title: {object.Book_Title}</p>
              <p className='bookName'>Edition Count: {object.Edition_count}</p>
              <button className="btn" onClick={AddToBookShelf}>Add to Bookshelf</button>
            </div>
          );
        }
        return null; // Return null for indices beyond 10
      })}
    </div>
    )
}