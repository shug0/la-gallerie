import { useState } from "react";
import RandomPicture from "./RandomPicture.tsx";
import { useEventListener, useToggle, useInterval } from "usehooks-ts";

export default function App() {
  const [counterValue, setCounterValue] = useState(1);
  const [isVisible, toggle] = useToggle(true);
  const [shouldShowPicture, setShouldShowPicture] = useState(false);

  useEventListener("keydown", (e) => {
    if (e.keyCode === 32) {
      toggle();
    }

    if (e.keyCode === 13) {
      setShouldShowPicture(true);
    }
  });

  useInterval(() => {
    if (counterValue > 20) {
      return setCounterValue(1);
    }
    setCounterValue(counterValue + 1);
  }, 100);

  return (
    <div className="relative h-screen bg-black p-8 text-white flex items-center justify-center flex-col">
      {!isVisible && <div className="absolute h-screen w-screen bg-black" />}
      {!shouldShowPicture && (
        <>
          <h1 className="text-6xl mb-12 font-display uppercase">La Galerie</h1>
          <h2 className="text-3xl flex items-center justify-center">
            <div>Oeuvre numéro : </div>
            <div className="ml-3 font-display text-5xl pb-4">
              {counterValue}
            </div>
          </h2>
          <button
            onClick={() => setShouldShowPicture(true)}
            className="italic mt-10 text-5xl border-[1px] border-white px-4 py-3 rounded-md hover:bg-white hover:text-black"
          >
            STOP !
          </button>
        </>
      )}
      {shouldShowPicture && <RandomPicture />}
    </div>
  );
}
