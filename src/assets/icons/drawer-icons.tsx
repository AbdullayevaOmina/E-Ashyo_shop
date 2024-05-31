import React, { ReactNode } from "react";

/* ===============<!-- Navbar -->================= */
export const MenuIcon: ReactNode = (
  <svg
    aria-hidden="true"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const CloseIcon: ReactNode = (
  <svg
    aria-hidden="true"
    className="hidden w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const SearchIcon: ReactNode = (
  <svg
    className="w-5 h-5 text-gray-500 dark:text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
    ></path>
  </svg>
);

export const SearchIcon2 = React.createElement(
  "svg",
  {
    "aria-hidden": "true",
    className: "w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
  },
  React.createElement("path", {
    clipRule: "evenodd",
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
  })
);

export const BellIcon: ReactNode = (
  <svg
    aria-hidden="true"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
  </svg>
);

/* ===============<!-- Navbar -->================= */

/* ===============<!-- Sidebar -->================= */
export const CustomSVG: ReactNode = (
  <svg
    aria-hidden="true"
    className="h-5 w-5 rounded-full mt-0.5"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 3900 3900"
  >
    <path fill="#b22234" d="M0 0h7410v3900H0z" />
    <path
      d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
      stroke="#fff"
      strokeWidth="300"
    />
    <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
    <g fill="#fff">
      <g id="d">
        <g id="c">
          <g id="e">
            <g id="b">
              <path
                id="a"
                d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
              />
              <use xlinkHref="#a" y="420" />
              <use xlinkHref="#a" y="840" />
              <use xlinkHref="#a" y="1260" />
            </g>
            <use xlinkHref="#a" y="1680" />
          </g>
          <use xlinkHref="#b" x="247" y="210" />
        </g>
        <use xlinkHref="#c" x="494" />
      </g>
      <use xlinkHref="#d" x="988" />
      <use xlinkHref="#c" x="1976" />
      <use xlinkHref="#e" x="2470" />
    </g>
  </svg>
);

export const CustomSVG2: ReactNode = (
  <svg
    aria-hidden="true"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const CustomSVG3: ReactNode = (
  <svg
    aria-hidden="true"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
  </svg>
);

export const CustomSVG4: ReactNode = (
  <svg
    aria-hidden="true"
    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);
export const CustomSVG5: ReactNode = (
  <svg
    aria-hidden="true"
    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
  </svg>
);

export const CustomSVG6: ReactNode = (
  <svg
    aria-hidden="true"
    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
    <path
      fill-rule="evenodd"
      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
      clip-rule="evenodd"
    ></path>
  </svg>
);
export const CustomSVG7: ReactNode = (
  <svg
    aria-hidden="true"
    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
  </svg>
);
/* ===============<!-- Sidebar -->================= */

export const SmallUSFlagIcon: ReactNode = (
  <svg
    aria-hidden="true"
    aria-label="United States Flag"
    className="h-3.5 w-3.5 rounded-full mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <g fillRule="evenodd">
      <g strokeWidth="1pt">
        <path
          fill="#bd3d44"
          d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
          transform="scale(3.9385)"
        />
        <path
          fill="#fff"
          d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
          transform="scale(3.9385)"
        />
      </g>
      <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
      <path
        fill="#fff"
        d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3z"
        transform="scale(3.9385)"
      />
    </g>
  </svg>
);

export const LargeUSFlagIcon: ReactNode = (
  <svg
    aria-hidden="true"
    aria-label="United States Flag"
    className="h-5 w-5 rounded-full mr-2"
    viewBox="0 0 24 24"
  >
    <defs>
      <mask id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </mask>
      <mask id="b">
        <path fill="#fff" d="M0 0h10v7H0z" />
      </mask>
    </defs>
    <path
      fill="#bd3d44"
      d="M24 1v2H0V1zm0 4v2H0V5zm0 4v2H0V9zm0 4v2H0v-2zm0 4v2H0v-2zm0 4v2H0v-2z"
    />
    <path
      fill="#fff"
      d="M24 0v1H0V0zm0 4v1H0V4zm0 4v1H0V8zm0 4v1H0v-1zm0 4v1H0v-1zm0 4v1H0v-1z"
    />
    <g fill="#192f5d" mask="url(#a)">
      <path d="M0 0h10v7H0z" />
      <g mask="url(#b)">
        <path d="M0 0v.5h.7L.5.9.7 1v.1H1v-.1l.3-.4.2.4v.1h.3V1L1.7.5H2V0h-.3L1.5.3 1.2 0zm2 0v.5h.7l-.2.4.2.1v.1h.3v-.1L3 .5h.3V0H3l-.3.3-.2-.3zm2 0v.5h.7l-.2.4.2.1v.1h.3v-.1L5 .5h.3V0H5l-.3.3-.2-.3zm2 0v.5h.7l-.2.4.2.1v.1h.3v-.1L7 .5h.3V0H7l-.3.3-.2-.3zm2 0v.5h.7l-.2.4.2.1v.1h.3v-.1L9 .5h.3V0H9l-.3.3L8.5 0zm-8 1v.5h.7L.5 2l.2.1v.1H1V2l.3-.4.2.4v.1h.3V2L1.7 1H2V1h-.3l-.2.3-.3-.3zm2 0v.5h.7L2.5 2l.2.1v.1H3V2l.3-.4.2.4v.1h.3V2L3.7 1H4V1h-.3L3.5 1.3 3.2 1zm2 0v.5h.7L4.5 2l.2.1v.1H5V2l.3-.4.2.4v.1h.3V2L5.7 1H6V1h-.3L5.5 1.3 5.2 1zm2 0v.5h.7L6.5 2l.2.1v.1H7V2l.3-.4.2.4v.1h.3V2L7.7 1H8V1h-.3L7.5 1.3 7.2 1zm2 0v.5h.7L8.5 2l.2.1v.1H9V2l.3-.4.2.4v.1h.3V2L9.7 1H10V1h-.3L9.5 1.3 9.2 1zM0 2v.5h.7l-.2.4.2.1v.1H1v-.1l.3-.4.2.4v.1h.3V3L1.7 2H2V2h-.3L1.5 2.3 1.2 2zm2 0v.5h.7l-.2.4.2.1v.1H3v-.1l.3-.4.2.4v.1h.3V3L3.7 2H4V2h-.3L3.5 2.3 3.2 2zm2 0v.5h.7l-.2.4.2.1v.1H5v-.1l.3-.4.2.4v.1h.3V3L5.7 2H6V2h-.3L5.5 2.3 5.2 2zm2 0v.5h.7l-.2.4.2.1v.1H7v-.1l.3-.4.2.4v.1h.3V3L7.7 2H8V2h-.3L7.5 2.3 7.2 2zm2 0v.5h.7l-.2.4.2.1v.1H9v-.1L9.3 2l.2.4v.1h.3V3L9.7 2H10V2h-.3L9.5 2.3 9.2 2zM0 3v.5h.7L.5 4l.2.1v.1H1V4l.3-.4.2.4v.1h.3V4L1.7 3H2V3h-.3l-.2.3L1.2 3zm2 0v.5h.7L2.5 4l.2.1v.1H3V4l.3-.4.2.4v.1h.3V4L3.7 3H4V3h-.3L3.5 3.3 3.2 3zm2 0v.5h.7L4.5 4l.2.1v.1H5V4l.3-.4.2.4v.1h.3V4L5.7 3H6V3h-.3L5.5 3.3 5.2 3zm2 0v.5h.7L6.5 4l.2.1v.1H7V4l.3-.4.2.4v.1h.3V4L7.7 3H8V3h-.3L7.5 3.3 7.2 3zm2 0v.5h.7L8.5 4l.2.1v.1H9V4l.3-.4.2.4v.1h.3V4L9.7 3H10V3h-.3L9.5 3.3 9.2 3zM0 4v.5h.7L.5 5l.2.1v.1H1V5l.3-.4.2.4v.1h.3V5L1.7 4H2V4h-.3L1.5 4.3 1.2 4zm2 0v.5h.7L2.5 5l.2.1v.1H3V5l.3-.4.2.4v.1h.3V5L3.7 4H4V4h-.3L3.5 4.3 3.2 4zm2 0v.5h.7L4.5 5l.2.1v.1H5V5l.3-.4.2.4v.1h.3V5L5.7 4H6V4h-.3L5.5 4.3 5.2 4zm2 0v.5h.7L6.5 5l.2.1v.1H7V5l.3-.4.2.4v.1h.3V5L7.7 4H8V4h-.3L7.5 4.3 7.2 4zm2 0v.5h.7L8.5 5l.2.1v.1H9V5l.3-.4.2.4v.1h.3V5L9.7 4H10V4h-.3L9.5 4.3 9.2 4zm-9 1v.5h.7L.5 6l.2.1v.1H1V6l.3-.4.2.4v.1h.3V6L1.7 5H2V5h-.3L1.5 5.3 1.2 5zm2 0v.5h.7L2.5 6l.2.1v.1H3V6l.3-.4.2.4v.1h.3V6L3.7 5H4V5h-.3L3.5 5.3 3.2 5zm2 0v.5h.7L4.5 6l.2.1v.1H5V6l.3-.4.2.4v.1h.3V6L5.7 5H6V5h-.3L5.5 5.3 5.2 5zm2 0v.5h.7L6.5 6l.2.1v.1H7V6l.3-.4.2.4v.1h.3V6L7.7 5H8V5h-.3L7.5 5.3 7.2 5zm2 0v.5h.7L8.5 6l.2.1v.1H9V6l.3-.4.2.4v.1h.3V6L9.7 5H10V5h-.3L9.5 5.3 9.2 5z" />
      </g>
    </g>
  </svg>
);
