import { useState } from "react";
import NotepadSettings from "./notepad-settings";

type NotepadProps = {};

export default function Notepad({}: NotepadProps) {
  const [content, setContent] = useState<string>("");
  const [lineCount, setLineCount] = useState<number>(1);

  return (
    <div className="flex h-full w-full resize-none flex-col items-center justify-start border-[1px] p-2 font-default">
      <div className="self-end">
        <NotepadSettings lineCount={lineCount} setLineCount={setLineCount} />
      </div>
      <textarea
        rows={lineCount}
        value={content}
        placeholder="type to flow..."
        onChange={(e) => {
          setContent(e.target.value);
          if (e.target.rows > lineCount) {
            console.log("rows", e.target.rows);
          }
        }}
        className=" bg-transparent form-textarea flex w-4/6 resize-none overflow-hidden border-none text-center text-sm text-dark-gray placeholder:text-light-gray focus:outline-none focus:ring-0 focus:placeholder:text-white"
      ></textarea>
    </div>
  );
}
