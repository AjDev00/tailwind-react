import { useState } from "react";
import Buttons from "./Buttons";
import FirstHome from "./FirstHome";
import SecondHome from "./SecondHome";
import ThirdHome from "./ThirdHome";
import LastHome from "./LastHome";
import SocialLinks from "./SocialLinks";

export default function Home() {
  const [clicked, setClicked] = useState(0);
  const [firstActive, setFirstActive] = useState(true);
  const [secondActive, setSecondActive] = useState(false);
  const [thirdActive, setThirdActive] = useState(false);
  const [lastActive, setLastActive] = useState(false);

  function handleClick() {
    setClicked(0);
    setFirstActive(true);
    setSecondActive(false);
    setThirdActive(false);
    setLastActive(false);
  }

  function handleFirstClick() {
    setClicked(1);
    setSecondActive(true);
    setFirstActive(false);
    setThirdActive(false);
    setLastActive(false);
  }

  function handleSecondClick() {
    setClicked(2);
    setThirdActive(true);
    setSecondActive(false);
    setFirstActive(false);
    setLastActive(false);
  }

  function handleThirdClick() {
    setClicked(3);
    setLastActive(true);
    setThirdActive(false);
    setSecondActive(false);
    setFirstActive(false);
  }

  return (
    <div>
      <div
        name="Home"
        className="static bg-gradient-to-b p-4 md:pb-60 text-white text-2xl from-orange-300 to-orange-500 h-screen w-full justify-center flex flex-col gap-12 md:gap-20"
      >
        {clicked == 0 && <FirstHome />}
        {clicked === 1 && <SecondHome />}
        {clicked == 2 && <ThirdHome />}
        {clicked == 3 && <LastHome />}
        <SocialLinks />
        <Buttons
          handleClick={handleClick}
          handleFirstClick={handleFirstClick}
          handleSecondClick={handleSecondClick}
          handleThirdClick={handleThirdClick}
          firstActive={firstActive}
          secondActive={secondActive}
          thirdActive={thirdActive}
          lastActive={lastActive}
        />
      </div>
    </div>
  );
}
