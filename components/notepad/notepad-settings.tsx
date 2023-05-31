import React, { useState } from "react";
import Popover from "@/components/shared/popover";
import { Settings, AlignJustify } from "lucide-react";

type NotepadSettingsProps = {
  lineCount: number;
  setLineCount: React.Dispatch<React.SetStateAction<number>>;
};
export default function NotepadSettings({
  lineCount,
  setLineCount,
}: NotepadSettingsProps) {
  const [openPopover, setOpenPopover] = useState<boolean>(false);

  return (
    <Popover
      content={
        <SettingsContent lineCount={lineCount} setLineCount={setLineCount} />
      }
      align="end"
      openPopover={openPopover}
      setOpenPopover={setOpenPopover}
    >
      <button
        className="border-[1px] border-black p-1"
        onClick={() => setOpenPopover(!openPopover)}
      >
        <Settings color="#1E2321" size={20} />
      </button>
    </Popover>
  );
}

type SettingsContentProps = {
  lineCount: number;
  setLineCount: React.Dispatch<React.SetStateAction<number>>;
};
function SettingsContent({ lineCount, setLineCount }: SettingsContentProps) {
  return (
    <div className="w-60 bg-white">
      <div className="flex w-full items-center gap-2 px-1 py-2">
        <AlignJustify size={20} color="#1E2321" />
        <p className="w-full text-xs">Line Count</p>
        <input
          type="text"
          value={isNaN(lineCount) ? "" : lineCount}
          onChange={(e) => setLineCount(parseInt(e.target.value))}
          className=" h-6 w-10 p-0 text-center text-xs"
        />
      </div>
    </div>
  );
}
