import React from 'react'

interface Styles {
  mainContainer: React.CSSProperties;
  rowTitle: React.CSSProperties;
  gridContainer: (numColumns: number) => React.CSSProperties;
  gridItem: React.CSSProperties;
  scrollableDiv: React.CSSProperties;
}

interface TableViewProps {
  rowTitles: string[];
  records: {
    id: number;
    name: string;
    type: string;
    day: string;
    phone: string;
    status: string;
  }[];
}

const styles: Styles = {
  mainContainer: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '20px',
    fontFamily: "'Inter', sans-serif",
    width: '1100px',
  },
  gridContainer: (numColumns: number) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${numColumns}, 1fr)`, // dynamically set columns
    alignItems: 'center',
    padding: '10px 0',
  }),
  rowTitle: {
    fontSize: '18px',
    color: '#686868',
    fontWeight: 'bold',
    paddingBottom: '16px',
    borderBottom: '2px solid #ddd', 
  },
  gridItem: {
    fontSize: '16px',
    padding: '8px 0',
  },
  scrollableDiv: {
    backgroundColor: '#FFFFFF',
    padding: '20px',
    borderRadius: '20px',
    height: '250px',
    overflowY: 'auto' as const, // Explicitly type 'auto' as a constant
  },
};

export default function TableView({ rowTitles, records }: TableViewProps) {
  return (
    <div style={styles.mainContainer}>
      <div style={{ ...styles.gridContainer(rowTitles.length), fontWeight: 'bold' }}>
        {rowTitles.map((rowTitle, index) => (
          <div key={index} style={styles.rowTitle}>
            {rowTitle}
          </div>
        ))}
      </div>
      <div style={styles.scrollableDiv}>
        {records.map((record) => (
            <div style={styles.gridContainer(rowTitles.length)} key={record.id}>
            <div style={styles.gridItem}>{record.id}</div>
            <div style={styles.gridItem}>{record.name}</div>
            <div style={styles.gridItem}>{record.type}</div>
            <div style={styles.gridItem}>{record.day}</div>
            <div style={styles.gridItem}>{record.phone}</div>
            <div style={styles.gridItem}>{record.status}</div>
            </div> 
        ))}
       </div>
    </div>
  );
}
