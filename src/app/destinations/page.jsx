import DestinationGrid from "@/components/root/grid/DestinationGrid";
import WidthWrap from "@/components/root/layout/widthwrap/WidthWrap";
import PageTop from "@/components/root/sections/pagetop/PageTop";

const DestinationsPage = async () => {
  return (
    <div className="flex flex-col">
      <PageTop />
      <div className="py-12 md:py-20">
        <WidthWrap>
          <DestinationGrid header={false} />
        </WidthWrap>
      </div>
    </div>
  );
};

export default DestinationsPage;
