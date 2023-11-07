import React from 'react';
import { useParams } from 'react-router-dom';
import "./MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams(); // Mengambil parameter id dari URL

  // Anda dapat mengambil data detail berdasarkan id dari Movie.js
  const data = [
    {
        title: "Seven Samurai",
        id: 1,
        rating: 5,
        genre: "action, drama",
        img:"https://www.tallengestore.com/cdn/shop/products/Seven_Samurai_-_Akira_Kurosawa_Japanese_Cinema_Masterpiece_-_Arty_Movie_Poster_7289efca-5967-4c0b-ad19-b320fd14ff54.jpg?v=1583828557",
        description: "Seven Samurai adalah sebuah film Jepang yang dirilis pada tahun 1954, disutradarai oleh Akira Kurosawa. Film ini mengisahkan tentang sekelompok tujuh samurai yang disewa oleh sekelompok petani desa untuk melindungi mereka dari serangan sekelompok perampok. Dikenal sebagai salah satu karya paling berpengaruh dalam sejarah sinema, Seven Samurai menonjol dengan pengembangan karakter yang mendalam, konflik moral, dan adegan-adegan aksi yang luar biasa. Film ini telah memberikan kontribusi besar terhadap genre film samurai dan masih dianggap sebagai salah satu karya terbaik dalam sejarah perfilman.",
    },
    {
        title: "Chungking Express",
        id: 2,
        rating: 4,
        genre: "comedy, crime, drama",
        img:"https://i.pinimg.com/564x/b8/8d/36/b88d36888609f0ca8c3ba0f3e2e55099.jpg",
        description: "Chungking Express adalah film Hong Kong tahun 1994 yang disutradarai oleh Wong Kar-wai. Film ini menggambarkan dua cerita cinta yang berjalan paralel di dalam Chungking Mansions dan Central, Hong Kong, dengan gaya visual yang unik dan musik yang kuat.",
    },
    {
        title: "Fallen Angels",
        id: 3,
        rating: 4,
        genre: "crime, romance",
        img:"https://i.pinimg.com/564x/b9/19/09/b919092c26c8ab2c504089a2d777d43d.jpg",
        description: "Fallen Angels adalah sebuah film Hong Kong yang disutradarai oleh Wong Kar-wai pada tahun 1995. Film ini merupakan sebuah karya seni yang memadukan elemen-elemen noir dengan gaya sinematik yang kuat. Cerita berpusat pada kehidupan sejumlah karakter yang terlibat dalam kehidupan kriminal dan kehidupan malam Hong Kong. Dengan visual yang menawan dan musik yang mendalam, film ini menggambarkan kisah emosional dan gelap yang penuh dengan misteri dan keinginan.",
    },
    {
        title: "Pulp Fiction",
        id: 4,
        rating: 4,
        genre: "drama, crime",
        img: "https://uploads.tickettailor.com/c_fill,h_627,w_1200/v1/production/userfiles/yxv0nv2tc6jwvrv527ez.jpg?_a=BAAARODQ",
        description: "Pulp Fiction adalah sebuah film kultus karya Quentin Tarantino yang dirilis pada tahun 1994. Film ini mengikuti serangkaian cerita yang saling terkait yang berpusat pada kehidupan kriminal, kekerasan, dan humor gelap. Dikenal karena penggunaan dialog tajam, pemain yang berbakat, dan gaya penyutradaraan yang unik, Pulp Fiction menjadi salah satu film paling ikonik dalam sejarah perfilman.",
    },
    {
        title: "Inception",
        id: 5,
        rating: 4,
        genre: "sci-fi, action, thriller",
        img: "https://wallpapercave.com/wp/fWnWpHj.jpg",
        description: "Inception adalah sebuah film aksi ilmiah yang disutradarai oleh Christopher Nolan. Film ini mengisahkan tentang seorang pencuri profesional yang merancang rencana untuk mencuri informasi dari alam bawah sadar seseorang melalui mimpi. Dengan konsep dunia mimpi yang kompleks, film ini menggabungkan elemen cerita yang mendalam dengan aksi spektakuler dan efek visual yang mengagumkan.",
    },
  ];

  const detailData = data.find((item) => item.id === parseInt(id, 10));

  if (!detailData) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <div>
      <div className="movie-details">
        <div className="movie-image">
          <img src={detailData.img} alt={detailData.title} />
          
        </div>
        <div className="movie-info">
          <h1>{detailData.title}</h1>
          <p>Genre: {detailData.genre}</p>
          <p>Deskripsi: {detailData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
