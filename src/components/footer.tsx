import { LogoLeanCodersLight } from "./logos/light/lc";
import { LogoLeanForgeLight } from "./logos/light/lf";
import { LogoLeanHiveLight } from "./logos/light/lh";

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
            <LogoLeanCodersLight />
          </a>
        </li>
        <li>
          <a
            href="https://lean-hive.at"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoLeanHiveLight />
          </a>
        </li>
        <li>
          <a
            href="https://lean-forge.at"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoLeanForgeLight />
          </a>
        </li>
      </ul>
    </footer>
  );
};
