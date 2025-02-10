const Referral = () => {
  return (
    <div className="p-6 bg-[#0d0d0d] text-white rounded-xl w-full max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">YOUR REFERRALS</h2>

      <div className="bg-[#111] p-4 rounded-lg">
        <h3 className="text-blue-400 mb-2">5 LAYERS REFERRAL</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <button className="px-4 py-2 bg-[#222] rounded">
            REFERRAL COUNT
          </button>
          <button className="px-4 py-2 bg-[#222] rounded">
            CLAIMABLE VOLUME
          </button>
          <button className="px-4 py-2 bg-[#222] rounded">
            LIFETIME VOLUME
          </button>
        </div>
        {[1, 2, 3, 4, 5].map((level) => (
          <div key={level} className="grid grid-cols-3 gap-4 text-center mt-2">
            <span className="bg-[#222] py-2 rounded">L {level}</span>
            <span className="bg-[#222] py-2 rounded">0</span>
            <span className="bg-[#222] py-2 rounded">$0</span>
          </div>
        ))}
      </div>

      <div className="bg-[#111] p-4 rounded-lg mt-4">
        <h3 className="text-blue-400 mb-2">QUICK BUY REFERRAL</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <span className="bg-[#222] py-2 rounded">CLAIMABLE VOLUME</span>
          <span className="bg-[#222] py-2 rounded">LIFETIME VOLUME</span>
          <span className="bg-[#222] py-2 rounded">
            TOTAL QUICK BUY CLAIMED
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6 text-center">
        <div className="border p-4 rounded-md">
          <span className="text-green-400">$0 ~ 0</span>
          <p>REF CLAIMABLE AMOUNT</p>
        </div>
        <div className="border p-4 rounded-md">
          <span className="text-green-400">$0 ~ 0</span>
          <p>QUICK-BUY CLAIMABLE AMOUNT</p>
        </div>
        <div className="border p-4 rounded-md">
          <span className="text-green-400">$0 ~ 0</span>
          <p>TOTAL CLAIMABLE AMOUNT</p>
        </div>
        <div className="border p-4 rounded-md">
          <span>$0</span>
          <p>TOTAL USD CLAIMED</p>
        </div>
      </div>

      <button className="w-full py-3 mt-4 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-lg">
        Create Claim Request
      </button>
    </div>
  );
};

export default Referral;
