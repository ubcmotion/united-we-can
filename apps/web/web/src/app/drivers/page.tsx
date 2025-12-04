import DriversTable from "../components/DriversTable";

export default function Drivers() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold ml-0.9">Drivers</h1>
      <DriversTable />
    </div>
  );
}
