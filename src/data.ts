import userfriends from "./assets/user-friends.svg";
import user from "./assets/users.svg";
import sack from "./assets/sack.svg";
import handshake from "./assets/handshake-regular.svg";
import piggy from "./assets/piggy-bank.svg";
import sackhand from "./assets/sackhand.svg";
import usercheck from "./assets/user-check.svg";
import usertimes from "./assets/user-times.svg";
import briefcase from "./assets/briefcase.svg";
import npbank from "./assets/np_bank.svg";
import coins from "./assets/coins-solid.svg";
import icons from "./assets/icon.svg";
import galaxy from "./assets/galaxy.svg";
import usercog from "./assets/user-cog.svg";
import scroll from "./assets/scroll.svg";
import chartbar from "./assets/chart-bar.svg";
import sliders from "./assets/sliders-h.svg";
import badge from "./assets/badge-percent.svg";
import clip from "./assets/clipboard-list.svg";

import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";

export const sidebarList = [
  [
    { img: userfriends, name: "User" },
    { img: user, name: "Guarantors" },
    { img: sack, name: "Loans" },
    { img: handshake, name: "Decision Models" },
    { img: piggy, name: "Savings" },
    { img: sackhand, name: "Loan Requests" },
    { img: usercheck, name: "Whilelist" },
    { img: usertimes, name: "Karma" },
  ],
  [
    { img: briefcase, name: "Organization" },
    { img: sackhand, name: "Loan Products" },
    { img: npbank, name: "Savings Products" },
    { img: coins, name: "Fees and Charges" },
    { img: icons, name: "Transactions" },
    { img: galaxy, name: "Services" },
    { img: usercog, name: "Service Account" },
    { img: scroll, name: "Settlements" },
    { img: chartbar, name: "Reports" },

  ],
  [
    { img: sliders, name: "Preferences" },
    { img: badge, name: "Fees and Pricing" },
    { img: clip, name: "Audit Logs" },
    
  ]
];

export const usersData = [
  { name: `USERS`, icon: icon1, num: 2453 },
  { name: `ACTIVE USERS`, icon: icon2, num: 2453 },
  { name: `USERS  WITH LOANS`, icon: icon3, num: 12453 },
  { name: `USERS  WITH SAVINGS`, icon: icon4, num: 102453 },
];

export const userTableHeader = [
  `ORGANIZATION`,
  `USERNAME`,
  `PHONE NUMBER`,
  `DATE JOINED`,
  `STATUS`,
];