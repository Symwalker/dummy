import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let memes = await fetch("https://api.imgflip.com/get_memes");
  memes = await memes.json();
  memes = memes.data.memes;
  return (
    <div>
      <header className="fixed  left-0 right-0    top-10 z-30 mx-auto  w-[80%] border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg rounded-3xl ">
        <div className=" text-center text-[30px] font-bold">MEME GENERATOR</div>
      </header>

      <div className="masonry-gallery w-[80%] mx-auto mt-36">
        {memes?.map((meme) => (
          <div
            key={meme.id}
            className="masonry-item w-full rounded-md  bg-white   "
          >
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
