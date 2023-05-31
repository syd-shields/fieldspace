"use client";

import Notepad from "@/components/notepad/notepad";
import Button from "@/components/shared/button";

export default function Ideate() {
  return (
    <div className="flex w-full flex-col items-center pt-20">
      <div className="h-1/2 w-5/6">
        <Notepad />
      </div>
      <div className="h-1/2 w-5/6 pt-10">
        <Button text="Review" onClick={() => {}} />
      </div>
    </div>
  );
}
