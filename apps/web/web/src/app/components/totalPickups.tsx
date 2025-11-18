import React from 'react';
import Image from 'next/image';


interface Styles {
    mainContainer: React.CSSProperties;
    statContainer: React.CSSProperties;
    detailsContainer: React.CSSProperties;
    header: React.CSSProperties;
    value: React.CSSProperties;
}

const styles: Styles = {
    mainContainer: {
        backgroundColor: '#EBEBEB',
        width: '100%',
        height: '200px',
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '70px',
        paddingTop: '70px',
    },
    statContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        width: "50%",
        height: "150px",
        display: "flex",
        paddingLeft: "40px",
    },
    detailsContainer: {
        padding: '20px',
        paddingLeft: '30px',
    },
    header: {
        fontSize: '20px',
    },
    value: {
        fontSize: '50px',
        fontWeight: 'bold',
    },
};

export default function TotalPickups() {
    return (
        <div style={styles.mainContainer}>
            <div style={styles.statContainer}>
                <Image
                    src="/completed-pickups.svg"
                    alt="Completed Pickups"
                    width={100}
                    height={100}
                />
                <div style={styles.detailsContainer}>
                    <div style={styles.header}>Completed Pickups</div>
                    <div style={styles.value}>16</div>
                </div>
            </div>
            <div style={styles.statContainer}>
                <Image
                    src="/pending-pickups.svg"
                    alt="Pending Pickups"
                    width={100}
                    height={100}
                />
                <div style={styles.detailsContainer}>
                    <div style={styles.header}>Pending Pickups</div>
                    <div style={styles.value}>25</div>
                </div>
            </div>
        </div>
    )
}