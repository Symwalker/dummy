"use client";

import Image from "next/image";
import { useState } from "react";

const Meme = ({ singleMeme }) => {
  const [fInput, setFInput] = useState();
  const [sInput, setSInput] = useState();
  const [showImage, setShowImage] = useState(false)
  const [showImageurl, setShowImageUrl] = useState(false)
  const handleGenerateMeme = async () => {
    let data = await fetch(
      `https://api.imgflip.com/caption_image?template_id=${singleMeme.id}&username=ShayanHanif&password=shayan123&text0=${fInput}&text1=${sInput}`
    );
    data = await data.json();
    console.log(data.data.url);
    setShowImageUrl(data.data.url)
    setShowImage(true)
  };
  return (
    <div className="text-center">{
        showImage?'':<>
      <img src={singleMeme.url} className="mx-auto w-[500px] h-[500px] " />
      {/* <Image src={singleMeme.url} className="mx-auto" width={500} height={500} /> */}
      <div className="mt-5 mb-5">

      <input
        placeholder="First Input"
        className="p-3 border-black border-2 rounded-md"
        onChange={(e) => setFInput(e.target.value)}
      />
      <input
        placeholder="Second Input"
        className="p-3 border-black border-2 rounded-md"
        onChange={(e) => setSInput(e.target.value)}
      />
      </div>

      <button
        onClick={handleGenerateMeme}
        className="bg-blue-600 text-white font-bold p-3 rounded-md"
      >
        Generate meme
      </button>
      </>

        }

      {/* {data? data:''} */}
      {showImage ? <img src={showImageurl} className="mx-auto w-[500px] h-[500px] " /> : ""}
      {/* {showImage ? <Image src={showImageurl} className="mx-auto" width={500} height={500} /> : ""} */}
    </div>
  );
};

export default Meme;
