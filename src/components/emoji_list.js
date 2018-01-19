import React from 'react';
import axios from 'axios';
export default class EmojiList extends React.Component{
    constructor(props){
      super(props);
      this.state = { emojis : [] }
      axios.get('/emojiList.json')
        .then((res)=>{
          this.setState({ emojis : res.data  });
        })
        .catch((err)=>{
          console.log(err.response);
        })
    }

    renderList(){
      const {emojis}  = this.state;
      console.log(emojis);
        return emojis.map((emoji,i)=>{
        return (<li key={i} className="list-group-item">{emoji.symbol} -- {emoji.title}</li>);
      })
    }

    render(){
        return(
            <div>   
              <ul className="list-group">
                  {this.renderList()}
              </ul>
            </div>
               )
    }
   }

