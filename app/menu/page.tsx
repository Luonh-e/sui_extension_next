import BottomNav from "../nav/BottomNav";

export default function Menu() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col pb-16">
      <h1 className="text-center text-xl p-4">Menu Page</h1>
      <BottomNav currentTab="menu" />
    </div>
  );
}
