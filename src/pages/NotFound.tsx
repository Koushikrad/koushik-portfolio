import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function NotFound() {
    return (
        <PageTransition>
            <SEO title="404 Not Found" />
            <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="fixed inset-0 z-0">
                    <ParticleBackground variant="default" />
                </div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Page Not Found</h2>
                    <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
                        Oops! The page you are looking for seems to have wandered off into the digital void.
                    </p>
                    <Link
                        to="/"
                        className="inline-block px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium transition-colors duration-200 shadow-lg shadow-sky-500/20"
                    >
                        Return Home
                    </Link>
                </div>
            </div>

        </PageTransition >
    );
}
