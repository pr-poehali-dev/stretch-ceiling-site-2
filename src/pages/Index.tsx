import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [calcData, setCalcData] = useState({
    area: 20,
    type: "glossy",
    levels: "single"
  });

  const calculatePrice = () => {
    const basePrice = calcData.area * 450;
    const typeMultiplier = calcData.type === "glossy" ? 1.2 : calcData.type === "satin" ? 1.1 : 1;
    const levelsMultiplier = calcData.levels === "multi" ? 1.5 : 1;
    return Math.round(basePrice * typeMultiplier * levelsMultiplier);
  };

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
    { 
      title: "Глянцевые потолки", 
      desc: "Визуально увеличивают пространство",
      image: "https://cdn.poehali.dev/projects/39caeb15-ed88-4972-9dbb-cb4fea160d46/files/d45ed70f-2540-49d4-9740-04793c9b8f71.jpg"
    },
    { 
      title: "Матовые потолки", 
      desc: "Элегантная классика для любого интерьера",
      image: "https://cdn.poehali.dev/projects/39caeb15-ed88-4972-9dbb-cb4fea160d46/files/fa40b0a7-e6e2-415f-9dd6-292bdac7d0d0.jpg"
    },
    { 
      title: "Многоуровневые", 
      desc: "Уникальные дизайнерские решения",
      image: "https://cdn.poehali.dev/projects/39caeb15-ed88-4972-9dbb-cb4fea160d46/files/17900d66-5060-4f5e-ba89-fbf62c489a2b.jpg"
    }
  ];

  const reviews = [
    {
      name: "Елена Петрова",
      rating: 5,
      text: "Отличная работа! Установили потолок в гостиной за 4 часа. Качество на высоте, все аккуратно и чисто. Рекомендую!",
      date: "15 октября 2024"
    },
    {
      name: "Михаил Сергеев",
      rating: 5,
      text: "Делали потолки во всей квартире. Профессиональная команда, приехали вовремя, работали быстро. Результат превзошел ожидания!",
      date: "3 ноября 2024"
    },
    {
      name: "Анна Ковалёва",
      rating: 5,
      text: "Прекрасное соотношение цены и качества. Глянцевый потолок смотрится дорого и элегантно. Спасибо за работу!",
      date: "22 ноября 2024"
    },
    {
      name: "Дмитрий Иванов",
      rating: 5,
      text: "Заказывали многоуровневый потолок с подсветкой. Сделали быстро, качественно, с гарантией. Очень довольны результатом!",
      date: "1 декабря 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={28} />
      </button>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-wider mb-4">
            Натяжные потолки в Артёме
          </p>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Роскошные потолки
            <span className="block text-orange-500 mt-2">
              для вашего дома
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Европейское качество и безупречный сервис
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleWhatsApp}
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg"
            >
              <Icon name="MessageCircle" size={24} className="mr-2" />
              Написать в WhatsApp
            </Button>
            
            <a href={`tel:${phoneDisplay}`} className="flex items-center gap-3 text-gray-900 hover:text-orange-500 transition-colors">
              <Icon name="Phone" size={24} />
              <span className="text-xl font-semibold">{phoneDisplay}</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {[
              { icon: "CheckCircle2", text: "Бесплатный замер" },
              { icon: "Zap", text: "Установка за 1 день" },
              { icon: "Award", text: "Гарантия 15 лет" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Icon name={item.icon} className="text-orange-500" size={20} />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Более 500 довольных клиентов в Артёме и Приморском крае
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-8 bg-white border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="bg-orange-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Icon name={feature.icon} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Виды потолков
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Широкий выбор фактур и цветов для любого интерьера
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {gallery.map((item, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-white border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Калькулятор стоимости
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Рассчитайте предварительную стоимость натяжного потолка
          </p>

          <Card className="max-w-3xl mx-auto p-8 bg-white">
            <div className="space-y-8">
              <div>
                <Label htmlFor="area" className="text-gray-900 text-lg mb-4 block">
                  Площадь помещения: <span className="text-orange-500 font-bold">{calcData.area} м²</span>
                </Label>
                <Slider
                  id="area"
                  min={10}
                  max={100}
                  step={5}
                  value={[calcData.area]}
                  onValueChange={(value) => setCalcData({...calcData, area: value[0]})}
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="type" className="text-gray-900 text-lg mb-4 block">
                  Тип потолка
                </Label>
                <Select value={calcData.type} onValueChange={(value) => setCalcData({...calcData, type: value})}>
                  <SelectTrigger id="type" className="w-full text-lg p-6">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="matte">Матовый</SelectItem>
                    <SelectItem value="satin">Сатиновый (+10%)</SelectItem>
                    <SelectItem value="glossy">Глянцевый (+20%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="levels" className="text-gray-900 text-lg mb-4 block">
                  Уровни
                </Label>
                <Select value={calcData.levels} onValueChange={(value) => setCalcData({...calcData, levels: value})}>
                  <SelectTrigger id="levels" className="w-full text-lg p-6">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Одноуровневый</SelectItem>
                    <SelectItem value="multi">Многоуровневый (+50%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600 text-lg">Предварительная стоимость:</span>
                  <span className="text-4xl font-bold text-orange-500">
                    {calculatePrice().toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6 text-lg"
                >
                  <Icon name="MessageCircle" className="mr-2" />
                  Получить точный расчёт в WhatsApp
                </Button>
                <p className="text-gray-500 text-sm text-center mt-4">
                  * Точная стоимость рассчитывается после бесплатного замера
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Более 500 довольных клиентов в Артёме доверяют нам
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                className="p-8 bg-white border-gray-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12 bg-orange-500">
                    <AvatarFallback className="text-white font-bold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-bold text-lg">{review.name}</h3>
                    <div className="flex gap-1 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-orange-500 fill-orange-500" size={16} />
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <p className="text-gray-700">{review.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-orange-500">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Бесплатный замер и расчёт
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
          </p>
          
          <Card className="max-w-2xl mx-auto p-8 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="text-lg p-6"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="text-lg p-6"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Комментарий к заявке (необязательно)"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="min-h-32 text-lg p-6"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6 text-lg"
              >
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4">Натяжные потолки в Артёме</h3>
            <div className="flex items-center justify-center gap-2 text-gray-400 mb-2">
              <Icon name="MapPin" size={20} className="text-orange-500" />
              <span>г. Артём, Приморский край</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Icon name="Phone" size={20} className="text-orange-500" />
              <a href={`tel:${phoneDisplay}`} className="hover:text-orange-500 transition-colors">
                {phoneDisplay}
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 Натяжные потолки. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
