"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type TooltipContentProps,
} from "recharts";
import { LuArrowUpRight } from "react-icons/lu";

const barData = [
    { name: "Completed", value: 30, fill: "#7f7f7f" },
    { name: "Pending", value: 16, fill: "#c7c7c7" },
];

const monthData = [
    { name: "Jan", value: 12 },
    { name: "Feb", value: 9 },
    { name: "Mar", value: 15 },
    { name: "Apr", value: 13 },
    { name: "May", value: 13 },
    { name: "Jun", value: 20 },
];

const areaData = [
    { name: "Area A", value: 35, fill: "#7f7f7f" },
    { name: "Area B", value: 28, fill: "#a6a6a6" },
    { name: "Area C", value: 18, fill: "#5a5a5a" },
    { name: "Area D", value: 9, fill: "#2f2f2f" },
    { name: "Area E", value: 10, fill: "#cfcfcf" },
];
const areaTotal = areaData.reduce((sum, item) => sum + item.value, 0);

const clientsData = [
    { name: "Client A", value: 45, fill: "#656565" },
    { name: "Client B", value: 20, fill: "#b9b9b9" },
    { name: "Client C", value: 25, fill: "#7f7f7f" },
    { name: "Client D", value: 10, fill: "#d8d8d8" },
];
const clientsTotal = clientsData.reduce((sum, item) => sum + item.value, 0);

const renderPieTooltip = (total: number) => {
    const PieTooltip = ({ active, payload }: TooltipContentProps) => {
        if (!active || !payload?.length) return null;
        const entry = payload[0];
        const name = entry?.name as string;
        const value = Number(entry?.value ?? 0);
        const percent = total ? Math.round((value / total) * 100) : 0;
        return (
        <div className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 shadow">
            <div className="font-semibold">{name}</div>
            <div>
            {value} ({percent}%)
            </div>
        </div>
        );
    };
    PieTooltip.displayName = "PieTooltip";
    return PieTooltip;
};

export default function Analytics() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="space-y-6 text-[#2f2f2f]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-black">Reports</h1>
            <button className="inline-flex items-center gap-2 self-start rounded-full border border-gray-400 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-gray-50">
            <LuArrowUpRight className="h-4 w-4" />
            Export
            </button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-center text-sm font-semibold text-gray-700">
                Pickups by Day
            </h2>
            <div className="mt-4 flex items-start gap-4">
                <div className="h-44 flex-1">
                {mounted && (
                    <ResponsiveContainer width="100%" height="100%" minHeight={180} minWidth={200}>
                    <BarChart data={barData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid vertical={false} stroke="#d1d1d1" strokeDasharray="3 0" />
                        <XAxis dataKey="name" tick={{ fill: "#6b6b6b", fontSize: 12 }} tickLine={false} axisLine={{ stroke: "#5a5a5a" }} />
                        <YAxis hide />
                        <Tooltip cursor={{ fill: "rgba(0,0,0,0.03)" }} />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]} label={{ position: "top", fill: "#4b4b4b", fontSize: 12 }} />
                    </BarChart>
                    </ResponsiveContainer>
                )}
                </div>
                <div className="flex flex-col gap-3 pr-2 text-sm text-gray-700">
                {barData.map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.fill }} />
                    <span>{item.name}</span>
                    </div>
                ))}
                </div>
            </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-center text-sm font-semibold text-gray-700">
                Pickups by Month
            </h2>
            <div className="mt-4 h-44">
                {mounted && (
                <ResponsiveContainer width="100%" height="100%" minHeight={180} minWidth={200}>
                    <LineChart data={monthData} margin={{ top: 12, right: 12, left: 16, bottom: 0 }}>
                    <CartesianGrid vertical={false} stroke="#d1d1d1" strokeDasharray="3 0" />
                    <XAxis dataKey="name" tick={{ fill: "#6b6b6b", fontSize: 12 }} tickLine={false} axisLine={{ stroke: "#5a5a5a" }} />
                    <YAxis
                        width={32}
                        tick={{ fill: "#6b6b6b", fontSize: 12 }}
                        tickLine={false}
                        axisLine={{ stroke: "#5a5a5a" }}
                        tickCount={5}
                        domain={[0, "dataMax + 5"]}
                    />
                    <Tooltip cursor={{ stroke: "#8a8a8a" }} />
                    <Line type="monotone" dataKey="value" stroke="#555555" strokeWidth={3} dot={{ fill: "#555555", r: 4 }} activeDot={{ r: 6 }} />
                    </LineChart>
                </ResponsiveContainer>
                )}
            </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-center text-sm font-semibold text-gray-700">
                Pickups by Area
            </h2>
            <div className="mt-4 flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-start">
                <div className="h-44 w-full max-w-[190px]">
                {mounted && (
                    <ResponsiveContainer width="100%" height="100%" minHeight={180} minWidth={180}>
                    <PieChart>
                        <Pie data={areaData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} />
                        <Tooltip content={renderPieTooltip(areaTotal)} />
                    </PieChart>
                    </ResponsiveContainer>
                )}
                </div>
                <div className="flex flex-col gap-3 text-sm text-gray-700">
                {areaData.map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.fill }} />
                    <span>{item.name}</span>
                    </div>
                ))}
                </div>
            </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-center text-sm font-semibold text-gray-700">
                Top Clients per Month
            </h2>
            <div className="mt-4 flex justify-center">
                <div className="h-44 w-full max-w-[190px]">
                {mounted && (
                    <ResponsiveContainer width="100%" height="100%" minHeight={180} minWidth={180}>
                    <PieChart>
                        <Pie data={clientsData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={30} outerRadius={80} paddingAngle={2} />
                        <Tooltip content={renderPieTooltip(clientsTotal)} />
                    </PieChart>
                    </ResponsiveContainer>
                )}
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}
