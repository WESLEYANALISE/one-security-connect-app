
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

type ServiceType = 'cftv' | 'alarm' | 'access';

const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    serviceType: '' as ServiceType | '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação simples
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Aqui seria a integração com backend
    console.log('Form data submitted:', formData);
    
    toast({
      title: "Orçamento solicitado!",
      description: "Entraremos em contato em breve.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      serviceType: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="dark-card">
      <h2 className="text-2xl font-bold text-one-white mb-6">Solicite seu orçamento</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-one-white mb-2">
            Nome completo*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-one-black border border-gray-800 rounded-md p-3 text-white"
            placeholder="Seu nome"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-one-white mb-2">
            E-mail*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-one-black border border-gray-800 rounded-md p-3 text-white"
            placeholder="seu-email@exemplo.com"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-one-white mb-2">
            Telefone*
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-one-black border border-gray-800 rounded-md p-3 text-white"
            placeholder="(00) 00000-0000"
            required
          />
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-one-white mb-2">
            Serviço de interesse*
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full bg-one-black border border-gray-800 rounded-md p-3 text-white"
            required
          >
            <option value="">Selecione um serviço</option>
            <option value="cftv">Sistema de CFTV</option>
            <option value="alarm">Sistema de Alarme</option>
            <option value="access">Controle de Acesso</option>
          </select>
        </div>

        <div>
          <label htmlFor="address" className="block text-one-white mb-2">
            Endereço
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            className="w-full bg-one-black border border-gray-800 rounded-md p-3 text-white"
            placeholder="Rua, número"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="city" className="block text-one-white mb-2">
              Cidade
            </label>
            <input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-one-black border border-gray-800 rounded-md p-3 text-white"
              placeholder="Cidade"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-one-white mb-2">
              Estado
            </label>
            <input
              id="state"
              name="state"
              type="text"
              value={formData.state}
              onChange={handleChange}
              className="w-full bg-one-black border border-gray-800 rounded-md p-3 text-white"
              placeholder="Estado"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-one-white mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-one-black border border-gray-800 rounded-md p-3 text-white h-32"
          placeholder="Descreva o que você precisa..."
        />
      </div>

      <button type="submit" className="gold-button w-full py-3 text-lg">
        Solicitar Orçamento
      </button>

      <p className="text-one-gray text-sm mt-4 text-center">
        * Campos obrigatórios. Seus dados estão protegidos conforme nossa política de privacidade.
      </p>
    </form>
  );
};

export default QuoteForm;
