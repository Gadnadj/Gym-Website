import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { nav } from "framer-motion/m";

type Props = {};

const index = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween}  mx-auto w-5/6`}>
          {/* left side */}
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
          </div>

          {/* right side */}
          <div className={`${flexBetween} w-full `}>
            {/* inner left side */}
            <div className={`${flexBetween} gap-8 text-sm`}>
              <p>Home</p>
              <p>Our Classes</p>
              <p>Benefits</p>
              <p>Contact Us</p>
            </div>

            {/* inner right side */}
            <div className={`${flexBetween} gap-8`}>
              <p>Sign In</p>
              <button>Become a Member</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default index;
