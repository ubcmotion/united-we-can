import Link from 'next/link'
import TodaysPickups from './todays-pickups'
import TableView from './components/TableView'
 
const titles = ["Customer ID", 'Name', 'Type', "Scheduled", 'Client Contact', 'Status']
const tableRecords = [
  {
    id: 1203,
    name: "Mary Johnson",
    type: "Regular",
    day: "Monday",
    phone: "123-456-7890",
    status: "Pending"
  },
  {
    id: 1204,
    name: "Mary Johnson",
    type: "On call",
    day: "Monday",
    phone: "123-456-7890",
    status: "Pending"
  },
  {
    id: 1205,
    name: "Mary Johnson",
    type: "Regular",
    day: "Monday",
    phone: "123-456-7890",
    status: "Pending"
  },
  {
    id: 1206,
    name: "Mary Johnson",
    type: "Regular",
    day: "Monday",
    phone: "123-456-7890",
    status: "Pending"
  },
  {
    id: 1207,
    name: "Mary Johnson",
    type: "Regular",
    day: "Monday",
    phone: "123-456-7890",
    status: "Pending"
  }
];

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <TodaysPickups/>
      <TableView rowTitles={titles}
      records = {tableRecords}>

      </TableView>
    </div>
    
  )
}