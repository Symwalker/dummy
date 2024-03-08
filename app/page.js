import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let memes =await fetch('https://api.imgflip.com/get_memes')
  memes = await memes.json()
  memes = memes.data.memes
  // console.log(memes);
  return (
  //  <div className="grid grid-cols-4 w-[80%] mx-auto">
  //     {
  //       memes?.map((meme)=>(
  //         <Link href={`/meme/${meme.id}`}>
  //         <div className= {`col-span-1 w-full  border-2  grayscale hover:grayscale-0 duration-500 cursor-pointer border-black `} >
  //           <h2 className="text-center">{meme.name}</h2>
  //           <img src={meme.url} className="bg-contain "  />

  //         </div>
  //         </Link>
  //       ))
  //     }
  //  </div>
  <div className=" ">
<header className="fixed  left-0 right-0    top-10 z-30 mx-auto  w-[80%] border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg rounded-3xl ">

      <div className=" text-center text-[30px] font-bold">
        MEME GENERATOR
      </div>
      
</header>

  <div className="masonry-gallery w-[80%] mx-auto mt-36">
  {memes?.map((meme) => (
    <div key={meme.id} className="masonry-item w-full rounded-md  bg-white   ">
      <Link href={`/meme/${meme.id}`}>
        <div className="  grayscale hover:grayscale-0 duration-500 cursor-pointer">
          <h2 className="text-center text-black">{meme.name}</h2>
          <img src={meme.url} alt={meme.name} className="w-full" />
        </div>
      </Link>
    </div>
  ))}
</div>
</div>

  );
}
