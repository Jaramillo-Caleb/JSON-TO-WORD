import { useState } from 'react';
import { Header } from '../components/home/Header';
import { Footer } from '../components/layout/Footer';
import { FloatingButton } from '../components/home/FloatingButton';
import { Steps } from '../components/home/Steps';
import { ContentBox } from '../components/home/ContentBox';
import { Dropzone } from '../components/converter/Dropzone';
import { StatusLoader } from '../components/converter/StatusLoader';
import { DownloadSection } from '../components/converter/DownloadSection';
import { ErrorSection } from '../components/converter/ErrorSection';
import { convertJsonToWord } from '../services/apiService';

type AppStatus = 'idle' | 'processing' | 'success' | 'error';

export const HomePage = () => {
  const [status, setStatus] = useState<AppStatus>('idle');
  const [resultFiles, setResultFiles] = useState<any>(null);

  const handleConversionStart = async (file: File) => {
    setStatus('processing');
    try {
      
      const [response] = await Promise.all([
        convertJsonToWord(file),
        new Promise((resolve) => setTimeout(resolve, 3000))
      ]);
      
      if (response.status === 'success') {
        setResultFiles(response.files);
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col font-display selection:bg-primary selection:text-white">
      <Header />
      
      <ContentBox>
        {status === 'idle' && (
          <Dropzone onConvert={handleConversionStart} />
        )}

        {status === 'processing' && (
          <StatusLoader />
        )}

        {status === 'success' && (
          <DownloadSection 
            files={resultFiles} 
            onReset={() => setStatus('idle')} 
          />
        )}

        {status === 'error' && (
          <ErrorSection 
            onReset={() => setStatus('idle')} 
          />
        )}
      </ContentBox>

      <Steps />
      <Footer />
      <FloatingButton />
    </div>
  );
};