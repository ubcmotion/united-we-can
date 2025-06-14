import TodaysPickups from '@/app/components/TodaysPickups';
import TableView from '@/app/components/TableView';
import TopBar from '@/app/components/TopBar';

export default function Page() {
  return (
    <div>
      <TopBar />
      <h1>Home</h1>
      <TodaysPickups />
      <TableView tableType='default'/>
    </div>
  );
}
