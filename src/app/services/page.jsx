import ServicesGrid from "@/components/root/grid/ServicesGrid";
import WidthWrap from "@/components/root/layout/widthwrap/WidthWrap";
import PageTop from "@/components/root/sections/pagetop/PageTop";

const ServicesPage = async () => {
  return (
    <div className="flex flex-col">
      <PageTop />
      <div className="py-12 md:py-20">
        <WidthWrap>
          <ServicesGrid />
        </WidthWrap>
      </div>
    </div>
  );
};

export default ServicesPage;
