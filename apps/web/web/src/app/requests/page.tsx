import Mapbox from '@/app/components/Mapbox';
import PickupsTable from '@/app/components/PickupsTable';

// TODO: replace with actual data
const locations = [
  {
    id: 1,
    name: "place 1",
    latitude: 49.2820,
    longitude: -123.1171
  },
  {
    id: 2,
    name: "place 2",
    latitude: 49.2870,
    longitude: -123.1119
  },
  {
    id: 3,
    name: "place 3",
    latitude: 49.2832,
    longitude: -123.1229
  },
  {
    id: 4,
    name: "place 4",
    latitude: 49.2910,
    longitude: -123.1342
  },
  {
    id: 5,
    name: "place 5",
    latitude: 49.2904,
    longitude: -123.1342
  }
];

export default function Requests() {
  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-2xl font-bold ml-0.9">Pickups</h1>
      <div className="flex-grow">
        <PickupsTable/>
        <Mapbox locations={locations} />
      </div>
    </div>
  );
}