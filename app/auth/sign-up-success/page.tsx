import Link from 'next/link';
import { AfrilandLogo } from '@/components/afriland-logo';

export default function SignUpSuccess() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-geist">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-md w-full text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <AfrilandLogo />
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Vérifiez vos e-mails !</h1>
        <p className="text-slate-600 mb-6">
          Un lien de confirmation a été envoyé à votre adresse. Cliquez dessus pour activer votre accès à <strong>Afriland Record</strong> et <strong>Afriland Space</strong>.
        </p>

        <div className="space-y-3">
          <Link 
            href="https://mail.google.com" 
            className="block w-full py-3 px-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors"
          >
            Ouvrir Gmail
          </Link>
          <Link 
            href="/" 
            className="block w-full py-3 px-4 text-slate-500 hover:text-slate-700 text-sm"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}