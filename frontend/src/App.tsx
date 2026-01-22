function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          ¡Funciona! 🚀
        </h1>
        <p className="text-gray-600 text-center">
          Tu entorno con React, Vite y Tailwind está listo para crear el generador de exámenes.
        </p>
        <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition">
          Comenzar
        </button>
      </div>
    </div>
  )
}

export default App