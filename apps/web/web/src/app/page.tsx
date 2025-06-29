import TopBar from '@/app/components/TopBar';
import TodaysPickups from '@/app/components/TodaysPickups'
import AddPickup from '@/app/components/AddPickup'


export default function Page() {
  return (
    <div>
      <TopBar />
      <h1>Home</h1>
      <TodaysPickups/>
      <AddPickup/>
    </div>
  );
}
