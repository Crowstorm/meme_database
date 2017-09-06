import React from 'react';
import memes from './meme_database'
import SearchBar from'./search_bar';

//import arrayNumber from '/search_bar';

class MemeDetails extends React.Component{
    render(){
        return(
            <div style={{border:'5px solid red'}}>
                {/* Dopoki reird nie znaleziony
                Begin the search to display meme details
                 */}

                 {/* Jesli rekord nie zostal znaleziony
                 Meme not found
                  */}

                {/* Jak rekord znaleziony wyswietl rekord z detalami */}

                {/* Zamiast 0 arrayNumber */}
                {memes[0].name} <br />
                {memes[0].description}
                </div>
        )
    }
}

export default MemeDetails;