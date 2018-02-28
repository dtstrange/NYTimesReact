import React, { Component } from 'react';

class Search extends Component{
    render(){
        return(
            <div>
              <h1>Search</h1>
              <form>
                <lable>
                    Topic:
                    <input type="text" name="topic"/>
                </lable>
                <br/>
                <lable>
                    Start Year:
                    <input type="text" name="start_year"/>
                </lable>
                <br/>
                <lable>
                    End Year:
                    <input type="text" name="end_year"/>
                </lable>
                <br/>
                <input type="submit" value="Submit" />
              </form>
            </div>
        )
    }
}

export default Search;