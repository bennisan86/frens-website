import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/FRENS.png";
import Discord from "../images/discord-mark-white.png";
import Github from "../images/github-mark-white.png";
import X from "../images/logo-white.png";

function Header() {
  const location = useLocation().pathname;
  // const [thisisHome,setThisisHome] = useState();

  return (
    <>
    {location === "/"?
    <header
      className="absolute w-full">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="https://discord.gg/yx53KwrvRS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={Discord}
                    width="25"
                    alt="Discord logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/frensPool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mx-[10px]"
                >
                  <img
                    src={X}
                    width="20"
                    alt="Github logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/frens-pool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={Github}
                    width="20"
                    alt="Github logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/frens-pool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  
                </a>
              </li>
            </ul>
          </nav>
        </div>
    </header>
    :
    <header
    className="fixed w-full">
        <Link to="/" className="block" aria-label="FRENS">
        <img
          className="mx-auto"
          src={Logo}
          width="120"
          height="40"
          alt="FRENS Pool"
        />
      </Link>
    </header>
    }
    </>
  );
}

export default Header;
