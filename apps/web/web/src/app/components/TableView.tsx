import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";

interface Styles {
  mainContainer: React.CSSProperties;
  columnTitle: React.CSSProperties;
  gridContainer: (numColumns: number) => React.CSSProperties;
  gridItem: React.CSSProperties;
  scrollableDiv: React.CSSProperties;
  buttonStyle: React.CSSProperties;
  titleContainer: (numColumns: number) => React.CSSProperties;
}

interface TableViewProps {
  columnTitles?: string[];
  records?: {
    id: number;
    name: string;
    type: string;
    day: string;
    phone: string;
    status: string;
  }[];
  tableType?: 'default' | 'driver' | 'dashboard';
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
    gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
    alignItems: 'center',
    padding: '10px 0',
  }),
  titleContainer: (numColumns: number) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
    borderBottom: '2px solid #ddd',
    fontWeight: 'bold',
    paddingBottom: '10px',
  }),
  columnTitle: {
    fontSize: '18px',
    color: '#686868',
    fontWeight: 'bold',
    textAlign: 'left',
    whiteSpace: 'nowrap',
  },
  gridItem: {
    fontSize: '16px',
    padding: '8px 0 5px 0px',
    textAlign: 'left',
  },
  scrollableDiv: {
    backgroundColor: '#FFFFFF',
    padding: '20px',
    borderRadius: '20px',
    height: '250px',
    overflowY: 'auto' as const,
  },
  buttonStyle: {
    color: '#464646',
    backgroundColor: 'white',
    border: '1px solid #464646',
    padding: '5px 16px',
    borderRadius: '15px',
    cursor: 'pointer',
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
  }
};

const numColumns = (tableType: TableViewProps['tableType'], columnTitlesLength: number) => {
  return columnTitlesLength + (tableType === 'driver' ? 1 : 0) + (tableType === 'dashboard' ? 0 : 1);
};

export default function TableView({ columnTitles = [], records = [], tableType = 'default' }: TableViewProps) {
  const totalColumns = numColumns(tableType, columnTitles.length);

  return (
    <div style={styles.mainContainer}>
      {/* Column Titles */}
      <div style={styles.titleContainer(totalColumns)}>
        {columnTitles.map((columnTitle, index) => (
          <div key={index} style={styles.columnTitle}>
            {columnTitle}
          </div>
        ))}
        {tableType === 'driver' && <div style={styles.columnTitle}>Contact</div>}
        {tableType !== 'dashboard' && <div style={styles.columnTitle}>Actions</div>}
      </div>

      {/* Records */}
      <div style={styles.scrollableDiv}>
        {records.map((record) => (
          <div style={styles.gridContainer(totalColumns)} key={record.id}>
            <div style={styles.gridItem}>{record.id}</div>
            <div style={styles.gridItem}>{record.name}</div>
            <div style={styles.gridItem}>{record.type}</div>
            <div style={styles.gridItem}>{record.day}</div>
            <div style={styles.gridItem}>{record.phone}</div>
            <div style={styles.gridItem}>{record.status}</div>

            {tableType === 'driver' && (
              <div style={styles.gridItem}>
                <button
                  style={styles.buttonStyle}>
                  <FaRegFileAlt />
                  View
                </button>
              </div>
            )}

            {tableType !== 'dashboard' && (
              <div style={styles.gridItem}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <PiPencilSimpleLineBold />
                  <FaRegTrashAlt />
                  <FaEllipsis />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


