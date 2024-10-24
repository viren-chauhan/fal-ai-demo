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
      // Get current cursor position
      const start = textarea?.selectionStart;
      const end = textarea?.selectionEnd;

      // Insert the selected path at the current cursor position
      const updatedText = textValue.slice(0, start) + path + textValue.slice(end);
      setTextValue(updatedText);

      // Set cursor position after the inserted text
      setTimeout(() => {
        textarea?.focus();
        textarea?.setSelectionRange(start + path.length, start + path.length);
      }, 0);
    }
  };

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
                  <label htmlFor="imgSize" className="text-white">
                    No of images
                  </label>
                  <input
                    type="text"
                    id="imgSize"
                    className="rounded-md border bg-transparent text-white px-2 focus:outline-none"
                  />
                </div>
                <div className="flex-row flex justify-between">
                  <label htmlFor="imgSize" className="text-white">
                    Image Size
                  </label>
                  <TextInput
                    type={"text"}
                    id={"imgSize"}
                    style={
                      "rounded-md border bg-transparent text-white px-2 focus:outline-none"
                    }
                    placeholder={""}
                  />
                </div>
                <div className="flex-row flex justify-between">
                  <label htmlFor="scale" className="text-white">
                    Scale
                  </label>
                  <TextInput
                    type={"text"}
                    id={"scale"}
                    style={
                      "rounded-md border bg-transparent text-white px-2 focus:outline-none"
                    }
                  />
                </div>
                <div className="flex-row flex justify-between">
                  <label htmlFor="steps" className="text-white">
                    Steps
                  </label>
                  <TextInput
                    type={"text"}
                    id={"steps"}
                    style={
                      "rounded-md border bg-transparent text-white px-2 focus:outline-none"
                    }
                  />
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
