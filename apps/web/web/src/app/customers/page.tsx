import CustomersTable from "../components/CustomersTable";

export default function Customers() {
  return (
    <div className="flex flex-col gap-4 h-screen overflow-auto">
      <h1 className="text-2xl font-bold ml-0.9">Customers</h1>
      <CustomersTable />
    </div>
  );
}
