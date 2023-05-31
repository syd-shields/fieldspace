import Modal from "@/components/shared/modal";
import { signIn } from "next-auth/react";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { LoadingDots, Google } from "@/components/shared/icons";

const SignUpModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="md:border-gray-200 w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border">
        <div className="border-gray-200 flex flex-col items-center justify-center space-y-3 border-b bg-white px-4 py-6 pt-8 text-center md:px-16">
          <h3 className="font-display text-2xl font-bold">Sign In</h3>
          <p className="text-gray-500 text-sm">
            Sign in and start using Fieldspace.
          </p>
        </div>

        <div className="bg-gray-50 flex flex-col space-y-4 px-4 py-8 md:px-16">
          <button
            disabled={signInClicked}
            className={`${
              signInClicked
                ? "border-gray-200 bg-gray-100 cursor-not-allowed"
                : "border-gray-200 hover:bg-gray-50 border bg-white text-black"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => {
              setSignInClicked(true);
              signIn("google");
            }}
          >
            {signInClicked ? (
              <LoadingDots color="#808080" />
            ) : (
              <>
                <Google className="h-5 w-5" />
                <p>Sign In with Google</p>
              </>
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export function useSignUpModal() {
  const [showSignInModal, setShowSignUpModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignUpModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignUpModal}
      />
    );
  }, [showSignInModal, setShowSignUpModal]);

  return useMemo(
    () => ({ setShowSignUpModal, SignInModal: SignInModalCallback }),
    [setShowSignUpModal, SignInModalCallback],
  );
}
