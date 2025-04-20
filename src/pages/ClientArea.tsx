
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail, Key, User, Home, Calendar, FileText, MessageSquare, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

// Componente de login
const LoginForm = ({ onLogin }: { onLogin: () => void }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de login bem-sucedido
    toast({
      title: "Login bem-sucedido",
      description: "Bem-vindo(a) à sua área do cliente!",
    });
    
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-one-black">
      <div className="w-full max-w-md">
        <div className="dark-card">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full border-2 border-one-gold flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-one-gold" />
            </div>
            <h2 className="text-2xl font-bold text-one-white">Área do Cliente</h2>
            <p className="text-one-gray mt-2">Faça login para acessar sua conta</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-one-white mb-2">
                E-mail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-one-gray" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-one-dark-gray border border-gray-800 rounded-md pl-10 p-3 text-white"
                  placeholder="seu-email@exemplo.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-one-white mb-2">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Key className="h-5 w-5 text-one-gray" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-one-dark-gray border border-gray-800 rounded-md pl-10 p-3 text-white"
                  placeholder="********"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="h-4 w-4 text-one-gold focus:ring-one-gold border-gray-700 rounded bg-one-dark-gray"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-one-gray">
                  Lembrar-me
                </label>
              </div>
              <a href="#" className="text-sm text-one-gold hover:text-one-gold/80">
                Esqueceu a senha?
              </a>
            </div>

            <button type="submit" className="gold-button w-full py-3">
              Entrar
            </button>

            <div className="text-center mt-4">
              <p className="text-one-gray text-sm">
                Ainda não tem conta?{' '}
                <a href="#" className="text-one-gold hover:text-one-gold/80">
                  Cadastre-se
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Componente do Dashboard
const ClientDashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />;
      case 'services':
        return <ServicesTab />;
      case 'quotes':
        return <QuotesTab />;
      case 'support':
        return <SupportTab />;
      case 'schedule':
        return <ScheduleTab />;
      case 'docs':
        return <DocsTab />;
      case 'profile':
        return <ProfileTab />;
      default:
        return <DashboardTab />;
    }
  };
  
  return (
    <div className="min-h-screen bg-one-black">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="dark-card mb-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-one-dark-gray flex items-center justify-center mx-auto mb-3">
                  <User className="h-8 w-8 text-one-gold" />
                </div>
                <h3 className="text-one-white font-bold">Cliente Exemplo</h3>
                <p className="text-one-gray text-sm">cliente@exemplo.com</p>
              </div>

              <nav>
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveTab('dashboard')}
                      className={`w-full flex items-center gap-3 rounded-md px-4 py-2.5 transition-colors ${
                        activeTab === 'dashboard' 
                          ? 'bg-one-gold text-one-black font-medium' 
                          : 'text-one-white hover:bg-gray-800'
                      }`}
                    >
                      <Home className="h-5 w-5" />
                      Dashboard
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('services')}
                      className={`w-full flex items-center gap-3 rounded-md px-4 py-2.5 transition-colors ${
                        activeTab === 'services' 
                          ? 'bg-one-gold text-one-black font-medium' 
                          : 'text-one-white hover:bg-gray-800'
                      }`}
                    >
                      <FileText className="h-5 w-5" />
                      Histórico de Serviços
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('quotes')}
                      className={`w-full flex items-center gap-3 rounded-md px-4 py-2.5 transition-colors ${
                        activeTab === 'quotes' 
                          ? 'bg-one-gold text-one-black font-medium' 
                          : 'text-one-white hover:bg-gray-800'
                      }`}
                    >
                      <FileText className="h-5 w-5" />
                      Meus Orçamentos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('support')}
                      className={`w-full flex items-center gap-3 rounded-md px-4 py-2.5 transition-colors ${
                        activeTab === 'support' 
                          ? 'bg-one-gold text-one-black font-medium' 
                          : 'text-one-white hover:bg-gray-800'
                      }`}
                    >
                      <MessageSquare className="h-5 w-5" />
                      Suporte
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('schedule')}
                      className={`w-full flex items-center gap-3 rounded-md px-4 py-2.5 transition-colors ${
                        activeTab === 'schedule' 
                          ? 'bg-one-gold text-one-black font-medium' 
                          : 'text-one-white hover:bg-gray-800'
                      }`}
                    >
                      <Calendar className="h-5 w-5" />
                      Agendamentos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('docs')}
                      className={`w-full flex items-center gap-3 rounded-md px-4 py-2.5 transition-colors ${
                        activeTab === 'docs' 
                          ? 'bg-one-gold text-one-black font-medium' 
                          : 'text-one-white hover:bg-gray-800'
                      }`}
                    >
                      <FileText className="h-5 w-5" />
                      Documentos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`w-full flex items-center gap-3 rounded-md px-4 py-2.5 transition-colors ${
                        activeTab === 'profile' 
                          ? 'bg-one-gold text-one-black font-medium' 
                          : 'text-one-white hover:bg-gray-800'
                      }`}
                    >
                      <Settings className="h-5 w-5" />
                      Meus Dados
                    </button>
                  </li>
                </ul>
              </nav>

              <div className="pt-6 mt-6 border-t border-gray-800">
                <button
                  onClick={onLogout}
                  className="w-full flex items-center justify-center gap-3 text-one-white bg-one-black hover:bg-red-900/30 rounded-md px-4 py-2.5 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  Sair
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

