import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from'./components/search_bar';
import TitleText from './components/title_text';
import MemeDetails from './components/meme_details';

class App extends React.Component{
    render(){
        return(
            <div>
                <TitleText />
                <SearchBar />
                <MemeDetails />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

