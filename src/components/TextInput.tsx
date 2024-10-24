import React from "react";

export default function TextInput({
  type,
  id,
  style,
  placeholder,
  onChange,
  err,
  min,
  max,
  ref,
}: any) {
  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        id={id}
        min={min ? min : 0}
        max={max && max}
        //   className="rounded-md border bg-transparent text-white px-2 focus:outline-none"
        className={
          style
            ? style
            : "rounded-md border bg-transparent text-white px-2 focus:outline-none"
        }
        placeholder={placeholder ? placeholder : ""}
        onChange={onChange ? onChange : (e) => console.log(e.target.value)}
        ref={ref ? ref : undefined}
      />
      <p className="text-red-600 text-xs px-1">{err}</p>
    </div>
  );
}
