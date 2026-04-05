import React from "react";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const AboutUsPage = async () => {
  await sleep(3000); // 3 seconds delay
  return (
    <div className="mt-[140px]">
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; border: 1px solid #e5e5e5; border-radius: 8px; text-align: center;">
        <h2 style="color: #d9534f; margin-bottom: 15px;">Access Restricted</h2>

        <p style="font-size: 16px; color: #333;">
          Access to this website has been restricted for UK IP addresses by
          Nominet UK.
        </p>

        <p style="font-size: 15px; color: #555; margin-top: 10px;">
          If you are the site owner, please contact your developer or domain
          administrator and complete the required KYC (Know Your Customer)
          verification through your domain provider to restore access.
        </p>

        <p style="font-size: 14px; color: #999; margin-top: 20px;">
          We apologize for any inconvenience caused.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
