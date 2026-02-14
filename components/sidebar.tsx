"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-black text-white p-5">
      <h2 className="text-xl font-bold mb-6">My Dashboard</h2>

      <ul className="space-y-4">
        <li>
          <Link href="/dashboard">🏠 Home</Link>
        </li>
        <li>
          <Link href="/dashboard/users">👤 Users</Link>
        </li>
        <li>
          <Link href="/dashboard/jobs">💼 Jobs</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">⚙️ Settings</Link>
        </li>
      </ul>
    </div>
  );
}