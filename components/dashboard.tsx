export default function DashboardPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Company Dashboard</h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Job
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Total Jobs", value: 24 },
          { title: "Active Jobs", value: 18 },
          { title: "Applications", value: 120 },
          { title: "Shortlisted", value: 35 },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-gray-500">{item.title}</h3>
            <p className="text-2xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Job Section */}
      <div className="bg-white p-6 rounded-xl shadow">

        {/* Top Bar */}
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">
            Recent Job Listings
          </h2>

          <input
            type="text"
            placeholder="Search job..."
            className="border px-3 py-2 rounded"
          />
        </div>

        {/* Table */}
        <table className="w-full border rounded overflow-hidden">
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
            <tr className="border-t hover:bg-gray-50">
              <td className="p-3 font-medium">Frontend Developer</td>
              <td className="p-3">Chennai</td>
              <td className="p-3">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                  Active
                </span>
              </td>
              <td className="p-3">25</td>
              <td className="p-3 space-x-3">
                <button className="text-blue-600 hover:underline">
                  View
                </button>
                <button className="text-yellow-600 hover:underline">
                  Edit
                </button>
                <button className="text-red-600 hover:underline">
                  Delete
                </button>
              </td>
            </tr>

            <tr className="border-t hover:bg-gray-50">
              <td className="p-3 font-medium">Backend Developer</td>
              <td className="p-3">Coimbatore</td>
              <td className="p-3">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                  Closed
                </span>
              </td>
              <td className="p-3">10</td>
              <td className="p-3 space-x-3">
                <button className="text-blue-600 hover:underline">
                  View
                </button>
                <button className="text-yellow-600 hover:underline">
                  Edit
                </button>
                <button className="text-red-600 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}
