import React from "react";

const TradeUI = () => {
  return (
    <div className="bg-gray-900 text-white p-6 space-y-8">
      {/* Trade Section */}
      <div className="border-b border-gray-700 pb-4">
        <h2 className="text-xl font-semibold text-center">TRADE</h2>
      </div>

      {/* Sniper & Buy/Sell Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sniper */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">SNIPER</h3>
          <div className="mt-4">
            <label className="block text-sm">Slippage</label>
            <input
              type="number"
              className="w-full bg-gray-700 text-white p-2 rounded"
              defaultValue="1000"
            />
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="w-1/2 p-2 bg-blue-600 rounded">Normal</button>
            <button className="w-1/2 p-2 bg-gray-700 rounded">Pro</button>
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <input type="checkbox" id="tip" className="h-4 w-4" />
            <label htmlFor="tip">Tip Amount</label>
          </div>
          <div className="mt-2">
            <input
              type="number"
              className="w-full bg-gray-700 text-white p-2 rounded"
              defaultValue="0.005"
            />
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <input type="checkbox" id="fee" className="h-4 w-4" />
            <label htmlFor="fee">Priority Fee</label>
          </div>
          <div className="mt-2">
            <input
              type="number"
              className="w-full bg-gray-700 text-white p-2 rounded"
              defaultValue="0.0005"
            />
          </div>
        </div>

        {/* Buy/Sell */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">BUY/SELL</h3>
          <div className="mt-4">
            <label className="block text-sm">Slippage</label>
            <input
              type="number"
              className="w-full bg-gray-700 text-white p-2 rounded"
              defaultValue="49"
            />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <label className="text-sm">Tip Amount</label>
            <input type="checkbox" className="h-4 w-4" />
          </div>
          <div className="mt-2">
            <input
              type="number"
              className="w-full bg-gray-700 text-white p-2 rounded"
              defaultValue="0.003"
            />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <label className="text-sm">Priority Fee</label>
            <input type="checkbox" className="h-4 w-4" />
          </div>
          <div className="mt-2">
            <input
              type="number"
              className="w-full bg-gray-700 text-white p-2 rounded"
              defaultValue="0.000683"
            />
          </div>
        </div>
      </div>

      {/* Customize Button Section */}
      <div className="border-t border-gray-700 pt-4">
        <h2 className="text-xl font-semibold text-center">CUSTOMIZE BUTTON</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">CUSTOMIZE QUICK BUY</h3>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[0.2, 0.5, 1, 2, 5, 10].map((val) => (
              <button key={val} className="bg-gray-700 p-2 rounded text-center">
                {val}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">CUSTOMIZE QUICK SELL</h3>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[25, 50, 100].map((val) => (
              <button key={val} className="bg-gray-700 p-2 rounded text-center">
                {val}%
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeUI;
