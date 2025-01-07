const music=new Audio('audio/audio1.mp3');

music.play();
const songs=[
  {
    id:1,
    songName: `<h5>On My Way <br /><div class="subtitle">Alan Walker</div></h5>`,
  poster:`musicimg/img1.jpg `
  },
  {
  id:2,
  songName: `<h5>Believer <br /> <div class="subtitle">Jessy</div></h5>`,
  poster:`musicimg/img2.jpg `
  },
  {
  id:3,
  songName: `<h5>Tu Hai Toh <br /><div class="subtitle">	Ash King, Palak Muchhal</div></h5>`,
  poster:`musicimg/img3.jpg `
  },
  {
    id:4,
    songName: `<h5>Illuminati <br /><div class="subtitle">	Dabzee</div></h5>`,
  poster:`musicimg/img4.jpg `
  },
  {
    id:5,
    songName: `<h5>Ram siya Ram <br /><div class="subtitle">	Sachet Tandon</div></h5>`,
  poster:`musicimg/img5.jpg `
  },
  {
    id:6,
    songName: `<h5>Humdardiyaan <br /><div class="subtitle">Raj Barman</div></h5>`,
  poster:`musicimg/img6.jpg `
  },
  {
    id:7,
    songName: `<h5>Heeriye <br /><div class="subtitle">Arijit Singh</div></h5>`,
  poster:`musicimg/img7.jpg `
  },
  {
    id:8,
    songName: `<h5>Hanuman <br /><div class="subtitle">-----</div></h5>`,
  poster:`musicimg/img8.jpg `
  },
  {
    id:9,
    songName: `<h5>Sajni <br /><div class="subtitle">Arijit Singh</div></h5>`,
  poster:`musicimg/img9.jpg `
  },
  {
    id:10,
    songName: `<h5>Dil Jaan Tu<br /><div class="subtitle">Gurnazar</div></h5>`,
  poster:`musicimg/img10.jpg `
  },
  {
    id:11,
    songName: `<h5>Saari Zindagi <br /><div class="subtitle">Gold Boy</div></h5>`,
  poster:`musicimg/img11.jpg `
  },
  {
    id:12,
    songName: `<h5>Khamoshiyaan <br /><div class="subtitle">Arijit Singh</div></h5>`,
  poster:`musicimg/img12.jpg `
  },
  {
    id:13,
    songName: `<h5>Ve kamleya <br /><div class="subtitle">Arijit Singh</div></h5>`,
  poster:`musicimg/img13.jpg `
  },
  {
    id:14,
    songName: `<h5>Kasturi <br /><div class="subtitle">Arijit Singh</div></h5>`,
  poster:`musicimg/img14.jpg `
  },
  {
    id:15,
    songName: `<h5>Phir Bhi Tumko <br /><div class="subtitle">Arijit Singh</div></h5>`,
  poster:`musicimg/img15.jpg `
  },
  {
    id:16,
    songName: `<h5>Kisi Shayar Ki Gazal <br /><div class="subtitle">Arijit Singh</div></h5>`,
  poster:`musicimg/img16.jpg `
  },
  {
    id:17,
    songName: `<h5>Dil Sambal Zara <br /><div class="subtitle">Arijit Singh</div></h5>`,
  poster:`musicimg/img17.jpg `
  },
  {
    id:18,
    songName: `<h5>Thodi Jagah <br /><div class="subtitle">Arijit Singh</div></h5>`,
  poster:`musicimg/img18.jpg `
  },
  {
    id:19,
    songName: `<h5>Aaj Se Teri Saari <br /><div class="subtitle">Arijit Singh</div></h5>`,
  poster:`musicimg/img19.jpg `
  },
  {
    id:20,
    songName: `<h5>Tere Hawale <br /> <div class="subtitle">Arijit Singh</div></h5>`,
  poster:`musicimg/img20.jpg `
  },
  {
    id:21,
    songName: `<h5>Tere Hawale 2.o<br /><div class="subtitle">Arijit Singhr</div></h5>`,
  poster:`musicimg/img21.jpg `
  },



]

Array.from(document.getElementsByClassName('song-item')).forEach((e,i)=>{
  e.getElementsByTagName('img')[0].src=songs[i].poster;
  e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})

let master=document.getElementById('masterplay');
let waveEL=document.getElementById('wave');
master.addEventListener('click',()=>{
  if(music.paused || music.currentTime <= 0){
    music.play();
    // waveEL.classList.add('waveEL');
    waveEL.classList.add('active-wave'); // Use a distinct class name
     master.classList.remove('bi-play-fill');
     master.classList.add('bi-pause-fill');
  }
  else{
    music.pause();
    // waveEL.classList.remove('waveEL');
    waveEL.classList.remove('active-wave'); // Use a distinct class name
    master.classList.add('bi-play-fill');
    master.classList.remove('bi-pause-fill');

  }
})
let index=0;
let poster=document.getElementById('poster-play');
let title1=document.getElementById('title1');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
  e.addEventListener('click',(e1)=>{
   index=e1.target.id;
   console.log(index);
   music.src=`audio/audio${index}.mp3`;
   poster.src=`musicimg/img${index}.jpg`;
   music.play();
   master.classList.remove('bi-play-fill');
     master.classList.add('bi-pause-fill');

     let songtitles=songs.filter((els)=>{
      return els.id == index;
     });
     songtitles.forEach(elss =>{
      let {songName}=elss;
      title1.innerHTML=songName;
     })
  })
})

let as=getElementById("arijit");
as.addEventListener('click',()=>{
  window.location.href='arijit.html';
})

let pop_left=document.getElementById("pop-song-left");
let pop_right=document.getElementById("pop-song-right");
let popsong=document.getElementsByClassName("pop-song")[0];

pop_right.addEventListener('click', ()=>{
popsong.scrollLeft += 330;
})
pop_left.addEventListener('click', ()=>{
  popsong.scrollLeft -= 330;
  })
  let pop_artt_left=document.getElementById("pop-art-left");
let pop_artt_right=document.getElementById("pop-art-right");
  let item1=document.getElementsByClassName("item")[0];
  pop_artt_right.addEventListener('click', ()=>{
  item1.scrollLeft += 330;
    })
    pop_artt_left.addEventListener('click', ()=>{
    item1.scrollLeft -= 330;
      })
