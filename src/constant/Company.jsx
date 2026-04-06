import { CgWebsite } from "react-icons/cg";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
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
];
