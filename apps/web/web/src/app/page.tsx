import TodaysPickups from '@/app/components/TodaysPickups'
import TotalPickups from '@/app/components/totalPickups'


export default function Page() {
  return (
    <>
      <TopBar />
      <h1>Home</h1>
      <div className='flex flex-col items-stretch max-w-min gap-4 m-auto'>
        <TotalPickups/>
        <TodaysPickups/>
        <AddPickup/>
      </div>
    </>
  );
}
