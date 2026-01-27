import { Link } from 'react-router-dom';

export const FloatingButton = () => {
  return (
    <Link to="/donar">
      <div
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-[#4E342E] text-[#F5E9DA] px-5 py-3 rounded-full shadow-2xl border border-[#3E2723] transition-all duration-300 ease-out hover:px-7 group cursor-pointer"
      >
        <span className="material-icons text-[#D7B899] transition-transform duration-300 group-hover:rotate-12">
          coffee
        </span>

        <span className="font-bold text-sm tracking-wide whitespace-nowrap">
          Invítame a un café
        </span>
      </div>
    </Link>
  );
};