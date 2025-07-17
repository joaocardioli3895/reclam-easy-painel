import { MessageSquare, Clock, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative bg-gradient-hero text-primary-foreground py-20">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Sua Voz é Nossa
            <span className="block text-white/90">Prioridade</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in-up">
            Resolução rápida, segura e transparente para todas as suas questões bancárias. 
            Estamos aqui para ouvir e solucionar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-right">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-button font-semibold px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Fazer Reclamação
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg transition-all duration-300"
            >
              Acompanhar Status
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center animate-fade-in">
              <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">24h</h3>
              <p className="text-white/80">Tempo médio de resposta</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center animate-fade-in">
              <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
              <p className="text-white/80">Segurança garantida</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center animate-fade-in">
              <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">95%</h3>
              <p className="text-white/80">Satisfação dos clientes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-background" fill="currentColor" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C150,100 350,0 500,50 C650,100 850,0 1000,40 L1000,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;