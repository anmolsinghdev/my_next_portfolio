"use client";

import Link from "next/link";
import React, { useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { socialMediaUrl } from "@/Details";
import { GiHamburgerMenu } from "react-icons/gi";
interface INavbar {
  onThemeToggle(): void;
}

export default function Navbar({
  onThemeToggle,
}: INavbar) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { twitter, linkdin, instagram, github } =
    socialMediaUrl;
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="container mx-auto md:flex py-2 max-width">
      <div className="flex justify-between items-center py-2 md:py-10">
        <span className="absolute left-0">
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.default",
              color: "text.primary",
              borderRadius: 1,
            }}
          >
            <IconButton
              sx={{
                ml: 1,
              }}
              onClick={onThemeToggle}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </span>
        <div> </div>
        <div
          onClick={toggleClass}
          className="cursor-pointer"
        >
          <GiHamburgerMenu
            className={
              theme.palette.mode === "dark"
                ? "dark:text-white md:hidden text-2xl"
                : "text-black md:hidden text-2xl"
            }
          />
        </div>
      </div>
      <nav
        className={` ${
          !isOpen ? "hidden" : null
        } text-center md:flex min-w-full justify-between`}
      >
        <ul className="custom-ul font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <Link
              href="/"
              onClick={toggleClass}
              className={"nav-items"}
            >
              Home
            </Link>
          </li>
          <li className="pb-1 md:pb-0">
            <Link
              href="/about"
              onClick={toggleClass}
              className={"nav-items"}
            >
              About
            </Link>
          </li>
          <li className="pb-1 md:pb-0">
            <Link
              href="/technologies"
              onClick={toggleClass}
              className={"nav-items"}
            >
              Technologies
            </Link>
          </li>
          {/* <li className="pb-1 md:pb-0">
            <Link
              href="/projects"
              onClick={toggleClass}
              className={'nav-items'}
            >
              Projects
            </Link>
          </li> */}
          <li>
            <Link
              href="/contact"
              onClick={toggleClass}
              className={"nav-items"}
            >
              Contact
            </Link>
          </li>
        </ul>
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <li>
            <Link
              href={twitter}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                className={
                  theme.palette.mode === "dark"
                    ? "fill-white"
                    : "fill-black"
                }
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.875 1.875C8.59152 1.875 1.875 8.59152 1.875 16.875C1.875 25.1585 8.59152 31.875 16.875 31.875C25.1585 31.875 31.875 25.1585 31.875 16.875C31.875 8.59152 25.1585 1.875 16.875 1.875ZM24.0837 13.1819C24.0937 13.3393 24.0937 13.5033 24.0937 13.6641C24.0937 18.5792 20.3504 24.2411 13.51 24.2411C11.4007 24.2411 9.44531 23.6283 7.79799 22.5737C8.09933 22.6071 8.38728 22.6205 8.69531 22.6205C10.4364 22.6205 12.0368 22.0312 13.3125 21.0335C11.6786 21 10.3058 19.9286 9.83705 18.4554C10.4096 18.5391 10.9252 18.5391 11.5145 18.3884C10.6732 18.2175 9.91699 17.7605 9.37438 17.0953C8.83178 16.43 8.53623 15.5973 8.53795 14.7388V14.692C9.03013 14.9699 9.60938 15.1406 10.2154 15.1641C9.70595 14.8245 9.28814 14.3645 8.99903 13.8249C8.70993 13.2852 8.55845 12.6825 8.55804 12.0703C8.55804 11.3772 8.73884 10.7444 9.06362 10.1953C9.99744 11.3449 11.1627 12.2851 12.4837 12.9548C13.8047 13.6245 15.2518 14.0088 16.731 14.0826C16.2054 11.5547 18.0938 9.50893 20.3638 9.50893C21.4353 9.50893 22.3996 9.95759 23.0792 10.6808C23.9196 10.5234 24.7232 10.2087 25.4397 9.78683C25.1618 10.6473 24.5792 11.3739 23.8058 11.8326C24.5558 11.7522 25.279 11.5446 25.9487 11.2533C25.4431 11.9967 24.8103 12.6562 24.0837 13.1819Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href={linkdin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                className={
                  theme.palette.mode === "dark"
                    ? "fill-white"
                    : "fill-black"
                }
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href={github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                className={
                  theme.palette.mode === "dark"
                    ? "fill-white"
                    : "fill-black"
                }
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                />
              </svg>
            </Link>
          </li>
          <li>
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                className={
                  theme.palette.mode === "dark"
                    ? "fill-white mt-6"
                    : "fill-black mt-6"
                }
                width="50"
                height="50"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

{
  /* <Link href="/">
          TODO create header logo
          <img className="w-14" src={logos.logogradient} alt="logo" />
        </Link> */
}
