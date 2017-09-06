import React from 'react';
import memes from './meme_database'

var record = '';
//var recordFound = false;
export var arrayNumber;

class SearchBar extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {term: '',
                    search: ''
                    };

    }
    
    //Enter pressed
    keyPress = (event) =>{
        
        if(event.key === 'Enter'){
            this.setState({search: 'Record Found'});
            record = this.state.term;
        }
    }
    //Testing for record found
    isFound() {
        for(var i=0; i < memes.length; i++){
            if(record.toUpperCase() === memes[i].name.toUpperCase()){
                //meme_details wyswietli znaleziony rekord 
                console.log("Found");
              //  recordFound = true;
                arrayNumber = i;
            } else {
                //div w meme_details wyswietla "Nie znaleziono rekordu"
                console.log('Not found');
            }
        }
    }

    render(){
        return(
            <div>
                {/* 
                on typing term = 'searching'
                on enter term = (if w bazie~~)
                on empty term = 'waiting for input'
                 */}
                <input 
                onChange={event => this.setState({search: 'Searching', term: event.target.value})} 
                onKeyPress={this.keyPress}
                />
                <br />
                <button onClick={this.isFound} > {this.state.search} </button>
            </div>
        )
    }
}

export default SearchBar;