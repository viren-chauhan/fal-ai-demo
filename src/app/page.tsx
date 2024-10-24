"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";

const arr = [1, 2, 3, 4, 5, 6];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111419] flex flex-col gap-5 p-4">
      <h1 className="text-white text-2xl font-semibold">General Image</h1>
      <div className="flex-grow bg-[#2c2d44] rounded-md p-3">
        <p className="text-white text-lg font-semibold">Prompt</p>
        <div>
          <div className="flex flex-row justify-between gap-3 pt-4">
            <div className="h-40 rounded-md border bg-[#2e334d] flex-1 p-3">
              <textarea
                name="prompt"
                id="prompt"
                className="bg-transparent w-full resize-none text-white px-3 py-2 h-full focus:outline-none"
                placeholder="Enter your imagination..."
              ></textarea>
            </div>
            <div className="w-1/4 h-40 rounded-md border bg-[#2e334d] p-5 flex flex-col justify-between">
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
                // onChange={(e: any) => {
                // }}
                // err="dkf"
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
                // placeholder={""}
                // onChange={(e: any) => {
                // }}
                // err="dkf"
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
                // placeholder={""}
                // onChange={(e: any) => {
                // }}
                // err="dkf"
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
