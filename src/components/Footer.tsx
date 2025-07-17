import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import bradescoLogo from '@/assets/bradesco-logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img 
              src={bradescoLogo} 
              alt="Banco Bradesco" 
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <h3 className="text-lg font-semibold mb-4">Central de Reclamações</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Comprometidos em oferecer a melhor experiência bancária através da escuta ativa 
              e resolução eficiente das suas demandas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="text-background/80 hover:text-background transition-colors">Início</a></li>
              <li><a href="#formulario" className="text-background/80 hover:text-background transition-colors">Nova Reclamação</a></li>
              <li><a href="#acompanhar" className="text-background/80 hover:text-background transition-colors">Acompanhar Status</a></li>
              <li><a href="/faq" className="text-background/80 hover:text-background transition-colors">FAQ</a></li>
              <li><a href="/termos" className="text-background/80 hover:text-background transition-colors">Termos de Uso</a></li>
              <li><a href="/privacidade" className="text-background/80 hover:text-background transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tipos de Reclamação</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-background/80">Cartão de Crédito</span></li>
              <li><span className="text-background/80">Conta Corrente</span></li>
              <li><span className="text-background/80">Financiamentos</span></li>
              <li><span className="text-background/80">Atendimento</span></li>
              <li><span className="text-background/80">Internet Banking</span></li>
              <li><span className="text-background/80">Seguros</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">0800 570 0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">reclamacoes@bradesco.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/80">
                  Banco Bradesco S.A.<br />
                  Cidade de Deus, Vila Yara<br />
                  Osasco, SP - Brasil
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">24h por dia, 7 dias por semana</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Redes Sociais</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              © 2024 Banco Bradesco S.A. - Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="/termos" className="text-background/60 hover:text-background transition-colors">
                Termos de Uso
              </a>
              <a href="/privacidade" className="text-background/60 hover:text-background transition-colors">
                Privacidade
              </a>
              <a href="/cookies" className="text-background/60 hover:text-background transition-colors">
                Cookies
              </a>
              <a href="/acessibilidade" className="text-background/60 hover:text-background transition-colors">
                Acessibilidade
              </a>
            </div>
          </div>

          {/* Legal Info */}
          <div className="mt-6 text-xs text-background/50 leading-relaxed">
            <p>
              Banco Bradesco S.A. - CNPJ: 60.746.948/0001-12 - Banco Múltiplo - Carteira Comercial, de Investimento, 
              Crédito Imobiliário, Crédito Financiamento e Investimento, Arrendamento Mercantil e Câmbio.
            </p>
            <p className="mt-2">
              SAC: 0800 570 0000 (ligação gratuita) | Deficiente Auditivo: 0800 722 0099 | 
              Ouvidoria: 0800 570 0011 (ligação gratuita)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;