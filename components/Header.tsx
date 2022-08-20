/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type HeaderProp = {
  title: string;
};

const Header = ({ title }: HeaderProp) => {
  return (
    <header className="navbar bg-primary">
      <div className="container-fluid py-2 d-flex px-5">
        <Link href="/">
          <a>
            <div className="fs-1 pokemonfont text-light">{title}</div>
          </a>
        </Link>
        <img
          src="/pokeball.png"
          alt="pokeball"
          style={{ width: "50px", height: "auto" }}
        />
      </div>
    </header>
  );
};

export default Header;
