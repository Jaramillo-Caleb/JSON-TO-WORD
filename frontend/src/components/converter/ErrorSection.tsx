interface ErrorSectionProps {
    onReset: () => void;
  }

  export const ErrorSection = ({ onReset }: ErrorSectionProps) => {
    return (
      <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 rounded-3xl">
        
        <div className="relative bg-gradient-to-r from-danger/20 via-transparent to-transparent -mx-8 md:-mx-12 -mt-8 md:-mt-12 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-b border-white/5 mb-10 rounded-tl-[2rem] rounded-tr-[2rem]">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
  
          <div className="relative shrink-0">
            <div className="w-24 h-24 bg-danger flex items-center justify-center rounded-3xl rotate-12 shadow-[0_0_30px_rgba(255,77,77,0.3)]">
              <span className="material-icons text-white text-5xl -rotate-12">priority_high</span>
            </div>
          </div>
  
          <div className="text-center md:text-left relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">¡Algo no encaja!</h2>
            <p className="text-slate-400 text-lg max-w-md">
              Tu JSON parece tener algunos errores de estructura que impiden la conversión.
            </p>
          </div>
        </div>
  
        <div className="p-0">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Guía rápida de solución</h3>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              { id: '01', title: 'Comas rebeldes', desc: 'Revisa si falta una coma entre objetos o si sobra una al final.' },
              { id: '02', title: 'Comillas dobles', desc: <>JSON requiere estrictamente comillas dobles <span className="text-primary">" "</span>.</> },
              { id: '03', title: 'Cierre de llaves', desc: <>Cada <span className="text-primary">{"{"}</span> debe tener su pareja <span className="text-primary">{"}"}</span>.</> },
              { id: '04', title: 'Formato NotebookLM', desc: 'Asegúrate de copiar el JSON crudo (raw) generado por la IA.' },
            ].map((item) => (
              <div key={item.id} className="bg-inner-bg p-5 rounded-2xl border border-white/5 hover:border-danger/30 transition-colors group shadow-inner">
                <div className="flex items-start gap-4">
                  <span className="text-danger font-bold text-xl opacity-40 group-hover:opacity-100 transition-opacity">{item.id}</span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onReset}
              className="flex-grow bg-primary hover:bg-primary/80 text-white py-4 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <span className="material-icons">refresh</span>
              Intentar de nuevo
            </button>
          </div>
        </div>
      </div>
    );
  };