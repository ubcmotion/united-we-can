import { Text, View, Pressable, StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export default function PickupComponent({ title, status, address }: { title: string, status: "Assigned" | "Completed", address: string }) {
    return (
        <Pressable>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={styles.cardHeading}>
                        <Text style={styles.cardTitle}>{title}</Text>
                        <View style={styles.statusChip}>
                            <View style={status == "Assigned" ? styles.statusDotAssigned : styles.statusDotCompleted} />
                            <Text >{status}</Text>
                        </View>
                    </View>
                    <Text>
                        {address}
                    </Text>
                </View>
                <Feather name="chevron-right" size={36} style={styles.arrow} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8
    },
    cardContent: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 8
    },
    arrow: {
        width: 36,
        flexShrink: 0
    },
    cardHeading: {
        flex: 1,
        flexDirection: "row",
        gap: 8
    },
    cardTitle: {
        fontWeight: 700,
        fontSize: 20
    },
    statusChip: {
        flex: 0,
        flexDirection: "row",
        paddingHorizontal: 8,
        gap: 8,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 67,
    },
    statusDotAssigned: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: "#e3a300"
    },
    statusDotCompleted: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: "#48aa78"
    }
})