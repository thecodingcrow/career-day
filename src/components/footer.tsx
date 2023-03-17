import React from "react";
import { LogoLeanCodersFull } from "./logos/lc";
import { LogoLeanForgeFull } from "./logos/lf";
import { LogoLeanHiveFull } from "./logos/lh";

export const Footer = () => {
  return (
    <footer className="fixed bottom-12">
      <ul className="flex ">
        <li>
          <a
            href="https://lean-coders.at"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoLeanCodersFull />
          </a>
        </li>
        <li>
          <a
            href="https://lean-hive.at"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoLeanHiveFull />
          </a>
        </li>
        <li>
          <a
            href="https://lean-forge.at"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoLeanForgeFull />
          </a>
        </li>
      </ul>
    </footer>
  );
};
