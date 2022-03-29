import './search-box.style.css';
import { Component } from "react";
class SearchBox extends Component{
    //return actual html related to search box
    render(){
        return (
        <input 
        //className='search-box' 
        className={this.props.className}
        type='search'
    //    placeholder='Search Monsters'
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}/>)
    }

}
export default SearchBox;