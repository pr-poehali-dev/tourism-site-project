import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-teal-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Plane" size={32} className="text-orange-500" />
              <span className="text-2xl font-bold text-slate-800">TravelPro</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Главная</a>
              <a href="#tours" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Туры</a>
              <a href="#destinations" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Направления</a>
              <a href="#about" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">О компании</a>
              <a href="#contact" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-teal-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Откройте мир с нами
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
              Незабываемые путешествия в самые красивые уголки планеты. 
              Профессиональная организация туров с 2010 года.
            </p>
            
            {/* Search Form */}
            <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Направление</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите страну" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="thailand">Таиланд</SelectItem>
                        <SelectItem value="japan">Япония</SelectItem>
                        <SelectItem value="italy">Италия</SelectItem>
                        <SelectItem value="egypt">Египет</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Дата отъезда</label>
                    <Input type="date" className="w-full" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Количество туристов</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 человек</SelectItem>
                        <SelectItem value="2">2 человека</SelectItem>
                        <SelectItem value="3">3 человека</SelectItem>
                        <SelectItem value="4+">4+ человек</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-end">
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white font-semibold py-6 transform transition-transform hover:scale-105">
                      <Icon name="Search" size={20} className="mr-2" />
                      Найти тур
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Популярные направления</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Выберите из множества проверенных направлений для незабываемого отдыха
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group overflow-hidden hover-scale cursor-pointer bg-gradient-to-br from-white to-orange-50 border-0 shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/db471db0-2a75-4e5f-976a-6f4dc05669db.jpg" 
                  alt="Тропический рай"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Тропический рай</h3>
                <p className="text-slate-600 mb-4">Белоснежные пляжи, кристально чистая вода и экзотическая природа</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">от 45,000₽</span>
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover-scale cursor-pointer bg-gradient-to-br from-white to-teal-50 border-0 shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/a9cd3732-9414-47f1-9a44-9c09c7a810a6.jpg" 
                  alt="Городские приключения"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Городские приключения</h3>
                <p className="text-slate-600 mb-4">Исследуйте мировые столицы, их культуру и архитектуру</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-teal-500">от 32,000₽</span>
                  <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover-scale cursor-pointer bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/97a34aa1-f451-4f99-8e61-180b71671e57.jpg" 
                  alt="Горные вершины"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Горные вершины</h3>
                <p className="text-slate-600 mb-4">Активный отдых среди заснеженных пиков и альпийских лугов</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-500">от 38,000₽</span>
                  <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Online Booking Section */}
      <section id="tours" className="py-20 bg-gradient-to-r from-teal-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Онлайн бронирование</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Забронируйте тур мечты прямо сейчас. Быстро, удобно, безопасно.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Icon name="Calendar" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Выберите даты</h3>
                  <p className="opacity-80">Гибкие даты и удобное планирование</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Icon name="CreditCard" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Безопасная оплата</h3>
                  <p className="opacity-80">Защищенные платежи и гарантии</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Icon name="HeadphonesIcon" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Поддержка 24/7</h3>
                  <p className="opacity-80">Помощь на каждом этапе путешествия</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-white text-slate-800 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Быстрое бронирование</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Тип тура</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beach">Пляжный отдых</SelectItem>
                      <SelectItem value="city">Экскурсионный тур</SelectItem>
                      <SelectItem value="adventure">Приключенческий тур</SelectItem>
                      <SelectItem value="wellness">Оздоровительный тур</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input placeholder="Введите имя" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input placeholder="+7 (XXX) XXX-XX-XX" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="example@email.com" type="email" />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 py-6 text-lg font-semibold">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                
                <p className="text-xs text-slate-500 text-center">
                  Наш менеджер свяжется с вами в течение 15 минут
                </p>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15</div>
                <div className="opacity-80">лет опыта</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50k+</div>
                <div className="opacity-80">довольных туристов</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="opacity-80">положительных отзывов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">О нашей компании</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              TravelPro — ведущая туристическая компания с богатым опытом организации путешествий. 
              Мы создаем незабываемые впечатления для наших клиентов с 2010 года.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" size={32} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Профессионализм</h3>
              <p className="text-slate-600">
                Команда опытных экспертов по туризму с глубокими знаниями направлений
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={32} className="text-teal-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Надежность</h3>
              <p className="text-slate-600">
                Полное страхование, безопасность и поддержка на всех этапах путешествия
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={32} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Индивидуальный подход</h3>
              <p className="text-slate-600">
                Каждый тур разрабатывается с учетом ваших пожеланий и предпочтений
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-slate-600">
              Готовы ответить на все ваши вопросы и помочь спланировать идеальное путешествие
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 rounded-full p-3">
                  <Icon name="MapPin" size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Адрес офиса</h3>
                  <p className="text-slate-600">г. Москва, ул. Тверская, 15, офис 402</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 rounded-full p-3">
                  <Icon name="Phone" size={24} className="text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Телефон</h3>
                  <p className="text-slate-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Icon name="Mail" size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Email</h3>
                  <p className="text-slate-600">info@travelpro.ru</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <Icon name="Clock" size={24} className="text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Режим работы</h3>
                  <p className="text-slate-600">Пн-Пт: 9:00-19:00, Сб-Вс: 10:00-17:00</p>
                </div>
              </div>
            </div>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">Напишите нам</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Телефон</label>
                    <Input placeholder="+7 (XXX) XXX-XX-XX" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <Input placeholder="example@email.com" type="email" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Сообщение</label>
                  <textarea 
                    className="w-full min-h-[120px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Расскажите о ваших планах путешествия..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Plane" size={28} className="text-orange-500" />
                <span className="text-2xl font-bold">TravelPro</span>
              </div>
              <p className="text-slate-400 mb-6">
                Профессиональная организация туров и путешествий с 2010 года. 
                Ваши мечты — наша специальность.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="p-2">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="p-2">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="p-2">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Направления</h3>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Европа</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Азия</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Америка</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Африка</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Услуги</h3>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Групповые туры</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Индивидуальные туры</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Бронирование отелей</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Виза-поддержка</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Контакты</h3>
              <div className="space-y-3 text-slate-400">
                <p>г. Москва, ул. Тверская, 15</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@travelpro.ru</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 TravelPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;