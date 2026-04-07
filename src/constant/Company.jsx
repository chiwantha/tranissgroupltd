import { CgWebsite } from "react-icons/cg";
import {
  FaBarcode,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaBuildingFlag } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

export const contact_info = [
  {
    title: "Phone",
    value: `00447570779744`,
    icon: <FaPhoneAlt />,
  },
  {
    title: `WhatsApp`,
    value: `00447570779744`,
    icon: <IoLogoWhatsapp />,
  },
  {
    title: `Address`,
    value: `89, Pym Court, Cromwell Road, Cambridge, CB1 3FB`,
    icon: <FaMapMarkerAlt />,
  },
  {
    title: `Mail`,
    value: `info@tranissgroupltd.uk`,
    icon: <FaEnvelope />,
  },
  {
    title: `Website`,
    value: `www.tranissgroupltd.uk`,
    icon: <CgWebsite />,
  },
  {
    title: `Registered in `,
    value: `England & Wales`,
    icon: <FaBuildingFlag />,
  },
  {
    title: `Company Reg No. `,
    value: `16941180`,
    icon: <FaBarcode />,
  },
];

export const services = [
  {
    name: "Travel Agency Services",
    slug: "/destinations",
    desc: "Planning, booking, and arranging travel services including accommodations, tours, and transportation for individuals and corporate clients.",
    image: `/services/travel.png`,
    state: 1,
  },
  {
    name: "Management Consultancy",
    slug: null,
    desc: "Providing expert advice to organizations to improve business operations, strategy, and overall efficiency.",
    image: `/services/management.png`,
    state: 1,
  },
  // {
  //   name: "Non-Specialised Wholesale Trade",
  //   slug: "non-specialised-wholesale-trade",
  //   desc: "Engaging in the wholesale distribution of a wide range of goods across various industries.",
  //   image: `/services/wholesale.png`,
  //   state: 0,
  // },
  // {
  //   name: "Online Retail & Mail Order",
  //   slug: "online-retail-mail-order",
  //   desc: "Retail sales through online platforms and mail order services, offering convenience and accessibility to customers.",
  //   image: `/services/mail.png`,
  //   state: 0,
  // },
];
