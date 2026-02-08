import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { COMPANY, NAV_LINKS } from '../../utils/constants';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { MenuIcon, CloseIcon } from '../ui/Icons';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-sm shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <Container>
                <nav className="flex items-center justify-between h-20 md:h-24">
                    <Link to="/" className="relative z-50">
                        <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
                            {COMPANY.name}
                        </span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors duration-200 ${isScrolled
                                        ? isActive ? 'text-amber-600' : 'text-charcoal hover:text-amber-600'
                                        : isActive ? 'text-amber-400' : 'text-white/90 hover:text-white'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Button
                            as="link"
                            href="/contact"
                            size="sm"
                            variant={isScrolled ? 'primary' : 'secondary'}
                            className={!isScrolled ? 'text-white border-white hover:bg-white hover:text-charcoal' : ''}
                        >
                            Get a Quote
                        </Button>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`lg:hidden relative z-50 p-2 -mr-2 transition-colors duration-300 ${isMenuOpen ? 'text-charcoal' : isScrolled ? 'text-charcoal' : 'text-white'}`}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <CloseIcon className="w-6 h-6" />
                        ) : (
                            <MenuIcon className="w-6 h-6" />
                        )}
                    </button>
                </nav>
            </Container>

            <div
                className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-out-expo ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-2xl font-medium transition-colors duration-200 ${isActive
                                    ? 'text-amber-600'
                                    : 'text-charcoal hover:text-amber-600'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <Button as="link" href="/contact" className="mt-4">
                        Get a Quote
                    </Button>
                </div>
            </div>
        </header>
    );
}
