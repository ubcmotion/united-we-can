import Link from 'next/link'
import TodaysPickups from './todays-pickups'
 

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <TodaysPickups/>
    </div>
    
  )
}