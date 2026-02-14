import DashboardPage from "@/components/dashboard";
import Header from "@/components/Header";
import Sidebar from "@/components/sidebar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col px-4">
        <Header />
      <DashboardPage/>
      </div>
    </div>
  );
}