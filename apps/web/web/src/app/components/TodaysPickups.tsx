import React from 'react'

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

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
export default function TodaysPickups() {
  const records = [
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
    },
    {
        id: 1208,
        name: "Mary Johnson",
        type: "Regular",
        day: "Monday",
        phone: "123-456-7890",
        status: "Pending"
      },
      {
        id: 1209,
        name: "Mary Johnson",
        type: "On call",
        day: "Monday",
        phone: "123-456-7890",
        status: "Pending"
      },
      {
        id: 1210,
        name: "Mary Johnson",
        type: "Regular",
        day: "Monday",
        phone: "123-456-7890",
        status: "Pending"
      },
      {
        id: 1211,
        name: "Mary Johnson",
        type: "Regular",
        day: "Monday",
        phone: "123-456-7890",
        status: "Pending"
      },
      {
        id: 1212,
        name: "Mary Johnson",
        type: "Regular",
        day: "Monday",
        phone: "123-456-7890",
        status: "Pending"
      },
      {
        id: 1213,
        name: "Mary Johnson",
        type: "Regular",
        day: "Monday",
        phone: "123-456-7890",
        status: "Pending"
      },
      {
        id: 1214,
        name: "Mary Johnson",
        type: "Regular",
        day: "Monday",
        phone: "123-456-7890",
        status: "Pending"
      },
      {
        id: 1215,
        name: "Mary Johnson",
        type: "Regular",
        day: "Monday",
        phone: "123-456-7890",
        status: "Pending"
      },
  ];

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
              {records.map((record) => (
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