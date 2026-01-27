interface FileInfo {
  filename: string;
  data: string;
}

interface DownloadSectionProps {
  files: {
    exam: FileInfo;
    answers: FileInfo;
  };
  onReset: () => void;
}

export const DownloadSection = ({ files, onReset }: DownloadSectionProps) => {
  
  const handleDownload = (fileInfo: FileInfo) => {
    const byteCharacters = atob(fileInfo.data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileInfo.filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full animate-in fade-in zoom-in duration-500">
      <div className="relative bg-gradient-to-r from-success/20 via-transparent to-transparent -mx-8 md:-mx-12 -mt-8 md:-mt-12 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-b border-white/5 mb-10">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        <div className="relative shrink-0">
          <div className="w-20 h-20 bg-success flex items-center justify-center rounded-3xl -rotate-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <span className="material-icons text-white text-4xl rotate-6">task_alt</span>
          </div>
        </div>

        <div className="text-center md:text-left relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">¡Archivos Listos!</h2>
          <p className="text-slate-400">Tu JSON se procesó a la perfección.</p>
        </div>
      </div>

      {/* Lista de Archivos */}
      <div className="max-w-2xl mx-auto flex flex-col gap-4 mb-10">
        {/* Botón Examen */}
        <button 
          onClick={() => handleDownload(files.exam)}
          className="group flex items-center gap-6 p-5 bg-inner-bg/30 border border-white/5 rounded-2xl text-left relative overflow-hidden hover:bg-inner-bg/60 hover:border-primary/30 transition-all cursor-pointer"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-60 group-hover:opacity-100 transition-opacity"></div>
          <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <span className="material-icons text-2xl">description</span>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-lg">Documento de Examen</h3>
              <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-slate-400 font-mono">.docx</span>
            </div>
            <p className="text-slate-500 text-sm">Listo para imprimir y entregar.</p>
          </div>
          <div className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <span className="material-icons text-xl">download</span>
          </div>
        </button>

        <button 
          onClick={() => handleDownload(files.answers)}
          className="group flex items-center gap-6 p-5 bg-inner-bg/30 border border-white/5 rounded-2xl text-left relative overflow-hidden hover:bg-inner-bg/60 hover:border-primary/30 transition-all cursor-pointer"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-60 group-hover:opacity-100 transition-opacity"></div>
          <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <span className="material-icons text-2xl">fact_check</span>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-lg">Hoja de Respuestas</h3>
              <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-slate-400 font-mono">.docx</span>
            </div>
            <p className="text-slate-500 text-sm">Incluye claves y justificantes.</p>
          </div>
          <div className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <span className="material-icons text-xl">download</span>
          </div>
        </button>
      </div>

      <div className="flex justify-center pt-6 border-t border-white/5">
        <button 
          onClick={onReset}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium cursor-pointer"
        >
          <span className="material-icons">add_circle_outline</span>
          Convertir otro archivo
        </button>
      </div>
    </div>
  );
};