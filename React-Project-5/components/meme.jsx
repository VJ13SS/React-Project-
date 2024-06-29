import React from 'react'
import getMemes from './data.js'

export default function Meme(){

  let data;
  
  let [meme,setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage:"https://i.imgflip.com/1wz1x.jpg"
  })

  /*React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(response=>response.json())
    .then(data=>setAllMemes(data.data.memes))
  })*/
  console.log("Hai");
  async function Click() {
    data = await getMemes();
    let memeImgIndex = Math.floor(Math.random() * data.length);
    
    setMeme(prevMeme =>({
      ...prevMeme,
      randomImage:data[memeImgIndex].url
    }))
  }

  function MemeText(event) {
    const {name,value} = event.target;
    setMeme(prevMeme =>{
      return {
        ...prevMeme,
        [name]:value
      }
    })
     
  }
  
  
  return (
    <main>
      
      <div className = "form">
        <input type="text" className = "form-text" placeholder = "Top Text" name = "topText" value = {meme.topText} onChange = {MemeText}/>
        <input type="text" className = "form-text" placeholder = "Bottom Text" name = "bottomText" value = {meme.bottomText} onChange = {MemeText}/>
        <button 
          className = "form-button"
          onClick = {Click}
          >
          Get a new Meme Image
        </button>
      </div>
      <div className = "Meme">
        <img src = {meme.randomImage} className = "Meme-img"/>
      <h3 className = "Meme-TopText">{meme.topText}</h3>
      <h3 className = "Meme-BottomText">{meme.bottomText}</h3>
      </div>
    </main>
  )
}
