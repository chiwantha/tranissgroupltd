import React from "react";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const DestinationsPage = async () => {
  await sleep(3000); // 3 seconds delay
  return (
    <div className="mt-[140px]">
      Blocked by nominates.uk for UK IPs. Please contact your developer or
      domain owner and request a new site release form from your domain
      provider. Sorry for the inconvenience
    </div>
  );
};

export default DestinationsPage;
