import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="mb-4">Could not find requested resource</p>
        <Link 
          href="/en" 
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 