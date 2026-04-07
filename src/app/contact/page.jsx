import WidthWrap from "@/components/root/layout/widthwrap/WidthWrap";
import PageTop from "@/components/root/sections/pagetop/PageTop";
import { contact_info } from "@/constant/Company";

// Metadata for SEO
export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Traniss Group Ltd, your UK-based travel experts for Sri Lanka tours, transport, accommodation, and complete travel planning services.",
  alternates: {
    canonical: "https://tranissgroupltd.uk/contact",
  },
  openGraph: {
    title: "Contact Us | Traniss Group Ltd",
    description:
      "Get in touch with Traniss Group Ltd, your UK-based travel experts for Sri Lanka tours, transport, accommodation, and complete travel planning services.",
    url: "https://tranissgroupltd.uk/contact",
    siteName: "Traniss Group Ltd",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Traniss Group Ltd",
    description:
      "Get in touch with Traniss Group Ltd, your UK-based travel experts for Sri Lanka tours, transport, accommodation, and complete travel planning services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ContactCard = ({ title, value }) => {
  return (
    <div
      className="flex flex-col min-h-10 p-4 md:p-6 border-b border-theme-light-blue hover:bg-gray-100 transition-all duration-300"
      itemProp="contactPoint"
      itemScope
      itemType="https://schema.org/ContactPoint"
    >
      <span className="text-sm text-gray-700 font-semibold">{title}</span>
      <span className="text-lg font-light text-gray-500">{value}</span>
    </div>
  );
};

const ContactUsPage = async () => {
  return (
    <div
      className="flex flex-col"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <PageTop />
      <main className="py-12 md:py-20">
        <WidthWrap>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {/* Google Map */}
            <div className="rounded-xl overflow-hidden min-h-100 md:col-span-2 col-span-1">
              <iframe
                src="https://www.google.com/maps?q=89%20Pym%20Court%20Cromwell%20Road%20Cambridge&output=embed"
                className="w-full h-full min-h-100 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Traniss Group Ltd Location Map"
              ></iframe>
            </div>

            {/* Contact Info */}
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
      </main>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Traniss Group Ltd",
            url: "https://tranissgroupltd.uk",
            logo: "https://tranissgroupltd.uk/favicon.png",
            contactPoint: contact_info.map((c) => ({
              "@type": "ContactPoint",
              telephone: c.title.toLowerCase().includes("phone")
                ? c.value
                : undefined,
              email: c.title.toLowerCase().includes("email")
                ? c.value
                : undefined,
              contactType: c.title,
            })),
            sameAs: [
              "https://www.facebook.com/tranissgroupltd",
              "https://www.linkedin.com/company/tranissgroupltd",
            ],
          }),
        }}
      />
    </div>
  );
};

export default ContactUsPage;
