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
      const {search} = this.props;
      if(search === ''){
         return emojis.map((emoji,i)=>{
         return (<li key={i} className="list-group-item">{emoji.symbol} -- {emoji.title}</li>);
      });
      }
      let items = emojis.filter((emoji)=>{
          return emoji.title === search;
      });
        return items.map((emoji,i)=>{
         return (<li key={i} className="list-group-item">{emoji.symbol} -- {emoji.title}</li>);
      });
      }
    

    render(){
        return(
            <div className="container">   
              <ul className="list-group">
                  {this.renderList()}
              </ul>
            </div>
               )
    }
   }

