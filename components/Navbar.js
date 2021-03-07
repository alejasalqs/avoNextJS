import React from "react";
import Link from "next/link";

// es recomendable usar un <a></a> dentro del <Link> para mejoras en SEO

export const Navbar = () => {
  return (
    <>
      <nav>
        <menu className="menu__container">
          <div>
            <h2>Avo Store</h2>
          </div>
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
        </menu>
      </nav>
    </>
  );
};
