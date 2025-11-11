import TodaysPickups from '@/app/components/TodaysPickups'
import TotalPickups from '@/app/components/totalPickups'


export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <TotalPickups/>
      <TodaysPickups/>
    </div>
  );
}
