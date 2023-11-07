import React from 'react';
import { CardBig } from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom
import "./Book.css";

const Book = () => {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const data = [
    {
        title: "I Am a Cat", id: 1,
        rate: 4,
        genre: "Satirical", 
        img: "https://i0.wp.com/freethoughtblogs.com/affinity/files/2019/09/iamacat.jpg?ssl=1",
        description: "Description of Movie 1",
    },
    {
        title: "Don Quixote", id: 2,
        rate: 4,
        genre: "Satirical", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHPqZ-zKpDV1BDzCcxX-gh9icNjaSfBgJxfSp-wXDWJFeKjPpb8HywwcliOo2Ix3a4rY&usqp=CAU",
        description: "Description of Movie 1",
    },
    {
        title: "Unleashed", id: 3,
        rate: 3,
        genre: "Romance", img: "https://images.squarespace-cdn.com/content/v1/59e235dcd7bdcec81eb68962/1575860872067-04EH3B6LX0ZNNXH26H88/ke17ZwdGBToddI8pDm48kD755XqWqn8HkRX8WSTt5GJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URwn7vetbNoOrjGqAVoZN5bz1XPY0_Ev1nDpBBPOnwUda4oDI66FEaoPF3aKRzQZjg/Romance+Unleashed+by+Diana+Plamer.jpg",
        description: "Description of Movie 1",
    },
    {
        title: "Twilight", id: 4,
        rate: 4,
        genre: "Romance, Mystery", 
        img: "https://th.bing.com/th/id/OIP.E9TgvacMS87W-wi6oZnWZQHaJl?pid=ImgDet&rs=1",
        description: "Description of Movie 1",
    },
    {
        title: "No Longer Human", id: 5,
        rate: 4,
        genre: "Semi-autobiographical ", 
        img:"https://cdn.sanity.io/images/p34gzxcg/production/7635c996b98d1762e7530fe157b599284de70123-750x1050.jpg?auto=format&w=1000&fit=scale",
        description: "Description of Movie 1",
    },
    {
        title: "Rashomon", id: 6,
        rate: 4,
        genre: "Mystery, Thriller", 
        img:"https://www.sequelbooks.com/assets/full/9784805314630.jpg?20211028145848",
        description: "Description of Movie 1",
},
];

  return (
    <>
      <p id="books">Top Books</p>
      <div className="containerTop">
        {data.map((item, index) => (
        <Link to={`/book/detail/${item.id}`} key={item.id}>
          <CardBig key={item.id} title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
        </Link>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="books">All Books</p>
          {data.map((item, index) => (
            <Link to={`/book/detail/${item.id}`} key={item.id}>
              <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Book;
