import Bookshelf from './Bookshelf.jsx';
import './Cards.css'
export default function SearchBox({change}) {
    function writEverything(event){
        change(event.target.value);
        // console.log(event.target.value);
    }
    return (
        <div className='containerSearch'>
            <h1>Search By Book Name</h1>
            <br />
            <input type="text" onChange={writEverything}/>
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        </div>
    )
}