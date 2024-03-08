import Meme from "./meme"

export default async function page({params}){
    const {id} = params
    let memes =await fetch('https://api.imgflip.com/get_memes')
    memes = await memes.json()
    memes = memes.data.memes
    let singleMeme = memes.filter((meme)=>meme.id === id) 
    singleMeme = singleMeme[0] 
    console.log(singleMeme);
    return<div>
        <h2 className="text-white underline mb-10 font-semibold text-center mt-5 text-[30px]">{singleMeme.name}</h2>
        <Meme singleMeme={singleMeme}/>
    </div>
}