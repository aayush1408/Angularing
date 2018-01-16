import React from 'react';
import axios from 'axios';

export default class EmojiList extends React.Component{
    renderEmoji(){
        axios.get('../emojiList.json')
          .then((res)=>{
            console.log(res.data);
          })
          .catch(function (error) {
            console.log(error.res);
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
