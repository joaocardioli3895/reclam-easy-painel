import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  agency: string;
  account: string;
  complaintType: string;
  description: string;
}

interface FormErrors {
  [key: string]: string;
}

const ComplaintForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    cpf: '',
    email: '',
    phone: '',
    agency: '',
    account: '',
    complaintType: '',
    description: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const complaintTypes = [
    'Problemas com cartão de crédito',
    'Problemas com conta corrente',
    'Problemas com financiamentos',
    'Atendimento inadequado',
    'Cobrança indevida',
    'Problemas no app/internet banking',
    'Seguros',
    'Investimentos',
    'Outros'
  ];

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Nome deve ter pelo menos 2 caracteres' : '';
      case 'cpf':
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/;
        return !cpfRegex.test(value.replace(/\D/g, '')) ? 'CPF inválido' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'E-mail inválido' : '';
      case 'phone':
        const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$|^\d{10,11}$/;
        return !phoneRegex.test(value.replace(/\D/g, '')) ? 'Telefone inválido' : '';
      case 'agency':
        return value.length < 3 ? 'Agência deve ter pelo menos 3 dígitos' : '';
      case 'account':
        return value.length < 4 ? 'Conta deve ter pelo menos 4 dígitos' : '';
      case 'complaintType':
        return !value ? 'Selecione o tipo de reclamação' : '';
      case 'description':
        return value.length < 10 ? 'Descrição deve ter pelo menos 10 caracteres' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (name: string, value: string) => {
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length === 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  };

  const validateStep = (stepNumber: number): boolean => {
    const stepFields = {
      1: ['name', 'cpf', 'email', 'phone'],
      2: ['agency', 'account', 'complaintType'],
      3: ['description']
    };

    const fieldsToValidate = stepFields[stepNumber as keyof typeof stepFields] || [];
    const newErrors: FormErrors = {};
    let isValid = true;

    fieldsToValidate.forEach(field => {
      const error = validateField(field, formData[field as keyof FormData]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(prev => ({ ...prev, ...newErrors }));
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Reclamação enviada com sucesso!",
        description: "Você receberá um e-mail de confirmação em breve. Protocolo: #2024" + Math.floor(Math.random() * 10000),
      });

      // Reset form
      setFormData({
        name: '',
        cpf: '',
        email: '',
        phone: '',
        agency: '',
        account: '',
        complaintType: '',
        description: ''
      });
      setStep(1);
    } catch (error) {
      toast({
        title: "Erro ao enviar reclamação",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = (step / 3) * 100;

  return (
    <section id="formulario" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nova Reclamação</h2>
            <p className="text-muted-foreground">Preencha os dados abaixo para registrar sua reclamação</p>
          </div>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Etapa {step} de 3</span>
                <span className="text-sm text-muted-foreground">
                  {step === 1 && 'Dados Pessoais'}
                  {step === 2 && 'Informações Bancárias'}
                  {step === 3 && 'Detalhes da Reclamação'}
                </span>
              </CardTitle>
              <CardDescription>
                <Progress value={progress} className="mt-2" />
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          onBlur={(e) => handleBlur('name', e.target.value)}
                          className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && (
                          <p className="text-destructive text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="cpf">CPF *</Label>
                        <Input
                          id="cpf"
                          value={formData.cpf}
                          onChange={(e) => {
                            const formatted = formatCPF(e.target.value);
                            if (formatted.length <= 14) {
                              handleInputChange('cpf', formatted);
                            }
                          }}
                          onBlur={(e) => handleBlur('cpf', e.target.value)}
                          placeholder="000.000.000-00"
                          className={errors.cpf ? 'border-destructive' : ''}
                        />
                        {errors.cpf && (
                          <p className="text-destructive text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.cpf}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={(e) => handleBlur('email', e.target.value)}
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          const formatted = formatPhone(e.target.value);
                          if (formatted.length <= 15) {
                            handleInputChange('phone', formatted);
                          }
                        }}
                        onBlur={(e) => handleBlur('phone', e.target.value)}
                        placeholder="(11) 99999-9999"
                        className={errors.phone ? 'border-destructive' : ''}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="agency">Agência *</Label>
                        <Input
                          id="agency"
                          value={formData.agency}
                          onChange={(e) => handleInputChange('agency', e.target.value)}
                          onBlur={(e) => handleBlur('agency', e.target.value)}
                          placeholder="0000"
                          className={errors.agency ? 'border-destructive' : ''}
                        />
                        {errors.agency && (
                          <p className="text-destructive text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.agency}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="account">Conta *</Label>
                        <Input
                          id="account"
                          value={formData.account}
                          onChange={(e) => handleInputChange('account', e.target.value)}
                          onBlur={(e) => handleBlur('account', e.target.value)}
                          placeholder="000000-0"
                          className={errors.account ? 'border-destructive' : ''}
                        />
                        {errors.account && (
                          <p className="text-destructive text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.account}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="complaintType">Tipo de Reclamação *</Label>
                      <Select
                        value={formData.complaintType}
                        onValueChange={(value) => handleInputChange('complaintType', value)}
                      >
                        <SelectTrigger className={errors.complaintType ? 'border-destructive' : ''}>
                          <SelectValue placeholder="Selecione o tipo de reclamação" />
                        </SelectTrigger>
                        <SelectContent>
                          {complaintTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.complaintType && (
                        <p className="text-destructive text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.complaintType}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <Label htmlFor="description">Descrição Detalhada *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        onBlur={(e) => handleBlur('description', e.target.value)}
                        placeholder="Descreva sua reclamação de forma detalhada. Inclua datas, valores e qualquer informação relevante..."
                        className={`min-h-32 ${errors.description ? 'border-destructive' : ''}`}
                      />
                      {errors.description && (
                        <p className="text-destructive text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.description}
                        </p>
                      )}
                      <p className="text-muted-foreground text-sm mt-1">
                        Caracteres: {formData.description.length}/1000
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-6">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Voltar
                    </Button>
                  )}
                  
                  <div className="ml-auto">
                    {step < 3 ? (
                      <Button type="button" onClick={nextStep} className="bg-gradient-primary">
                        Próximo
                      </Button>
                    ) : (
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-gradient-primary hover:shadow-button transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Enviar Reclamação
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComplaintForm;