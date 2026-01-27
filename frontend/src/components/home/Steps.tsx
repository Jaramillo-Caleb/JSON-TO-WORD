export const Steps = () => {
    return (
      <div className="max-w-5xl mx-auto mt-32 mb-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Cómo funciona</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Paso 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl">
              <span className="material-icons text-slate-800 text-3xl font-bold">upload_file</span>
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">Importa tu JSON</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Arrastra o selecciona tu archivo JSON de NotebookLM directamente en nuestra plataforma.
            </p>
          </div>
  
          {/* Paso 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl">
              <span className="material-icons text-slate-800 text-3xl font-bold">settings</span>
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">Procesamiento automático</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nuestro sistema convierte el JSON en documentos Word estructurados con formato profesional.
            </p>
          </div>
  
          {/* Paso 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl">
              <span className="material-icons text-slate-800 text-3xl font-bold">file_download</span>
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">Descarga tus archivos</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Obtén dos documentos Word: uno con las respuestas completas y otro parcial para tus estudiantes.
            </p>
          </div>
        </div>
      </div>
    );
  };