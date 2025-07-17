import { Shield, Clock, Lock, CheckCircle, Star, Users, Award, FileCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CredibilitySection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Segurança SSL",
      description: "Criptografia de ponta a ponta para proteger seus dados"
    },
    {
      icon: Lock,
      title: "LGPD Compliant",
      description: "Seus dados são tratados conforme a Lei Geral de Proteção de Dados"
    },
    {
      icon: FileCheck,
      title: "Certificação ISO",
      description: "Processos certificados para garantir qualidade e segurança"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais treinados para resolução rápida e eficiente"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Recebimento",
      description: "Sua reclamação é registrada em nosso sistema seguro",
      time: "Imediato"
    },
    {
      number: "02",
      title: "Análise",
      description: "Nossa equipe analisa o caso e identifica a melhor solução",
      time: "Até 24h"
    },
    {
      number: "03",
      title: "Resolução",
      description: "Implementamos a solução e entramos em contato",
      time: "Até 10 dias"
    },
    {
      number: "04",
      title: "Acompanhamento",
      description: "Verificamos sua satisfação com a resolução",
      time: "Até 15 dias"
    }
  ];

  const stats = [
    {
      icon: Star,
      value: "4.8/5",
      label: "Avaliação média",
      sublabel: "baseada em +10.000 avaliações"
    },
    {
      icon: Clock,
      value: "24h",
      label: "Tempo médio",
      sublabel: "para primeira resposta"
    },
    {
      icon: CheckCircle,
      value: "95%",
      label: "Taxa de resolução",
      sublabel: "no primeiro contato"
    },
    {
      icon: Award,
      value: "15+",
      label: "Anos de experiência",
      sublabel: "resolvendo questões bancárias"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Confiança e Segurança</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Utilizamos os mais altos padrões de segurança e qualidade para garantir a melhor experiência 
            na resolução das suas demandas bancárias.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="bg-primary-light rounded-full p-3 w-fit mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-card rounded-2xl p-8 mb-16 shadow-elegant">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Como Funciona o Processo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="relative animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="h-full hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                        <div className="text-sm text-primary font-medium">{step.time}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <h4 className="text-lg font-semibold text-foreground mb-6">Certificações e Parcerias</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium">ISO 27001</div>
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium">SSL 256-bit</div>
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium">LGPD Compliant</div>
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium">Banco Central</div>
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium">PROCON</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;