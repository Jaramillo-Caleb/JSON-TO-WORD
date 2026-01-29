import { Link } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import QRNequi from '../assets/QRs/NequiQR.png';

export const DonationPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-white min-h-screen flex flex-col">

      <header className="flex items-center px-6 py-6 md:px-20 lg:px-40 bg-background-light dark:bg-background-dark">
        <Link 
            to="/" 
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-primary font-medium transition-colors"
        >
            <span className="material-icons">arrow_back</span>
            <span>Volver al convertidor</span>
        </Link>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-[960px] w-full flex flex-col items-center">

            <h1 className="tracking-tight text-4xl md:text-5xl font-bold text-center mb-12 text-slate-900 dark:text-white">
                Tu apoyo hace <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">la diferencia</span>
            </h1>
        
            <div className="w-full max-w-lg mb-12 flex items-center gap-6">
                <div className="shrink-0 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl shadow-orange-500/20">
                    <span className="material-icons text-white text-5xl -rotate-12">volunteer_activism</span>
                </div>
            
                <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-1 text-slate-900 dark:text-white">Sin publicidad, sin cuotas.</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Este convertidor es gratuito gracias a personas que, como tú, creen en el valor de compartir herramientas útiles con la comunidad.
                    </p>
                </div>
            </div>
        
            <div className="max-w-2xl text-center space-y-6 mb-12">
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                    JSON to Word nació para ahorrarle tiempo a los docentes. Tu aporte, por pequeño que sea, me ayuda a cubrir los costos de desarrollo y a sostener este y otros proyectos.
                </p>
                
                <p className="text-orange-500 dark:text-orange-400 font-medium italic">
                    "De un corazón generoso para una comunidad que transforma vidas."
                </p>
            </div>
        
        </div>

        <div className="w-full border-t border-slate-300 dark:border-white/10 pt-8 pb-4 max-w-4xl">
            <h4 className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-widest text-center">
                Escanea para donar
            </h4>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-3xl mb-12">
            {/* Nequi */}
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-white/10 flex flex-col items-center shadow-lg">
                <div className="w-full mb-4 flex justify-between items-center">
                    <span className="font-bold text-slate-800 dark:text-white">Nequi</span>
                </div>
                <div className="bg-white p-1 rounded-lg mb-4">
                    <img 
                        src={QRNequi}
                        alt="QR Nequi" 
                        className="w-48 h-48 object-contain"
                    />
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs text-center font-medium">
                    Abre tu app Nequi y escanea el código
                </p>
            </div>

            {/* DaviPlata
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-white/10 flex flex-col items-center shadow-lg">
                <div className="w-full mb-4 flex justify-between items-center">
                    <span className="font-bold text-slate-800 dark:text-white">Daviplata</span>
                </div>
                <div className="bg-white p-1 rounded-lg mb-4">
                    <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=DaviplataSimulado" 
                        alt="QR Daviplata" 
                        className="w-48 h-48 object-contain"
                    />
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs text-center font-medium">
                    Escanea desde tu app Daviplata
                </p>
            </div>
            */}
        </div>
      </main>

      <Footer />
    </div>
  );
};