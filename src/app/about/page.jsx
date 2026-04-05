import React from "react";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const AboutUsPage = async () => {
  await sleep(3000); // 3 seconds delay
  return <div>AboutUsPage</div>;
};

export default AboutUsPage;
