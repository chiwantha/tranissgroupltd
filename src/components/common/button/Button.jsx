import Link from "next/link";

const Button = ({ title, pd, mg, bg, fg, wfull, click, link }) => {
  const baseStyle = `transition-all duration-300  rounded-lg text-center ${pd ? pd : `px-4 py-1`} ${wfull ? `w-full` : `w-fit`} ${fg ? fg : "text-lg font-medium"}
        ${bg ? bg : "bg-green-400 text-white hover:bg-green-500"}`;
  if (link) {
    return (
      <Link className={baseStyle} href={link || "#"}>
        {title || "Button"}
      </Link>
    );
  } else {
    return (
      <button className={baseStyle} onClick={click}>
        {title || "Button"}
      </button>
    );
  }
};

export default Button;
