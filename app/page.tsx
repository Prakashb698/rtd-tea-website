import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 p-6">
      {/* Header / Navbar */}
<header className="w-full bg-white shadow-sm py-4 mb-10">
  <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
    <h1 className="text-2xl font-bold text-green-700">
      RTD Tea 🧋
    </h1>
    <nav className="space-x-6 text-gray-700 font-medium">
      <a href="#" className="hover:text-green-600">Home</a>
      <a href="#products" className="hover:text-green-600">Products</a>
      <a href="#contact" className="hover:text-green-600">Contact</a>
    </nav>
  </div>
</header>


      
     <h1 id="products" className="text-3xl font-bold text-center text-green-700 mb-2">
  Our Products
</h1>

<p className="text-center text-gray-600 mb-8">
  Refreshing Ready-to-Drink Tea made for everyday enjoyment
</p>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        
        {/* Product 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <Image
            src="/fruit.jpg"
            alt="Lemon Iced Tea"
            width={300}
            height={200}
            className="rounded-xl mx-auto"
          />
          <h2 className="text-xl font-bold text-green-700 mt-4">
            Lemon Iced Tea
          </h2>
          <p className="text-gray-600 mt-2">
            Refreshing lemon flavored RTD tea.
          </p>
          <p className="text-lg font-semibold text-green-800 mt-3">
            $2.99
          </p>
          <a
            href="https://wa.me/15551234567?text=Hello%20I%20want%20to%20order%20Lemon%20Iced%20Tea"
            target="_blank"
            className="mt-4 block bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Order on WhatsApp
          </a>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <Image
            src="/fruit.jpg"
            alt="Peach Iced Tea"
            width={300}
            height={200}
            className="rounded-xl mx-auto"
          />
          <h2 className="text-xl font-bold text-green-700 mt-4">
            Peach Iced Tea
          </h2>
          <p className="text-gray-600 mt-2">
            Smooth and sweet peach flavored RTD tea.
          </p>
          <p className="text-lg font-semibold text-green-800 mt-3">
            $3.49
          </p>
          <a
            href="https://wa.me/15551234567?text=Hello%20I%20want%20to%20order%20Peach%20Iced%20Tea"
            target="_blank"
            className="mt-4 block bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Order on WhatsApp
          </a>
        </div>

      </div>
      {/* About Section */}
<div className="max-w-3xl mx-auto mt-16 bg-white rounded-2xl shadow-md p-6 text-center">
  <h2 className="text-2xl font-bold text-green-700 mb-4">
    About Our RTD Tea 🍃
  </h2>
  <p className="text-gray-600 leading-relaxed">
    Our Ready-to-Drink Tea is crafted using premium tea leaves and natural
    flavors. We focus on freshness, quality, and great taste so you can enjoy
    a refreshing tea anytime, anywhere.
  </p>
</div>
{/* Contact Section */}
<div id="contact" className="max-w-3xl mx-auto mt-16 mb-10 bg-green-100 rounded-2xl p-6 text-center">
  <h2 className="text-2xl font-bold text-green-800 mb-4">
    Contact Us ☎️
  </h2>

  <p className="text-gray-700 mb-2">
    Have questions or want to place an order?
  </p>
  <p className="text-gray-700">
    📞 Phone / WhatsApp: <strong>Available on request</strong>
  </p>
</div>
{/* Footer */}
<footer className="mt-20 py-6 bg-white border-t text-center text-gray-600">
  <p className="text-sm">
    © {new Date().getFullYear()} RTD Tea. All rights reserved.
  </p>
</footer>


    </main>
  );
}
