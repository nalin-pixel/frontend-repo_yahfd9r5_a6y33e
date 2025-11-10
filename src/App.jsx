import BookingForm from './BookingForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <header className="sticky top-0 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-teal-500 text-white grid place-items-center font-bold">CB</div>
            <span className="text-xl font-semibold text-gray-800">Crystal Bright Cleaning</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#services" className="hover:text-teal-600">Services</a>
            <a href="#pricing" className="hover:text-teal-600">Pricing</a>
            <a href="#book" className="hover:text-teal-600">Book</a>
          </nav>
          <a href="#book" className="px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 text-sm">Get a Quote</a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-16">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Sparkling homes, stress-free days
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Professional, reliable cleaning services for homes and offices. Eco-friendly products, trusted pros, flexible scheduling.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#book" className="px-5 py-2.5 rounded-md bg-teal-600 text-white hover:bg-teal-700">Request a Quote</a>
              <a href="#services" className="px-5 py-2.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">See Services</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div>⭐ 4.9 average rating</div>
              <div>🧽 Fully insured</div>
              <div>🌿 Eco products</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 border">
            <img alt="Clean home" className="rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop" />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Standard Cleaning', desc: 'Regular tidy-up, dusting, vacuuming, mopping, kitchen & bathrooms.' },
              { title: 'Deep Cleaning', desc: 'Detailed attention, baseboards, inside appliances, behind furniture.' },
              { title: 'Move In/Out', desc: 'Top-to-bottom clean for a fresh start or smooth handover.' },
              { title: 'Office Cleaning', desc: 'Professional care for workspaces to keep teams healthy and productive.' },
              { title: 'Post-Construction', desc: 'Remove dust and debris for a ready-to-enjoy space.' },
              { title: 'Add-ons', desc: 'Inside fridge/oven, windows, laundry folding, dishes, and more.' },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl border p-5 shadow-sm">
                <h3 className="font-semibold text-lg text-gray-800">{s.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Simple pricing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Studio / 1 Bed', price: '$99+', features: ['1-2 hours', 'Kitchen + 1 bath', 'All supplies included'] },
              { name: '2-3 Bedrooms', price: '$149+', features: ['2-3 hours', 'Kitchen + 2 baths', 'All supplies included'] },
              { name: '4+ Bedrooms', price: '$199+', features: ['3-4 hours', 'Kitchen + 2-3 baths', 'All supplies included'] },
            ].map((p) => (
              <div key={p.name} className="bg-white rounded-xl border p-6 shadow-sm">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-lg text-gray-800">{p.name}</h3>
                  <span className="text-2xl font-bold text-teal-600">{p.price}</span>
                </div>
                <ul className="mt-3 text-sm text-gray-600 space-y-1 list-disc list-inside">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Booking */}
        <section>
          <BookingForm />
        </section>
      </main>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Crystal Bright Cleaning</div>
          <div className="flex gap-4">
            <a href="mailto:hello@crystalbright.com" className="hover:text-teal-600">hello@crystalbright.com</a>
            <a href="/test" className="hover:text-teal-600">System status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
