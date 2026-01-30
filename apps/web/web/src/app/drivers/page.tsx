import DriversTable from "../components/DriversTable";

export default function Drivers() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex h-full flex-col gap-4 overflow-y-auto hide-scrollbar">
        <h1 className="text-2xl font-bold ml-1">Drivers</h1>
        <DriversTable />
      </div>
    </div>
  );
}
