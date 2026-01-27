export const StatusLoader = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[300px] py-10 animate-in fade-in duration-500">
      <div className="relative mb-12 flex items-center justify-center gap-4 md:gap-8">

        <div className="shrink-0 w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
            <span className="text-primary font-mono font-bold text-2xl tracking-tighter">{`{ }`}</span>
        </div>
    
        <div className="relative w-24 md:w-32 h-10 flex items-center justify-center overflow-hidden">
            <div className="flex gap-4 px-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-flow"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-flow [animation-delay:200ms]"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-flow [animation-delay:400ms]"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-flow [animation-delay:600ms]"></div>
            </div>
        </div>
    
        <div className="shrink-0 w-20 h-20 bg-primary rounded-[1.5rem] flex items-center justify-center shadow-[0_0_40px_rgba(13,89,242,0.25)] border border-white/10 relative">
            <span className="material-icons text-4xl text-white">description</span>
        </div>
      </div>
      
      <p className="text-slate-400 text-lg animate-pulse font-medium">Procesando tu archivo...</p>
    </div>
  );
};