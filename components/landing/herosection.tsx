import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Build Your Dream Career 🚀</h1>
        <p className="text-lg mb-6 max-w-xl">
          Find jobs, add new and grow your career with our smart
          platform.
        </p>
        <div className="flex gap-4">
          <Link href="/login">
            <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold">
              Get Started
            </button>
          </Link>
          <Link href="/dashboard">
          <button className="border border-white px-6 py-3 rounded">
            Learn More
          </button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Features</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 shadow rounded bg-gray-50">
            <h3 className="font-bold text-xl mb-2">Smart Job Search</h3>
            <p>Filter jobs by skills, location, and preferences.</p>
          </div>

          <div className="p-6 shadow rounded bg-gray-50">
            <h3 className="font-bold text-xl mb-2">Easy Apply</h3>
            <p>Apply to jobs with one click and track status.</p>
          </div>

          <div className="p-6 shadow rounded bg-gray-50">
            <h3 className="font-bold text-xl mb-2">Dashboard</h3>
            <p>Manage profile, applications, and settings.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6">Create your account and explore opportunities</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold">
          Join Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center bg-gray-900 text-white">
        <p>© 2026 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
