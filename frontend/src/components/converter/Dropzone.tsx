import { useRef, useState,type ChangeEvent, type DragEvent } from 'react';

interface DropzoneProps {
  onConvert: (file: File) => void;
}

export const Dropzone = ({ onConvert }: DropzoneProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault(); 
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
    }
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <input 
        type="file" 
        className="hidden" 
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".json"
      />

      <div 
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 group
          ${isDragging 
            ? 'border-primary bg-primary/10 scale-[1.02]'
            : 'border-slate-500/40 hover:bg-slate-800/20'
          }
        `}
      >
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 ${isDragging ? 'scale-110 bg-primary/20' : 'bg-slate-700/40 group-hover:scale-110'}`}>
          <span className={`material-icons ${isDragging ? 'text-primary' : 'text-slate-200'}`}>
            upload
          </span>
        </div>
        
        <h3 className="text-slate-100 text-xl font-bold mb-1">
          {file ? file.name : "Arrastra tu archivo JSON aquí"}
        </h3>
        
        <p className="text-slate-300 text-sm mb-6">
          {file ? "Archivo listo para procesar" : "o haz clic para seleccionar"}
        </p>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="bg-transparent border border-slate-400/40 text-slate-100 px-6 py-2.5 rounded-lg flex items-center gap-2 font-medium hover:bg-slate-700/30 transition-colors pointer-events-none" 
        >
          <span className="material-icons text-xl">description</span>
          {file ? "Cambiar archivo" : "Seleccionar archivo"}
        </button>
      </div>

      <button 
        onClick={() => file && onConvert(file)} 
        disabled={!file}
        className={`w-full py-4 rounded-xl text-lg font-bold shadow-lg transition-all
          ${file 
            ? 'bg-primary hover:bg-blue-600 text-white cursor-pointer transform hover:-translate-y-1' 
            : 'bg-[#334155] text-white cursor-not-allowed opacity-80'
          }`}
      >
        Convertir a Word
      </button>
    </div>
  );
};