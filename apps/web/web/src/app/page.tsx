import TodaysPickups from '@/app/components/TodaysPickups'
import AddPickup from '@/app/components/AddPickup'


export default function Page() {
  return (
    <>
      <h1>Home</h1>
      <div className='flex flex-col items-stretch max-w-min gap-4 m-auto'>
        <TodaysPickups/>
        <AddPickup/>
      </div>
    </>
  );
}
