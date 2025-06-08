'use client';
import React, { useState, useEffect } from 'react';

interface Pickup {
    customer: string;
    driverID: string;
    totes: string;
}

interface Styles {
    container: React.CSSProperties;
    header: React.CSSProperties;
    label: React.CSSProperties;
    inputRow: React.CSSProperties;
    input: React.CSSProperties;
    button: React.CSSProperties;
    link: React.CSSProperties;
}
  
const styles: Styles = {
    container: {
        backgroundColor: '#FFFFFF',
        padding: '30px',
        borderRadius: '20px',
        fontFamily: "'Inter', sans-serif",
        width: '600px',
        margin: '50px auto',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    },
    header: {
        fontSize: '28px',
        fontWeight: 700,
        marginBottom: '20px'
    },
    label: {
        fontWeight: 600,
        marginBottom: '8px',
        display: 'block'
    },
    inputRow: {
        display: 'flex',
        gap: '15px',
        marginTop: '20px'
    },
    input: {
        flex: 1,
        padding: '10px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        width: '100%'
    },
    button: {
        marginTop: '30px',
        width: '100%',
        padding: '12px',
        backgroundColor: '#0066CC',
        color: 'white',
        fontSize: '18px',
        fontWeight: 600,
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer'
    },
    link: {
        textAlign: 'center',
        marginTop: '20px',
        color: '#0066CC',
        fontWeight: 500,
        cursor: 'pointer'
    }
};

export default function AddPickup() {
    const [date, setDate] = useState('');
    const [pickups, setPickups] = useState<Pickup[]>([
        {customer: '', driverID: '', totes: '' },
    ]);

    const handleChange = (index: number, field: keyof Pickup, value: string) => {
        const newPickups = [...pickups];
        newPickups[index][field] = value;
        setPickups(newPickups);
    };
  
    const handleAddPickup = () => {
        setPickups([...pickups, {customer: '', driverID: '', totes: ''}]);
    }

    // TODO: handle how you want to connect this to backend, for now just console logs
    const handleSubmit = () => {
        console.log('Submitted pickups:', pickups);
    };
  
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Add pickup</h2>

            <label style={styles.label}>Date</label>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ ...styles.input, width: '100%' }}
            />
    
            {pickups.map((pickup, index) => (
                <div key={index}>
                    <div style={styles.inputRow}>
                        <div style={{ flex: 1 }}>
                            <label style={styles.label}>Customer</label>
                            <input
                                type="text"
                                value={pickup.customer}
                                onChange={(e) => handleChange(index, 'customer', e.target.value)}
                                style={styles.input}
                            />
                        </div>

                        <div style={{ flex: 1 }}>
                            <label style={styles.label}>Driver ID</label>
                            <input
                                type="text"
                                value={pickup.driverID}
                                onChange={(e) => handleChange(index, 'driverID', e.target.value)}
                                style={styles.input}
                            />
                        </div>

                        <div style={{ flex: 1 }}>
                            <label style={styles.label}>Number of totes</label>
                            <input
                                type="number"
                                value={pickup.totes}
                                onChange={(e) => handleChange(index, 'totes', e.target.value)}
                                style={styles.input}
                            />
                        </div>
                    </div>
                </div>
            ))}
    
            <button style={styles.button} onClick={handleSubmit}>Save</button>
    
            <div style={styles.link} onClick={handleAddPickup}>Add multiple pickups</div>
        </div>
    );
}