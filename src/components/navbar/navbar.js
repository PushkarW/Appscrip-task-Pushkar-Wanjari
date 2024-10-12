import React from "react";
import Link from "next/link";
import Styles from "./navber.module.css";
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import Image from "next/image";
// import Logo from "../public/Logo";

const navbar = ({ toggleSearch }) => {
  return (
    <nav>
      <div>
        <ul className={Styles.containerTop}>
          <div>
            <li>
              <Image src="/Logo.jpg" alt="Logo" width={50} height={50} />
            </li>
          </div>
          <div>
            <li className={Styles.logoHead}>Logo</li>
          </div>
          <div className={Styles.iconFlex}>
            <li>
              <CiSearch onClick={toggleSearch} />
            </li>
            <li>
              <CiHeart />
            </li>
            <li>
              <BsBag />
            </li>
            <li>
              <CiUser />
            </li>

            <li>
              <select>
                <option>Eng</option>
                <option>Hindi</option>
                <option>Marathi</option>
              </select>
            </li>
          </div>
        </ul>
      </div>
      <ul className={Styles.container}>
        <li>
          <Link href="/products" className={Styles.linkRemoveUL}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" className={Styles.linkRemoveUL}>
            Products
          </Link>
        </li>
        <li>
          <Link href="/products" className={Styles.linkRemoveUL}>
            About
          </Link>
        </li>
        <li>
          <Link href="/products" className={Styles.linkRemoveUL}>
            Checkout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
