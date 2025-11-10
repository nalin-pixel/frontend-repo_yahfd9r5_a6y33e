import { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  service_type: 'Standard Cleaning',
  preferred_date: '',
  preferred_time: '',
  bedrooms: '',
  bathrooms: '',
  notes: '',
}

export default function BookingForm() {
  const [form, setForm] = useState(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setResult(null)

    try {
      const payload = {
        ...form,
        bedrooms: form.bedrooms === '' ? null : Number(form.bedrooms),
        bathrooms: form.bathrooms === '' ? null : Number(form.bathrooms),
        preferred_time: form.preferred_time || null,
        notes: form.notes || null,
      }

      const res = await fetch(`${baseUrl}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok || !data?.success) throw new Error(data?.detail || 'Failed to submit')
      setResult({ type: 'success', message: 'Thanks! Your request has been received. We will contact you shortly.' })
      setForm(initialState)
    } catch (err) {
      setResult({ type: 'error', message: err.message || 'Something went wrong. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div id="book" className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Request a Quote</h3>
      <p className="text-gray-600 mb-6">Tell us about your home and preferred date. We’ll confirm availability promptly.</p>

      {result && (
        <div className={`mb-4 p-3 rounded border ${result.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
          {result.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
          <input required name="name" value={form.name} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="jane@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input required name="phone" value={form.phone} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(555) 123-4567" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input required name="address" value={form.address} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="123 Main St, City" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service type</label>
          <select name="service_type" value={form.service_type} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Standard Cleaning</option>
            <option>Deep Cleaning</option>
            <option>Move In/Out</option>
            <option>Office Cleaning</option>
            <option>Post-Construction</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred date</label>
          <input required type="date" name="preferred_date" value={form.preferred_date} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred time</label>
          <input name="preferred_time" value={form.preferred_time} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Morning / Afternoon" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
            <input type="number" min="0" name="bedrooms" value={form.bedrooms} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
            <input type="number" min="0" name="bathrooms" value={form.bathrooms} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Any special instructions" />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button disabled={submitting} type="submit" className="inline-flex justify-center items-center px-5 py-2.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-60">
            {submitting ? 'Submitting...' : 'Request Quote'}
          </button>
          <span className="text-sm text-gray-500">We’ll never share your info.</span>
        </div>
      </form>
    </div>
  )
}
