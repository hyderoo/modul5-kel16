import React from 'react';
import { CardBig } from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom
import "./Game.css";

const Game = () => {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const data = [
    {
        title: "Elden Ring", id: 1,
        rate: 4,
        genre: "Souls-like, RPG, Open World",
        img:"https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png",
        description: "Elden Ring adalah sebuah game action RPG yang dikembangkan oleh FromSoftware dan diterbitkan oleh Bandai Namco Entertainment. Game ini diciptakan oleh Hidetaka Miyazaki, sang pembuat Dark Souls, dan George R.R. Martin, penulis seri A Song of Ice and Fire. Elden Ring menggabungkan elemen-elemen gameplay yang sulit dengan cerita epik dan dunia fantasi yang luas. Pemain menjelajahi dunia terbuka, menghadapi musuh-musuh kuat, dan mengungkap rahasia di balik cincin legendaris yang menjadi fokus cerita.",

    },
    {
        title: "The Witcher 3", id: 2,
        rate: 4,
        genre: "Open World, RPG, Story Rich", 
        img: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0914/TvcIHkYqqln1RGbaFqBeuFp6.jpg",
        description: "The Witcher 3 adalah game role-playing open-world yang mengikuti perjalanan Geralt of Rivia, seorang pemburu monster yang berusaha menyelamatkan putrinya dalam dunia fantasi yang penuh intrik politik dan bahaya.",
    },{
        title: "DOOM", id: 3,
        rate: 3,
        genre: "Action,Shooting", 
        img: "https://th.bing.com/th/id/OIP.k_OObx0r_GmsXN4-g3gKNgHaLG?pid=ImgDet&rs=1",
        description: "DOOM adalah permainan tembak-menembak berjenis first-person shooter yang terkenal, diciptakan oleh id Software. Dalam game ini, pemain mengambil peran sebagai Marine berjuang melawan hordes setan yang mengerikan di Mars. DOOM dikenal karena aksi cepatnya, senjata-senjata ikonik, dan desain level yang penuh tantangan. Game ini telah menjadi ikon dalam genrenya sejak pertama kali dirilis pada tahun 1993.",
    },
    {
        title: "Yakuza 0", id: 4,
        rate: 4,
        genre: "Story Rich, Action", 
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/638970/capsule_616x353.jpg?t=1685702171",
        description: "Yakuza 0 adalah sebuah permainan video aksi petualangan yang mengikuti kisah dua protagonis, Kazuma Kiryu dan Goro Majima, dalam dunia kejahatan dan intrik Yakuza di Jepang pada tahun 1980-an. Pemain akan menjelajahi kota-kota besar, bertarung dalam pertarungan jalanan, dan terlibat dalam cerita yang kompleks dan penuh drama.",
    },
    {
        title: "League", id: 5,
        rate: 4,
        genre: "MOBA", 
        img: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-2935d0a3e332decb8e727fe56789b6ab",
        description: "League of Legends adalah permainan video daring berjenis Multiplayer Online Battle Arena (MOBA) yang dikembangkan oleh Riot Games. Pemain bergabung dalam tim untuk bertarung dalam pertempuran intens di arena 5 lawan 5, dengan tujuan menghancurkan basis musuh. Setiap pemain memilih karakter unik dengan kemampuan khusus untuk berkontribusi dalam pertandingan. Game ini memadukan strategi, keterampilan individu, dan kerja sama tim untuk mencapai kemenangan.",
    },
    {
        title: "PUBG", id: 6,
        rate: 4,
        genre: "Shooter, Battle Royale", 
        img: "https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg",
        description: "PUBG (PlayerUnknown's Battlegrounds) adalah game battle royale yang penuh aksi di mana pemain terjun dari pesawat dan berusaha menjadi yang terakhir bertahan hidup di pulau dengan berbagai senjata dan peralatan.",
    },

];

  return (
    <>
      <p id="games">Top Games</p>
      <div className="containerTop">
        {data.map((item, index) => (
        <Link to={`/game/detail/${item.id}`} key={item.id}>
          <CardBig key={item.id} title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
        </Link>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="game">All Games</p>
          {data.map((item, index) => (
            <Link to={`/game/detail/${item.id}`} key={item.id}>
              <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Game;
