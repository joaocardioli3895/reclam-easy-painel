import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import bradescoLogo from '@/assets/bradesco-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img 
              src={bradescoLogo} 
              alt="Banco Bradesco" 
              className="h-8 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground">Central de Reclamações</h1>
              <p className="text-sm text-muted-foreground">Resolução rápida e segura</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Início</a>
            <a href="#formulario" className="text-foreground hover:text-primary transition-colors">Nova Reclamação</a>
            <a href="#acompanhar" className="text-foreground hover:text-primary transition-colors">Acompanhar</a>
            <a href="#ajuda" className="text-foreground hover:text-primary transition-colors">Ajuda</a>
            <div className="flex items-center space-x-2 bg-accent px-3 py-1 rounded-full">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">Ambiente Seguro</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors py-2">Início</a>
              <a href="#formulario" className="text-foreground hover:text-primary transition-colors py-2">Nova Reclamação</a>
              <a href="#acompanhar" className="text-foreground hover:text-primary transition-colors py-2">Acompanhar</a>
              <a href="#ajuda" className="text-foreground hover:text-primary transition-colors py-2">Ajuda</a>
              <div className="flex items-center space-x-2 bg-accent px-3 py-2 rounded-lg w-fit">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-accent-foreground">Ambiente Seguro</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;