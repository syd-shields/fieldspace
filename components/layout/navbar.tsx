"use client";

import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import { useSignUpModal } from "./sign-up-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import Button from "@/components/shared/button";
import Popover from "../shared/popover";
import { useState } from "react";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const { setShowSignUpModal } = useSignUpModal();

  const [openPopover, setOpenPopover] = useState<boolean>(false);

  return (
    <>
      <SignInModal />
      <div className="border-gray-200 fixed top-0 flex w-full items-center justify-between border-b bg-white/50 px-10 pt-1 backdrop-blur-xl">
        <div>
          <Link
            href="/"
            className="mb-1 flex items-center self-start font-head text-base tracking-wider text-dark-gray"
          >
            <p>
              fieldspac<span className="text-light-gray">_</span>e
              <span className="text-light-gray">.</span>
            </p>
          </Link>
        </div>
        <div>
          {session ? (
            <div className="flex">
              <Link
                href="/ideate"
                className="flex self-center pr-16 font-head text-sm tracking-wider text-dark-gray hover:text-light-gray"
              >
                <p>ideate</p>
              </Link>
              <UserDropdown session={session} />
            </div>
          ) : (
            <div className="w-min-content flex gap-2 self-end">
              <Button text="Sign Up" onClick={() => setShowSignUpModal(true)} />
              <Button
                text="Log In"
                onClick={() => setShowSignInModal(true)}
                type="secondary"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
