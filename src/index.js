import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './img'

const cardsArray = [
    {
      name: "mushroom",
      img: "img/mushroom.png"
    },
    {
      name: "Flower",
      img: "img/flower.png"
    },
    {
      name: "Star",
      img: "img/Star.png"
    },
    {
      name: "coin",
      img: "img/coin.png"
    },
    {
      name: "leaf",
      img: "img/leaf.png"
    },
    {
      name: "1Up",
      img: "img/_1Up.png"
    },
    {
      name: "bell",
      img: "img/bell.png"
    },
    {
      name: "Shine",
      img: "img/shine.png"
    },
    {
      name: "shell",
      img: "img/shell.png"
    }
  ];
  const gameGrid = cardsArray.concat(cardsArray);
  gameGrid.sort(() => 0.5 - Math.random());
const cards = gameGrid.map((card)=>
<img src={require (`./${card.img}`)}></img>
);
ReactDOM.render(
    <div>
    
       <ul>{cards}</ul>
    </div>,
    document.getElementById('root')
  );
  