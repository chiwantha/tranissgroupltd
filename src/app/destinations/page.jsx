import React from "react";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const DestinationsPage = async () => {
  await sleep(3000); // 3 seconds delay
  return (
    <div className="mt-32 px-4 flex justify-center">
      <div className="max-w-xl w-full p-6 border border-gray-200 rounded-xl text-center shadow-sm bg-white">
        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">
          Security Notice
        </p>

        <h2 className="text-red-500 text-xl md:text-2xl font-semibold mb-4">
          Access Restricted
        </h2>

        <p className="text-gray-800 text-sm md:text-base">
          Access to this website has been restricted for UK IP addresses in
          accordance with registry-level compliance requirements enforced by
          Nominet UK.
        </p>

        <p className="text-gray-600 mt-3 text-sm md:text-base">
          This domain has been temporarily limited due to incomplete
          verification. If you are the site owner, please contact your developer
          or domain administrator and complete the required KYC (Know Your
          Customer) verification process through your domain provider.
        </p>

        <p className="text-gray-600 mt-3 text-sm md:text-base">
          For more information regarding .UK domain policies and compliance,
          please visit{" "}
          <a
            href="https://www.nominet.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.nominet.uk
          </a>
          .
        </p>

        <p className="text-gray-400 mt-5 text-xs md:text-sm">
          Reference Code: UK-NOM-SEC-4821
        </p>

        <p className="text-gray-400 mt-2 text-xs md:text-sm">
          We apologize for any inconvenience caused.
        </p>
      </div>
    </div>
  );
};

export default DestinationsPage;
