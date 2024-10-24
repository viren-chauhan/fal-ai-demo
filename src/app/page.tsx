"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import React from "react";

const arr = [1, 2, 3, 4, 5, 6];

const OWNED_WORKS = [{
  path: "FF-Work - 1",
  url: "https://youtube.com",
}, {
  path: "FF-Work - 2",
  url: "https://youtube.com",
}, {
  path: "FF-Work - 3",
  url: "https://youtube.com",
}, {
  path: "FF-Work - 4",
  url: "https://youtube.com",
}, {
  path: "FF-Work - 5",
  url: "https://youtube.com",
}, {
  path: "FF-Work - 6",
  url: "https://youtube.com",
}, {
  path: "FF-Work - 7",
  url: "https://youtube.com",
}, {
  path: "FF-Work - 8",
  url: "https://youtube.com",
}];

export default function Home() {
  const textareaRef = React.useRef(null);
  const [textValue, setTextValue] = React.useState("");
  const handleActionClick = (path: string) => {
    const textarea = textareaRef.current;

    if (textarea) {
      const start = textarea?.selectionStart;
      const end = textarea?.selectionEnd;
      const updatedText = textValue.slice(0, start) + path + textValue.slice(end);
      setTextValue(updatedText);
      setTimeout(() => {
        textarea?.focus();
        textarea?.setSelectionRange(start + path.length, start + path.length);
      }, 0);
    }
  };
  const [scale, setScale] = React.useState<number>(1.2);
  const [noOfImages, setNoOfImages] = React.useState<number>(4);
  const [steps, setSteps] = React.useState<number>(1);

  return (
    <div className="min-h-screen bg-[#111419] flex flex-col gap-5 p-4">
      <h1 className="text-white text-2xl font-semibold">General Image</h1>
      <div className="flex flex-row gap-4">
        <div className="w-3/4 flex-grow bg-[#2c2d44] rounded-md p-3">
          <p className="text-white text-lg font-semibold">Prompt</p>
          <div>
            <div className="flex flex-row justify-between gap-3 pt-4">
              <div className="h-40 rounded-md border bg-[#2e334d] flex-1 p-3">
                <textarea
                  ref={textareaRef}
                  name="prompt"
                  value={textValue}
                  onChange={(e) => setTextValue(e.target.value)}
                  id="prompt"
                  className="bg-transparent w-full resize-none text-white px-3 py-2 h-full focus:outline-none"
                  placeholder="Enter your imagination..."
                ></textarea>
              </div>
              <div className="w-2/4 h-44 rounded-md border bg-[#2e334d] p-5 flex flex-col justify-between">
                <div className="flex-row flex justify-between">
                  <label htmlFor="noOfImages" className="text-white">
                    No. of images
                  </label>
                  <div className="w-8/12 flex justify-center gap-2">
                    <input
                      type="range"
                      min={0}
                      max={4}
                      value={noOfImages}
                      id="noOfImages"
                      step={1}
                      className="w-11/12"
                      onChange={(e: any) => setNoOfImages(Number(e.target.value))}
                    />
                    <span style={{ borderRadius: 8, height: 25, width: 60, backgroundColor: 'white' }}>
                      <input onChange={(e: any) => Number(e?.target?.value) < 5 && setNoOfImages(Math.round(Number(e?.target?.value)) || 0)} className="w-full bg-transparent focus:outline-none text-black text-center" value={noOfImages} type="number" max={4} min={0} />
                    </span>
                  </div>
                </div>
                <div className="flex-row flex justify-between">
                  <label htmlFor="imgSize" className="text-white">
                    Image Size
                  </label>
                  <select
                    name="imgSize"
                    id="imgSize"
                    onChange={(e) => console.log(e.target.value)}
                    className="rounded-md border bg-transparent text-white w-8/12 focus:outline-none"
                  >
                    <option value="square" className="text-black">
                      Square
                    </option>
                    <option value="squarehd" className="text-black">
                      Square HD
                    </option>
                    <option value="portrait_3_4" className="text-black">
                      Portrait 3:4
                    </option>
                    <option value="portrait_9_16" className="text-black">
                      Portrait 9:16
                    </option>
                    <option value="landscape_4_3" className="text-black">
                      Landscape 4:3
                    </option>
                    <option value="landscape_16_9" className="text-black">
                      Landscape 16:9
                    </option>
                  </select>
                </div>
                <div className="flex-row flex justify-between">
                  <label htmlFor="scale" className="text-white">
                    Scale
                  </label>
                  <div className="w-8/12 flex justify-center gap-2">
                    <input
                      type="range"
                      min={0.0}
                      max={4.0}
                      value={scale}
                      id="scale"
                      step={0.1}
                      className="w-11/12"
                      onChange={(e: any) => setScale(Number(e.target.value))}
                    />
                    <span style={{ borderRadius: 8, height: 25, width: 60, backgroundColor: 'white' }}>
                      <input onChange={(e: any) => Number(e?.target?.value) < 5 && setScale(Number(e?.target?.value) || 0)} className="w-full bg-transparent focus:outline-none text-black text-center" value={scale} type="number" max={4} min={0} />
                    </span>
                  </div>
                </div>
                <div className="flex-row flex justify-between">
                  <label htmlFor="steps" className="text-white">
                    Steps
                  </label>
                  <div className="w-8/12 flex justify-center gap-2">
                    <input
                      type="range"
                      min={0}
                      max={50}
                      value={steps}
                      id="steps"
                      step={1}
                      className="w-11/12"
                      onChange={(e: any) => setSteps(Number(e.target.value))}
                    />
                    <span style={{ borderRadius: 8, height: 25, width: 60, backgroundColor: 'white' }}>
                      <input onChange={(e: any) => Number(e?.target?.value) < 51 && setSteps((Math.round(Number(e?.target?.value))) || 0)} className="w-full bg-transparent focus:outline-none text-black text-center" value={steps} type="number" max={4} min={0} />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between gap-3 pt-4">
              <div className="flex-1">
                <h1 className="text-white font-semibold rounded-md py-2">
                  Automatic Negative Prompt
                </h1>
                <div className="h-40 rounded-md border bg-[#2e334d] flex-1 p-3">
                  <textarea
                    name="prompt"
                    id="prompt"
                    className="bg-transparent w-full resize-none text-white px-3 py-2 h-full focus:outline-none"
                    placeholder="Enter your imagination..."
                  ></textarea>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-white font-semibold rounded-md py-2">
                  Negative Prompt
                </h1>
                <div className="h-40 rounded-md border bg-[#2e334d] flex-1 p-3">
                  <textarea
                    name="prompt"
                    id="prompt"
                    className="bg-transparent w-full resize-none text-white px-3 py-2 focus:outline-none h-full"
                    placeholder="Enter your negative prompt..."
                  ></textarea>
                </div>
              </div>
            </div>
            <Button label="Generate Image" />
          </div>
        </div>
        <div className="w-1/4 flex-grow bg-[#2c2d44] rounded-md p-3">
          <h1 className="text-white text-xl font-semibold">Owned Works</h1>
          <div className="flex gap-4 flex-wrap mt-3">
            {
              OWNED_WORKS?.map((res: any, index: number) => {
                return <span key={index}
                  onClick={() => handleActionClick(res?.path)} style={{ padding: 4, paddingRight: 12, paddingLeft: 12, backgroundColor: '#38394f', borderRadius: 50, color: 'white', fontWeight: 'revert' }}>{res?.path}</span>
              })
            }
          </div>
        </div>
      </div>
      <div className="flex-grow bg-[#2c2d44] rounded-md p-3">
        <p className="text-white text-lg font-semibold">Generate Result</p>
        <div className="h-48 rounded-md border flex gap-5 overflow-x-auto p-3">
          {arr.map((item, index) => (
            <Image
              key={index}
              alt="Garden"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnYiXnTnaEBkJtVwT9SI16EOBb9JjcjU12A&s"
              }
              height={100}
              width={300}
            />
          ))}
        </div>
        <div className="gap-3 flex">
          <Button label="Save" />
          <Button label="Generate Video" />
        </div>
      </div>
    </div>
  );
}
