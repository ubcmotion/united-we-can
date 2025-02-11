import React from 'react';

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
    width: '1100px',
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
    height: '300px',
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
  return (
    <div style={styles.mainContainer}>
      <div style={styles.topContainer}>
        <h1 style={styles.header}>Today&apos;s Pickups</h1>
        <div style={styles.daySelector}>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
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
        <div style={styles.record}>
          <div>1203</div>
          <div>Mary Johnson</div>
          <div>Regular</div>
          <div>Monday</div>
          <div>123-456-7890</div>
          <div>Status</div>
        </div>
        <div style={styles.record}>
          <div>1204</div>
          <div>Mary Johnson</div>
          <div>On call</div>
          <div>Monday</div>
          <div>123-456-7890</div>
          <div>Status</div>
        </div>
        <div style={styles.record}>
          <div>1205</div>
          <div>Mary Johnson</div>
          <div>Regular</div>
          <div>Monday</div>
          <div>123-456-7890</div>
          <div>Status</div>
        </div>
        <div style={styles.record}>
          <div>1206</div>
          <div>Mary Johnson</div>
          <div>Regular</div>
          <div>Monday</div>
          <div>123-456-7890</div>
          <div>Status</div>
        </div>
        <div style={styles.record}>
          <div>1207</div>
          <div>Mary Johnson</div>
          <div>Regular</div>
          <div>Monday</div>
          <div>123-456-7890</div>
          <div>Status</div>
        </div>
      </div>
    </div>
  );
}