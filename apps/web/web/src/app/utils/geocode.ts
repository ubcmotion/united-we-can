export interface Coordinates {
    lat: number;
    lon: number;
}

// Fetches latitude/longitude for a given address using OpenStreetMap Nominatim.
// Returns null when no match is found.
export async function geocodeAddress(address: string): Promise<Coordinates | null> {
    if (!address.trim()) return null;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
    const res = await fetch(url, {
        headers: {
            "User-Agent": "UnitedWeCan/1.0",
        },
    });

    if (!res.ok) {
        throw new Error(`Geocoding failed with status ${res.status}`);
    }

    const results = (await res.json()) as Array<{ lat: string; lon: string }>;
    const first = results[0];

    return first ? { lat: parseFloat(first.lat), lon: parseFloat(first.lon) } : null;
}
