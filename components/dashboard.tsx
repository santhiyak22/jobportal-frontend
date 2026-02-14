export default function DashboardPage() {
  return (
    <div>
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Company Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Total Jobs</h3>
          <p className="text-xl font-bold">24</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Active Jobs</h3>
          <p className="text-xl font-bold">18</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Applications</h3>
          <p className="text-xl font-bold">120</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Shortlisted</h3>
          <p className="text-xl font-bold">35</p>
        </div>
      </div>

      {/* Recent Jobs Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Job Listings</h2>

        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Job Title</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Applicants</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-3">Frontend Developer</td>
              <td className="p-3">Chennai</td>
              <td className="p-3 text-green-600">Active</td>
              <td className="p-3">25</td>
              <td className="p-3 space-x-2">
                <button className="text-blue-600">View</button>
                <button className="text-yellow-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>

            <tr className="border-t">
              <td className="p-3">Backend Developer</td>
              <td className="p-3">Coimbatore</td>
              <td className="p-3 text-gray-500">Closed</td>
              <td className="p-3">10</td>
              <td className="p-3 space-x-2">
                <button className="text-blue-600">View</button>
                <button className="text-yellow-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}