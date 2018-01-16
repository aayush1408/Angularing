import React from 'react';
import axios from 'axios';


export default class EmojiList extends React.Component{
    renderEmoji(){
      const path = '../emojiList.json';
        axios.get(path)
          .then((res)=>{
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
  });
    }
    render(){
        return(
            <ul>
                {this.renderEmoji()}
            </ul>
               )
    }
}
