"use client";

import { AreaChart, Area, ResponsiveContainer } from "recharts";
import BottomNav from "../nav/BottomNav";

const data = [
  { value: 100 },
  { value: 120 },
  { value: 80 },
  { value: 130 },
  { value: 90 },
];

const tokens = [
  { name: "YODA", mc: "$827.4K", change: "+17.229%", age: "15d", trend: data },
  { name: "$MIA", mc: "$2.7M", change: "+24.591%", age: "17d", trend: data },
  { name: "CROCUM", mc: "$5.2K", change: "-75.013%", age: "2d", trend: data },
  { name: "YODA", mc: "$827.4K", change: "+17.229%", age: "15d", trend: data },
  { name: "$MIA", mc: "$2.7M", change: "+24.591%", age: "17d", trend: data },
  { name: "CROCUM", mc: "$5.2K", change: "-75.013%", age: "2d", trend: data },
  { name: "YODA", mc: "$827.4K", change: "+17.229%", age: "15d", trend: data },
  { name: "$MIA", mc: "$2.7M", change: "+24.591%", age: "17d", trend: data },
  { name: "CROCUM", mc: "$5.2K", change: "-75.013%", age: "2d", trend: data },
  { name: "YODA", mc: "$827.4K", change: "+17.229%", age: "15d", trend: data },
  { name: "$MIA", mc: "$2.7M", change: "+24.591%", age: "17d", trend: data },
  { name: "CROCUM", mc: "$5.2K", change: "-75.013%", age: "2d", trend: data },
];

export default function CryptoDashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col pb-16">
      {/* Search Bar */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search by token or LP contract"
          className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-500"
        />
      </div>

      {/* Trending Tokens */}
      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-lg font-bold mb-4">Trending 24h</h2>
        {tokens.map((token, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 border-b border-gray-700"
          >
            <div>
              <h3 className="text-md font-semibold">{token.name}</h3>
              <p className="text-sm text-gray-400">MC: {token.mc}</p>
            </div>
            <div className="w-56 h-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={token.trend}>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div
              className={`text-sm font-bold ${
                token.change.startsWith("-") ? "text-red-500" : "text-green-500"
              }`}
            >
              {token.change}
              <p className="text-xs text-gray-500">Age {token.age}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentTab="home" />
    </div>
  );
}