// Tabs de conteúdo
const DashboardTab = () => {
  return (
    <div>
      <div className="dark-card mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-one-white">Bem-vindo(a), Cliente Exemplo!</h2>
          <span className="bg-one-gold/20 text-one-gold px-3 py-1 rounded-full text-sm">Cliente desde: Jan/2025</span>
        </div>
        <p className="text-one-gray mb-3">
          Aqui você pode gerenciar seus serviços, orçamentos e agendamentos com a One Security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="dark-card">
          <h3 className="text-lg font-bold text-one-white mb-2">Serviços Ativos</h3>
          <div className="flex items-center">
            <div className="text-3xl font-bold text-one-gold">2</div>
            <div className="ml-4 text-one-gray">Sistemas em funcionamento</div>
          </div>
        </div>
        <div className="dark-card">
          <h3 className="text-lg font-bold text-one-white mb-2">Próximo Agendamento</h3>
          <div className="text-one-gray">
            <div className="text-one-gold font-medium">28/04/2025</div>
            <div>Manutenção preventiva</div>
          </div>
        </div>
        <div className="dark-card">
          <h3 className="text-lg font-bold text-one-white mb-2">Orçamentos</h3>
          <div className="flex items-center">
            <div className="text-3xl font-bold text-one-gold">1</div>
            <div className="ml-4 text-one-gray">Pendente de aprovação</div>
          </div>
        </div>
      </div>

      <div className="dark-card">
        <h3 className="text-xl font-bold text-one-white mb-4">Atividade Recente</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-one-dark-gray rounded-full p-2 mr-3">
              <FileText className="h-4 w-4 text-one-gold" />
            </div>
            <div>
              <p className="text-one-white">Orçamento enviado</p>
              <p className="text-one-gray text-sm">Sistema de CFTV - 18/04/2025</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-one-dark-gray rounded-full p-2 mr-3">
              <Calendar className="h-4 w-4 text-one-gold" />
            </div>
            <div>
              <p className="text-one-white">Agendamento confirmado</p>
              <p className="text-one-gray text-sm">Manutenção preventiva - 15/04/2025</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-one-dark-gray rounded-full p-2 mr-3">
              <MessageSquare className="h-4 w-4 text-one-gold" />
            </div>
            <div>
              <p className="text-one-white">Chamado respondido</p>
              <p className="text-one-gray text-sm">Dúvida sobre configuração - 10/04/2025</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-800 text-center">
          <Link to="/quote" className="text-one-gold hover:text-one-gold/80">
            Solicitar novo orçamento
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServicesTab = () => (
  <div className="dark-card">
    <h2 className="text-2xl font-bold text-one-white mb-6">Histórico de Serviços</h2>
    
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-left py-3 px-4 text-one-white">Serviço</th>
            <th className="text-left py-3 px-4 text-one-white">Data</th>
            <th className="text-left py-3 px-4 text-one-white">Status</th>
            <th className="text-right py-3 px-4 text-one-white">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-800">
            <td className="py-3 px-4 text-one-white">Instalação de CFTV</td>
            <td className="py-3 px-4 text-one-gray">10/01/2025</td>
            <td className="py-3 px-4">
              <span className="bg-green-900/30 text-green-500 px-2 py-1 rounded-full text-xs">Concluído</span>
            </td>
            <td className="py-3 px-4 text-right">
              <button className="text-one-gold hover:text-one-gold/80">Ver detalhes</button>
            </td>
          </tr>
          <tr className="border-b border-gray-800">
            <td className="py-3 px-4 text-one-white">Manutenção Alarme</td>
            <td className="py-3 px-4 text-one-gray">15/02/2025</td>
            <td className="py-3 px-4">
              <span className="bg-green-900/30 text-green-500 px-2 py-1 rounded-full text-xs">Concluído</span>
            </td>
            <td className="py-3 px-4 text-right">
              <button className="text-one-gold hover:text-one-gold/80">Ver detalhes</button>
            </td>
          </tr>
          <tr>
            <td className="py-3 px-4 text-one-white">Instalação Controle de Acesso</td>
            <td className="py-3 px-4 text-one-gray">28/04/2025</td>
            <td className="py-3 px-4">
              <span className="bg-blue-900/30 text-blue-500 px-2 py-1 rounded-full text-xs">Agendado</span>
            </td>
            <td className="py-3 px-4 text-right">
              <button className="text-one-gold hover:text-one-gold/80">Ver detalhes</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const QuotesTab = () => (
  <div className="dark-card">
    <h2 className="text-2xl font-bold text-one-white mb-6">Meus Orçamentos</h2>
    
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-left py-3 px-4 text-one-white">Serviço</th>
            <th className="text-left py-3 px-4 text-one-white">Data</th>
            <th className="text-left py-3 px-4 text-one-white">Valor</th>
            <th className="text-left py-3 px-4 text-one-white">Status</th>
            <th className="text-right py-3 px-4 text-one-white">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-800">
            <td className="py-3 px-4 text-one-white">Ampliação CFTV</td>
            <td className="py-3 px-4 text-one-gray">18/04/2025</td>
            <td className="py-3 px-4 text-one-white">R$ 2.450,00</td>
            <td className="py-3 px-4">
              <span className="bg-yellow-900/30 text-yellow-500 px-2 py-1 rounded-full text-xs">Pendente</span>
            </td>
            <td className="py-3 px-4 text-right space-x-2">
              <button className="text-green-500 hover:text-green-400">Aprovar</button>
              <button className="text-red-500 hover:text-red-400">Recusar</button>
            </td>
          </tr>
          <tr>
            <td className="py-3 px-4 text-one-white">Sistema de Alarme</td>
            <td className="py-3 px-4 text-one-gray">05/03/2025</td>
            <td className="py-3 px-4 text-one-white">R$ 1.850,00</td>
            <td className="py-3 px-4">
              <span className="bg-green-900/30 text-green-500 px-2 py-1 rounded-full text-xs">Aprovado</span>
            </td>
            <td className="py-3 px-4 text-right">
              <button className="text-one-gold hover:text-one-gold/80">Ver detalhes</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 text-center">
      <Link to="/quote" className="gold-button">
        Solicitar Novo Orçamento
      </Link>
    </div>
  </div>
);

const SupportTab = () => (
  <div>
    <div className="dark-card mb-6">
      <h2 className="text-2xl font-bold text-one-white mb-6">Suporte Técnico</h2>
      
      <form className="space-y-6">
        <div>
          <label htmlFor="subject" className="block text-one-white mb-2">
            Assunto
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
            placeholder="Descreva brevemente o assunto"
          />
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-one-white mb-2">
            Tipo de Serviço
          </label>
          <select
            id="serviceType"
            name="serviceType"
            className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
          >
            <option value="">Selecione o tipo de serviço</option>
            <option value="cftv">CFTV</option>
            <option value="alarm">Sistema de Alarme</option>
            <option value="access">Controle de Acesso</option>
            <option value="other">Outro</option>
          </select>
        </div>

        <div>
          <label htmlFor="priority" className="block text-one-white mb-2">
            Prioridade
          </label>
          <select
            id="priority"
            name="priority"
            className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
          >
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
            <option value="urgent">Urgente</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-one-white mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white h-32"
            placeholder="Descreva detalhadamente o seu problema ou dúvida"
          />
        </div>

        <button type="submit" className="gold-button w-full py-3">
          Enviar Chamado
        </button>
      </form>
    </div>

    <div className="dark-card">
      <h3 className="text-xl font-bold text-one-white mb-4">Histórico de Chamados</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between p-4 border border-gray-800 rounded-md">
          <div>
            <h4 className="text-one-white font-medium">Dúvida sobre configuração de câmera</h4>
            <p className="text-one-gray text-sm mt-1">Aberto em: 10/04/2025</p>
          </div>
          <div>
            <span className="bg-green-900/30 text-green-500 px-2 py-1 rounded-full text-xs">Resolvido</span>
          </div>
        </div>
        
        <div className="flex justify-between p-4 border border-gray-800 rounded-md">
          <div>
            <h4 className="text-one-white font-medium">Alarme disparando sem motivo</h4>
            <p className="text-one-gray text-sm mt-1">Aberto em: 22/03/2025</p>
          </div>
          <div>
            <span className="bg-green-900/30 text-green-500 px-2 py-1 rounded-full text-xs">Resolvido</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScheduleTab = () => (
  <div className="dark-card">
    <h2 className="text-2xl font-bold text-one-white mb-6">Agendamentos</h2>
    
    <div className="mb-8">
      <h3 className="text-xl font-medium text-one-white mb-4">Próximos Agendamentos</h3>
      <div className="space-y-4">
        <div className="flex p-4 border border-gray-800 rounded-md">
          <div className="flex flex-col items-center justify-center bg-one-dark-gray p-3 rounded-md mr-4">
            <span className="text-one-gold text-xl font-bold">28</span>
            <span className="text-one-gray text-sm">Abr</span>
          </div>
          <div className="flex-grow">
            <h4 className="text-one-white font-medium">Manutenção Preventiva</h4>
            <p className="text-one-gray mt-1">Horário: 14:30 - 16:30</p>
            <div className="flex items-center mt-2">
              <span className="bg-blue-900/30 text-blue-500 px-2 py-1 rounded-full text-xs mr-2">Confirmado</span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="text-one-gold hover:text-one-gold/80">Reagendar</button>
          </div>
        </div>
      </div>
    </div>
    
    <div>
      <h3 className="text-xl font-medium text-one-white mb-4">Solicitar Agendamento</h3>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="service" className="block text-one-white mb-2">
              Tipo de Serviço
            </label>
            <select
              id="service"
              name="service"
              className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
            >
              <option value="">Selecione o serviço</option>
              <option value="maintenance">Manutenção Preventiva</option>
              <option value="repair">Reparo</option>
              <option value="expansion">Ampliação de Sistema</option>
              <option value="consultation">Consultoria</option>
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-one-white mb-2">
              Data Preferencial
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-one-white mb-2">
              Horário Preferencial
            </label>
            <select
              id="time"
              name="time"
              className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
            >
              <option value="">Selecione o horário</option>
              <option value="morning">Manhã (8h-12h)</option>
              <option value="afternoon">Tarde (13h-17h)</option>
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="block text-one-white mb-2">
              Observações
            </label>
            <textarea
              id="notes"
              name="notes"
              className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white h-[88px]"
              placeholder="Informações adicionais para a visita"
            />
          </div>
        </div>

        <button type="submit" className="gold-button">
          Solicitar Agendamento
        </button>
      </form>
    </div>
  </div>
);

const DocsTab = () => (
  <div className="dark-card">
    <h2 className="text-2xl font-bold text-one-white mb-6">Documentos</h2>
    
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-medium text-one-white mb-4">Contratos</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-one-dark-gray rounded-md">
            <div className="flex items-center">
              <div className="bg-one-gold/20 p-2 rounded-md mr-3">
                <FileText className="h-5 w-5 text-one-gold" />
              </div>
              <div>
                <p className="text-one-white font-medium">Contrato de Manutenção</p>
                <p className="text-one-gray text-sm">Válido até: 31/12/2025</p>
              </div>
            </div>
            <button className="text-one-gold hover:text-one-gold/80">
              Download
            </button>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-one-dark-gray rounded-md">
            <div className="flex items-center">
              <div className="bg-one-gold/20 p-2 rounded-md mr-3">
                <FileText className="h-5 w-5 text-one-gold" />
              </div>
              <div>
                <p className="text-one-white font-medium">Contrato de Instalação - CFTV</p>
                <p className="text-one-gray text-sm">Assinado em: 10/01/2025</p>
              </div>
            </div>
            <button className="text-one-gold hover:text-one-gold/80">
              Download
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-medium text-one-white mb-4">Manuais Técnicos</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-one-dark-gray rounded-md">
            <div className="flex items-center">
              <div className="bg-one-gold/20 p-2 rounded-md mr-3">
                <FileText className="h-5 w-5 text-one-gold" />
              </div>
              <div>
                <p className="text-one-white font-medium">Manual do Usuário - NVR</p>
                <p className="text-one-gray text-sm">Última atualização: 15/02/2025</p>
              </div>
            </div>
            <button className="text-one-gold hover:text-one-gold/80">
              Download
            </button>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-one-dark-gray rounded-md">
            <div className="flex items-center">
              <div className="bg-one-gold/20 p-2 rounded-md mr-3">
                <FileText className="h-5 w-5 text-one-gold" />
              </div>
              <div>
                <p className="text-one-white font-medium">Manual do Aplicativo Mobile</p>
                <p className="text-one-gray text-sm">Última atualização: 05/03/2025</p>
              </div>
            </div>
            <button className="text-one-gold hover:text-one-gold/80">
              Download
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-medium text-one-white mb-4">Notas Fiscais</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-one-dark-gray rounded-md">
            <div className="flex items-center">
              <div className="bg-one-gold/20 p-2 rounded-md mr-3">
                <FileText className="h-5 w-5 text-one-gold" />
              </div>
              <div>
                <p className="text-one-white font-medium">NF 2025/001 - Instalação Inicial</p>
                <p className="text-one-gray text-sm">Emitida em: 15/01/2025</p>
              </div>
            </div>
            <button className="text-one-gold hover:text-one-gold/80">
              Download
            </button>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-one-dark-gray rounded-md">
            <div className="flex items-center">
              <div className="bg-one-gold/20 p-2 rounded-md mr-3">
                <FileText className="h-5 w-5 text-one-gold" />
              </div>
              <div>
                <p className="text-one-white font-medium">NF 2025/015 - Manutenção</p>
                <p className="text-one-gray text-sm">Emitida em: 20/02/2025</p>
              </div>
            </div>
            <button className="text-one-gold hover:text-one-gold/80">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProfileTab = () => (
  <div className="dark-card">
    <h2 className="text-2xl font-bold text-one-white mb-6">Meus Dados</h2>
    
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-one-white mb-2">
            Nome Completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
            defaultValue="Cliente Exemplo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-one-white mb-2">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
            defaultValue="cliente@exemplo.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-one-white mb-2">
            Telefone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
            defaultValue="(11) 98765-4321"
          />
        </div>

        <div>
          <label htmlFor="docId" className="block text-one-white mb-2">
            CPF/CNPJ
          </label>
          <input
            id="docId"
            name="docId"
            type="text"
            className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
            defaultValue="123.456.789-00"
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-medium text-one-white mb-4">Endereço</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <label htmlFor="street" className="block text-one-white mb-2">
              Rua
            </label>
            <input
              id="street"
              name="street"
              type="text"
              className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
              defaultValue="Av. Paulista"
            />
          </div>

          <div>
            <label htmlFor="number" className="block text-one-white mb-2">
              Número
            </label>
            <input
              id="number"
              name="number"
              type="text"
              className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
              defaultValue="1000"
            />
          </div>

          <div>
            <label htmlFor="complement" className="block text-one-white mb-2">
              Complemento
            </label>
            <input
              id="complement"
              name="complement"
              type="text"
              className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
              defaultValue="Apto 101"
            />
          </div>

          <div>
            <label htmlFor="neighborhood" className="block text-one-white mb-2">
              Bairro
            </label>
            <input
              id="neighborhood"
              name="neighborhood"
              type="text"
              className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
              defaultValue="Bela Vista"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-one-white mb-2">
              Cidade
            </label>
            <input
              id="city"
              name="city"
              type="text"
              className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
              defaultValue="São Paulo"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-medium text-one-white mb-4">Alterar Senha</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="currentPassword" className="block text-one-white mb-2">
              Senha Atual
            </label>
            <input
              id="currentPassword"
              name="currentPassword"
              type="password"
              className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
              placeholder="********"
            />
          </div>

          <div>
            <label htmlFor="newPassword" className="block text-one-white mb-2">
              Nova Senha
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
              placeholder="********"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-one-white mb-2">
              Confirmar Nova Senha
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
              placeholder="********"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        <button type="button" className="border border-one-gold text-one-gold px-6 py-2 rounded-md hover:bg-one-gold/10 transition">
          Cancelar
        </button>
        <button type="submit" className="gold-button px-6">
          Salvar Alterações
        </button>
      </div>
    </form>
  </div>
);

// Componente principal da área do cliente
const ClientArea = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  return isLoggedIn ? (
    <ClientDashboard onLogout={handleLogout} />
  ) : (
    <LoginForm onLogin={handleLogin} />
  );
};

export default ClientArea;
