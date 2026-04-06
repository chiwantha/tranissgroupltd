import WidthWrap from "@/components/root/layout/widthwrap/WidthWrap";
import PageTop from "@/components/root/sections/pagetop/PageTop";
import { contact_info } from "@/constant/Company";

const ContactCard = ({ title, value }) => {
  return (
    <div className="flex flex-col min-h-10 p-4 md:p-6 border-b border-theme-light-blue hover:bg-gray-100 transition-all duration-300">
      <span className="text-sm text-gray-700 font-semibold">{title}</span>
      <span className="text-lg font-light text-gray-500">{value}</span>
    </div>
  );
};

const ContactUsPAge = async () => {
  return (
    <div className="flex flex-col">
      <PageTop />
      <div className="py-12 md:py-20 ">
        <WidthWrap>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="rounded-xl overflow-hidden min-h-100  md:col-span-2 col-span-1">
              <iframe
                src="https://www.google.com/maps?q=89%20Pym%20Court%20Cromwell%20Road%20Cambridge&output=embed"
                className="w-full h-full min-h-100 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="grid md:grid-cols-1 sm:grid-cols-2 rounded-xl overflow-hidden">
              {contact_info.map((contact, index) => (
                <ContactCard
                  key={index}
                  title={contact.title}
                  value={contact.value}
                />
              ))}
            </div>
          </div>
        </WidthWrap>
      </div>
    </div>
  );
};

export default ContactUsPAge;
