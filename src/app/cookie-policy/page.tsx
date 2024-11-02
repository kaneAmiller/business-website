import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiePolicy(): JSX.Element {
  return (
    <div>
      {/* SEO Metadata to prevent indexing */}
      <Head>
        <title>Cookie Policy | KM Project Solutions</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />

      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-4">Cookie Policy</h1>
        <p>
          This Cookie Policy explains what cookies are, how we use them, and your options regarding cookies.
        </p>

        <h2 className="text-2xl mt-4">What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device by websites you visit. They are widely used to make websites work more efficiently and to provide information to the site owners.
        </p>

        <h2 className="text-2xl mt-4">How We Use Cookies</h2>
        <p>
          We use cookies for the following purposes:
        </p>
        <ul className="list-disc pl-6">
          <li><strong>Necessary Cookies:</strong> These cookies are essential to provide you with services available on our website.</li>
          <li><strong>Analytical Cookies:</strong> We use Google Analytics to understand how users interact with our website and improve the user experience.</li>
          <li><strong>Security Cookies:</strong> These cookies are used by Google reCAPTCHA to prevent spam and abuse.</li>
        </ul>

        <h2 className="text-2xl mt-4">Your Choices Regarding Cookies</h2>
        <p>
          You can manage cookies by adjusting your browser settings. Please note that disabling cookies may impact the functionality of this site.
        </p>
      </main>

      <Footer />
    </div>
  );
}
