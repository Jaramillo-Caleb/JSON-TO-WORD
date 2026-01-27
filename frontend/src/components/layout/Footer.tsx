export const Footer = () => {
    return (
      <footer className="bg-slate-900 py-10 px-4 text-slate-400 border-t border-slate-800 mt-auto w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6 text-sm">
          
          <div className="flex items-center gap-2">
            <span className="material-icons text-lg">mail</span>
            <span>jaramillocaleb3@gmail.com</span>
          </div>
  
          <span className="hidden md:inline text-slate-700">|</span>
  
          <div className="flex items-center gap-2">
            <span className="material-icons text-lg">call</span>
            <span>+57 300 384 0344</span>
          </div>
  
        </div>
      </footer>
    );
  };