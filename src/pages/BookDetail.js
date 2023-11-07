import React from 'react';
import { useParams } from 'react-router-dom';
import "./BookDetail.css";

const BookDetail = () => {
  const { id } = useParams(); // Mengambil parameter id dari URL

  //  mengambil data detail berdasarkan id dari Book.js
  const data = [
    {
        title: "I Am a Cat", id: 1,
        rate: 4,
        genre: "Satirical", 
        img: "https://i0.wp.com/freethoughtblogs.com/affinity/files/2019/09/iamacat.jpg?ssl=1",
        description: "I Am a Cat adalah sebuah novel klasik yang ditulis oleh Soseki Natsume, menceritakan dunia melalui sudut pandang seorang kucing yang mengamati kehidupan sehari-hari manusia di Jepang awal abad ke-20.",
    },
    {
        title: "Don Quixote", id: 2,
        rate: 4,
        genre: "Satirical", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHPqZ-zKpDV1BDzCcxX-gh9icNjaSfBgJxfSp-wXDWJFeKjPpb8HywwcliOo2Ix3a4rY&usqp=CAU",
        description: "Novel Don Quixote adalah karya sastra klasik yang ditulis oleh penulis Spanyol, Miguel de Cervantes. Ceritanya mengikuti petualangan seorang bangsawan gila yang menganggap dirinya sebagai seorang ksatria yang berjuang untuk keadilan. Don Quixote melakukan perjalanan bersama temannya, Sancho Panza, dalam upaya untuk mengubah dunia menjadi tempat yang lebih adil, meskipun realitasnya sering kali bertentangan dengan imajinasinya yang liar. Novel ini adalah salah satu karya paling terkenal dalam sejarah sastra dunia dan dianggap sebagai tonggak penting dalam pengembangan novel modern.",
    },
    {
        title: "Unleashed", id: 3,
        rate: 3,
        genre: "Romance", img: "https://images.squarespace-cdn.com/content/v1/59e235dcd7bdcec81eb68962/1575860872067-04EH3B6LX0ZNNXH26H88/ke17ZwdGBToddI8pDm48kD755XqWqn8HkRX8WSTt5GJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URwn7vetbNoOrjGqAVoZN5bz1XPY0_Ev1nDpBBPOnwUda4oDI66FEaoPF3aKRzQZjg/Romance+Unleashed+by+Diana+Plamer.jpg",
        description: "Unleashed adalah sebuah novel yang mengisahkan tentang petualangan seorang protagonis dalam mengungkap misteri besar yang tersembunyi di balik kehidupannya. Cerita ini penuh dengan intrik, aksi, dan ketegangan yang membuat pembaca terus terpaku pada setiap halaman, sambil mengikuti perjalanan karakter utama dalam menghadapi tantangan dan rahasia yang mengubah hidupnya.",
    },
    {
        title: "Twilight", id: 4,
        rate: 4,
        genre: "Romance, Mystery", 
        img: "https://th.bing.com/th/id/OIP.E9TgvacMS87W-wi6oZnWZQHaJl?pid=ImgDet&rs=1",
        description: "Twilight adalah novel karangan Stephenie Meyer yang mengisahkan kisah cinta antara seorang remaja perempuan, Bella Swan, dan vampir tampan, Edward Cullen, di lingkungan fiksi Forks, Washington. Kisah ini menggabungkan unsur roman, fantasi, dan supernatural dalam sebuah narasi yang penuh dengan konflik, drama, dan ketegangan. Twilight adalah bagian pertama dari seri Twilight yang terkenal dan telah diadaptasi menjadi sebuah franchise film yang sukses.",
    },
    {
        title: "No Longer Human", id: 5,
        rate: 4,
        genre: "Semi-autobiographical ", 
        img:"https://cdn.sanity.io/images/p34gzxcg/production/7635c996b98d1762e7530fe157b599284de70123-750x1050.jpg?auto=format&w=1000&fit=scale",
        description: "No Longer Human adalah novel Jepang klasik yang ditulis oleh Osamu Dazai. Novel ini menggambarkan perjalanan hidup seorang tokoh utama yang merasa terasing dan kehilangan jati diri dalam masyarakat Jepang pada era Taisho. Cerita ini menggali tema-tema isolasi, alienasi, dan depresi dengan gaya penulisan yang kuat dan mendalam.",
    },
    {
        title: "Rashomon", id: 6,
        rate: 4,
        genre: "Mystery, Thriller", 
        img:"https://www.sequelbooks.com/assets/full/9784805314630.jpg?20211028145848",
        description: "Rashomon adalah sebuah novel Jepang yang ditulis oleh Ryunosuke Akutagawa pada tahun 1915. Ceritanya mengisahkan konflik moral dan sudut pandang yang berbeda dalam sebuah kasus kejahatan, di mana beberapa saksi memberikan versi yang berbeda tentang peristiwa yang sama. Novel ini mengeksplorasi sifat subjektivitas dalam narasi dan kebenaran, sambil menggambarkan kompleksitas manusia dan moralitas.",
},
];

  const detailData = data.find((item) => item.id === parseInt(id, 10));

  if (!detailData) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <div>
      <div className="book-details">
        <div className="book-image">
          <img src={detailData.img} alt={detailData.title} />
          
        </div>
        <div className="book-info">
          <h1>{detailData.title}</h1>
          <p>Genre: {detailData.genre}</p>
          <p>Deskripsi: {detailData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
