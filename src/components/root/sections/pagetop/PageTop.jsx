"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import WidthWrap from "../../layout/widthwrap/WidthWrap";

const PageTop = () => {
  const pathName = usePathname();
  const segment = pathName.split("/")[1] || "home";

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full h-full min-h-100 bg-black">
        <Image
          src={`/pagetop/${segment}.png`}
          alt={`${pathName}.png`}
          fill
          className="object-center object-cover z-10"
          sizes="100vw"
          loading="eager"
        />

        <div className="bg-black/10 w-full h-full absolute z-20" />

        <div className="absolute bottom-0 w-full z-30">
          <WidthWrap>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 z-50 w-full">
              <div className="hidden lg:block bg-transparent "></div>
              <div className="hidden sm:block bg-transparent "></div>
              <div className="relative bg-white min-h-22.5 text-center capitalize font-hnd text-5xl flex items-center justify-center rounded-t-xl">
                <Image
                  src={`/assets/perahara.png`}
                  alt="peraharasl.png"
                  fill
                  className="object-cover object-bottom z-30 mask-t-from-0%  opacity-20 "
                />
                <span className="absolute z-40 text-theme-light-blue text-shadow-sm font-bold">
                  {segment}
                </span>
              </div>
            </div>
          </WidthWrap>
        </div>
      </div>
      {/* <div className=""></div> */}
    </div>
  );
};

export default PageTop;
