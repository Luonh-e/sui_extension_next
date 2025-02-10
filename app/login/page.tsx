export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-black text-white p-6">
      {/* Header */}
      <header className="mt-10">
        <img src="images/logo.png" alt="Logo" className="h-16" />
      </header>

      {/* Login Section */}
      <main className="flex flex-col items-center text-center">
        <h2 className="text-blue-500 text-sm font-semibold mb-4">
          LOGIN TO START TRADING
        </h2>
        <p className="mb-2 text-xs text-white">Have a referral code?</p>
        <input
          type="text"
          placeholder="Squid referral code"
          className="bg-gray-900 text-white border border-gray-700 rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="flex items-center font-semibold bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
          Login Telegram
        </button>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center mb-6 text-gray-400 text-sm">
        <div className="flex space-x-4 mb-2">
          <a href="#" className="hover:text-white">
            s
          </a>
          <a href="#" className="hover:text-white">
            s
          </a>
          <a href="#" className="hover:text-white">
            s
          </a>
          <a href="#" className="hover:text-white">
            s
          </a>
        </div>
        <p>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" className="hover:text-white">
            {" "}
            Terms & Condition
          </a>
        </p>
      </footer>
    </div>
  );
}
