import React from 'react'

interface Styles {
  mainContainer: React.CSSProperties;
  topContainer: React.CSSProperties;
  header: React.CSSProperties;
  daySelector: React.CSSProperties;
  scrollableDiv: React.CSSProperties;
  record: React.CSSProperties;
}

const styles: Styles = {
  mainContainer: {
    backgroundColor: '#F5F5F5',
    padding: '30px',
    borderRadius: '20px',
    fontFamily: "'Inter', sans-serif",
    width: '100%',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
  },
  topContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
  },
  header: {
    fontSize: '34px',
  },
  daySelector: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    height: '30px',
    border: '1px solid #000',
    borderRadius: '20px',
    padding: '6px 15px',
    alignItems: 'center',
    width: '519px',
    backgroundColor: '#FFFFFF',
    fontSize: '18px',
  },
  scrollableDiv: {
    backgroundColor: '#FFFFFF',
    padding: '20px',
    borderRadius: '20px',
    overflowY: 'auto' as const, // Explicitly type 'auto' as a constant
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

export default function TodaysPickups() {

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
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
      }
  ];

  return (
    <div style={styles.mainContainer}>
      <div style={styles.topContainer}>
        <h1 style={styles.header}>Today&apos;s Pickups</h1>
        <div style={styles.daySelector}>
          {weekDays.map((item, index) =>(
            <div key={index}>{item}</div>
            ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 15px', fontSize: '18px' }}>
        <h3>Pickup ID</h3>
        <h3>Customer</h3>
        <h3>Type</h3>
        <h3>Scheduled</h3>
        <h3>Client Contact</h3>
        <h3>Status</h3>
      </div>
      <div style={styles.scrollableDiv}>
        {records.map((record) => (
          <div style={styles.record} key={record.id}>
            <div>{record.id}</div>
            <div>{record.name}</div>
            <div>{record.type}</div>
            <div>{record.day}</div>
            <div>{record.phone}</div>
            <div>{record.status}</div>
        </div>
        ))}
      </div>
    </div>
  );
}