import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Blog | KM Project Solutions</title>
        <meta
          name="description"
          content="Insights and tips from KM Project Solutions, covering IT support, project management, and web development for small businesses."
        />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg mb-8">
          Explore our latest articles on IT solutions, project management, and
          web development tailored for small businesses.
        </p>

        {/* Centered Blog Post Cards */}
        <div className="blog-posts-grid">
          {/* Blog Post 1 */}
          <div className="blog-card">
            <h2 className="text-2xl font-semibold mb-2">
              Top IT Solutions for Small Businesses
            </h2>
            <p className="text-gray-700 mb-4">
              Learn the essential IT services every small business should
              consider to stay competitive and secure.
            </p>
            <Link
              href="/blog/it-solutions-for-small-businesses"
              className="text-blue-600 hover:underline"
            >
              Read More
            </Link>
          </div>

          {/* Additional blog posts */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
