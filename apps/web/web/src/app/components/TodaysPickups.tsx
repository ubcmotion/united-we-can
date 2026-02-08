"use client"
import React, { useEffect, useState } from 'react'
import supabase from '../supabase/supabaseApi';

interface Styles {
  mainContainer: React.CSSProperties;
  topContainer: React.CSSProperties;
  header: React.CSSProperties;
  daySelector: React.CSSProperties;
  record: React.CSSProperties;
}

const styles: Styles = {
  mainContainer: {
    fontFamily: "'Inter', sans-serif",
  },
  topContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
  },
  header: {
    fontSize: '1.25rem',
    fontWeight: 700,
  },
  daySelector: {
    justifyContent: 'space-between',
    gap: '1rem',
    height: '30px',
    border: '1px solid #000',
    borderRadius: '20px',
    padding: '6px 15px',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    fontSize: '18px',
  },
  record: {
    fontSize: '18px',
    justifyContent: 'space-between',
    gap: '10px',
    display: 'flex',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
};

type PickupRecord = {
  id: string;
  name: string;
  type: string;
  day: string;
  phone: string;
  status: React.ReactNode;
};

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
export default function TodaysPickups() {
  const [data, setData] = useState<PickupRecord[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const load = async () => {
        setLoading(true);
        const { data, error } = await supabase
        .from('pickups')
        .select(`
            id,
            pickup_requests!request_id (
                requested_date,
                status,
                users!customer_id (
                    full_name,
                    phone
                )
            )
        `);

        if (error) {
            console.error(error);
            setLoading(false);
            return;
        }  

        const rows = (data ?? []).map(p => {
            const req = Array.isArray(p.pickup_requests)
                ? p.pickup_requests[0]
                : p.pickup_requests;

            const usr = Array.isArray(req?.users) ? req.users[0] : req?.users;

            return {
                id: p.id, // keep as string if it’s a UUID
                name: usr?.full_name ?? 'Unknown',
                type: 'Regular',
                day: req.requested_date ?? '',
                phone: usr?.phone ?? 'Unknown',
                status: req.status,
            };
        });

        console.log(rows)
        setData(rows);
        setLoading(false);
    };
    load();
    }, []);

  return (
    <div style={styles.mainContainer} className='flex flex-col items-stretch max-w-max gap-4 bg-white p-8 rounded-2xl shadow-md'>
      <div style={styles.topContainer}>
        <h1 style={styles.header}>Today&apos;s Pickups</h1>
        <div className="hidden md:flex" style={styles.daySelector}>
          {weekDays.map((item) => (
            <div key={`pills_${item}`}>{item}</div>
          ))}
        </div>
        <select className='block md:hidden'>
          <option value={""}>No filter</option>
          {weekDays.map((item) => (
            <option key={`dd_${item}`} value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className='bg-neutral-100 rounded-2xl py-2 px-4'>
        <div className='overflow-x-auto'>
          <table className='whitespace-nowrap'>
            <thead className='border-b border-neutral-600'>
              <tr className='*:px-4 *:py-2'>
                <td>Pickup ID</td>
                <td>Customer</td>
                <td>Type</td>
                <td>Scheduled</td>
                <td>Client Contact</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
                {loading && <div>Loading...</div>}
              {data.map((record) => (
                <tr key={record.id} className='*:px-4 *:py-2'>
                  <td>{record.id}</td>
                  <td>{record.name}</td>
                  <td>{record.type}</td>
                  <td>{record.day}</td>
                  <td>{record.phone}</td>
                  <td>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}