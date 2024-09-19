import React, { useRef } from 'react';
import { User, Phone, Mail, MapPin, Calendar, Book, Award, Briefcase, Code, Server, Package, Download } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const CVCreative = () => {
  const cvRef = useRef(null);

  const handleDownload = () => {
    document.title = "CV Fabio Cerundolo";
    const element = cvRef.current;
    const opt = {
      margin:       1,
      filename:     'CV_Fabio_Cerundolo.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 font-sans">
      <div ref={cvRef}>
        <header className="bg-purple-700 text-white p-8 rounded-t-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-purple-600 transform -skew-y-6 origin-top-left -z-10"></div>
          <h1 className="text-5xl font-bold mb-2 relative z-10">Fabio Cerundolo</h1>
          <p className="text-xl text-purple-200 relative z-10">Tecnico Informatico</p>
        </header>

        <main className="bg-white shadow-xl rounded-b-lg p-8 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full -mt-16 -mr-16 flex items-center justify-center">
            <Code className="w-16 h-16 text-purple-700" />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Profilo</h2>
            <p className="text-gray-700 leading-relaxed">
              Tecnico informatico appassionato e curioso, con un forte interesse per la programmazione e l'apprendimento continuo. Amante della cultura in tutte le sue forme, dalla letteratura alla divulgazione scientifica.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Competenze Tecniche</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">SQL</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Oracle</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">MySQL</span>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Soft Skills</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span>Lavoro di squadra</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span>Ascolto attivo</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span>Pensiero analitico</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span>Adattabilità</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span>Autonomia operativa</span>
                </li>
              </ul>
            </section>
          </div>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Istruzione e Formazione</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Book className="w-6 h-6 mr-2 text-yellow-400" />
                <div>
                  <h3 className="font-semibold text-purple-700">Diploma Tecnico Informatico delle Telecomunicazioni</h3>
                  <p className="text-gray-600">ITIS Amadeo Avogadro</p>
                  <p className="text-sm text-gray-500">2017 - 2020</p>
                </div>
              </li>
              <li className="flex items-start">
                <Award className="w-6 h-6 mr-2 text-yellow-400" />
                <div>
                  <h3 className="font-semibold text-purple-700">Attestato PPDB</h3>
                  <p className="text-gray-600">Assocam Camerana</p>
                  <p className="text-sm text-gray-500">2023</p>
                </div>
              </li>
              <li className="flex items-start">
                <Award className="w-6 h-6 mr-2 text-yellow-400" />
                <div>
                  <h3 className="font-semibold text-purple-700">Attestato Test Automation JUnit</h3>
                  <p className="text-gray-600">Formazione Lavoro - ISCS</p>
                  <p className="text-sm text-gray-500">2023</p>
                </div>
              </li>
              <li className="flex items-start">
                <Award className="w-6 h-6 mr-2 text-yellow-400" />
                <div>
                  <h3 className="font-semibold text-purple-700">Attestato Social Marketing e integrazione con l'AI</h3>
                  <p className="text-gray-600">Assocam Camerana</p>
                  <p className="text-sm text-gray-500">2024</p>
                </div>
              </li>
            </ul>
          </section>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Contatti</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-yellow-400" />
                <span>(+39) 3348399328</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-yellow-400" />
                <span>cerundolo.fabio@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
                <span>Torino, Italia</span>
              </li>
            </ul>
          </footer>
        </main>
      </div>
      
      <div className="mt-8 text-center">
        <button
          onClick={handleDownload}
          className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition duration-300 flex items-center justify-center mx-auto"
        >
          <Download className="w-5 h-5 mr-2" />
          Scarica CV
        </button>
      </div>
    </div>
  );
};

export default CVCreative;