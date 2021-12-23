import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import classes from "../styles/Header.module.css";
import classNames from "../lib/classNames";

const elements = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Posts",
    path: "/posts",
  },
  {
    name: "Games",
    path: "/games",
  },
  {
    name: "Tech",
    path: "/tech",
  },
];

export default function Header() {
  const router = useRouter();
  return (
    <div className={classes.wrapper}>
      <header>
        <nav className="flex flex-col items-center sm:flex-row">
          <Link href="/" passHref>
            <a className="py-3 mr-0 sm:mr-8 flex items-center">
              <Image height={36} width={33} src="/twh.png" alt="" />
            </a>
          </Link>

          <div className={classes.links}>
            {elements.map((x, i) => (
              <Link href={x.path} key={i}>
                <a
                  className={classNames(
                    router.pathname === x.path && classes.active
                  )}
                >
                  {x.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
}
