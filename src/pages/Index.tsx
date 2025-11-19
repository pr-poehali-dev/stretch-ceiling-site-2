import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const whatsappNumber = "79146666764";
  const phoneDisplay = "+7 (914) 666-67-64";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Здравствуйте! Меня зовут ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const features = [
    {
      icon: "Award",
      title: "Премиальное качество",
      description: "Используем только европейские материалы высшего класса"
    },
    {
      icon: "Clock",
      title: "Быстрый монтаж",
      description: "Установка потолка за 3-4 часа без пыли и грязи"
    },
    {
      icon: "Shield",
      title: "Гарантия 15 лет",
      description: "Официальная гарантия производителя на все работы"
    },
    {
      icon: "Sparkles",
      title: "Безупречный результат",
      description: "Идеально ровная поверхность и роскошный внешний вид"
    }
  ];

  const gallery = [
    { title: "Глянцевые потолки", desc: "Визуально увеличивают пространство" },
    { title: "Матовые потолки", desc: "Элегантная классика для любого интерьера" },
    { title: "Сатиновые потолки", desc: "Изысканный перламутровый блеск" },
    { title: "Многоуровневые", desc: "Уникальные дизайнерские решения" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* WhatsApp Float Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 animate-fade-in"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={28} />
      </button>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full">
            <span className="text-orange-400 font-medium text-sm tracking-wider">ПРЕМИАЛЬНЫЕ НАТЯЖНЫЕ ПОТОЛКИ</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Роскошные потолки
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mt-2">
              для вашего дома
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Европейское качество и безупречный сервис в Артёме
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-12 text-slate-300">
            <Icon name="MapPin" size={20} className="text-orange-400" />
            <span className="text-lg">г. Артём, Приморский край</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={handleWhatsApp}
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-0"
            >
              <Icon name="MessageCircle" size={24} className="mr-2" />
              Написать в WhatsApp
            </Button>
            
            <a href={`tel:${phoneDisplay}`} className="flex items-center gap-3 text-white hover:text-orange-400 transition-colors">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                <Icon name="Phone" size={24} />
              </div>
              <span className="text-2xl font-semibold">{phoneDisplay}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {[
              { icon: "CheckCircle2", text: "Бесплатный замер" },
              { icon: "Zap", text: "Установка за 1 день" },
              { icon: "Award", text: "Гарантия 15 лет" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all hover:scale-105">
                <Icon name={item.icon} className="text-orange-400" size={24} />
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-center text-slate-400 text-lg mb-16 max-w-2xl mx-auto">
            Более 500 довольных клиентов в Артёме и Приморском крае
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group"
              >
                <div className="bg-gradient-to-br from-orange-500 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon} className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Виды потолков
          </h2>
          <p className="text-center text-slate-400 text-lg mb-16 max-w-2xl mx-auto">
            Широкий выбор фактур и цветов для любого интерьера
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Icon name="Sparkles" size={64} className="text-slate-600 group-hover:text-orange-400 transition-colors duration-500 group-hover:scale-125" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Бесплатный замер и расчёт
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
          </p>
          
          <Card className="max-w-2xl mx-auto p-8 bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="text-lg p-6 border-slate-300 focus:border-orange-500"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="text-lg p-6 border-slate-300 focus:border-orange-500"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Комментарий к заявке (необязательно)"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="min-h-32 text-lg p-6 border-slate-300 focus:border-orange-500"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-0"
              >
                <Icon name="Send" className="mr-2" />
                Отправить заявку в WhatsApp
              </Button>
              
              <p className="text-sm text-slate-600">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-4 border-t border-slate-800">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center gap-4 mb-6">
            <a href={`tel:${phoneDisplay}`} className="text-2xl font-bold text-white hover:text-orange-400 transition-colors">
              {phoneDisplay}
            </a>
            <Button 
              onClick={handleWhatsApp}
              variant="outline"
              className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
          
          <div className="text-slate-500 space-y-2">
            <p className="flex items-center justify-center gap-2">
              <Icon name="MapPin" size={16} />
              г. Артём, Приморский край
            </p>
            <p className="text-sm">
              © 2024 Натяжные потолки в Артёме. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
