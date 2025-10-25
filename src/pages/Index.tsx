import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import BongoCat from '@/components/BongoCat';

type Language = 'ru' | 'en';

export default function Index() {
  const [selectedTariff, setSelectedTariff] = useState('');
  const [language, setLanguage] = useState<Language>('ru');
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'ru' ? '✨ Заявка отправлена!' : '✨ Request sent!',
      description: language === 'ru' ? 'Мы свяжемся с вами в ближайшее время' : 'We will contact you soon',
    });
  };

  const translations = {
    ru: {
      nav: ['Главная', 'Тарифы', 'Примеры', 'FAQ', 'Заказать'],
      hero: {
        badge: '❗ОЖИВИ СВОЁ ПРОШЛОЕ❗',
        title: 'Память на всю жизнь',
        subtitle: 'Превратите старые фотографии в живые воспоминания. Оживите любой момент вашей истории!',
        cta: 'Оживить фото прямо сейчас'
      },
      tariffs: {
        title: 'Выберите тариф',
        subtitle: 'Подберите идеальный вариант для ваших воспоминаний',
        cards: [
          {
            title: 'Одиночное фото',
            description: 'Оживите ваши воспоминания',
            options: [{ duration: '5 секунд', price: '100₽' }, { duration: '8 секунд', price: '150₽' }],
            features: ['Любое фото', 'Высокое качество', 'Быстрая обработка']
          },
          {
            title: 'Видеоролик',
            description: 'Создайте видео из фотографий',
            options: [{ duration: '1 фото', price: '20₽', note: 'минимум 5 фото' }],
            features: ['Музыкальное сопровождение', 'Красивые переходы', 'Ваш текст']
          },
          {
            title: 'Живой видеоролик',
            description: 'Видео с оживающими фотографиями',
            options: [{ duration: '5 секунд', price: '50₽' }, { duration: '8 секунд', price: '80₽' }],
            features: ['Живые фото', 'Ваша музыка', 'Профессиональный монтаж', 'Минимум 3 фото']
          }
        ],
        button: 'Выбрать тариф',
        popular: 'ПОПУЛЯРНО'
      },
      examples: {
        title: 'Примеры наших работ',
        items: [
          { title: 'Свадебные моменты', description: 'Оживленные фото торжества' },
          { title: 'Детские воспоминания', description: 'Первые шаги в движении' },
          { title: 'Семейный архив', description: 'История семьи в динамике' }
        ]
      },
      faq: {
        title: 'Частые вопросы',
        items: [
          { q: 'Как оформить заказ?', a: 'Выберите тариф, заполните форму заказа, отправьте ваши фотографии и описание. Мы свяжемся с вами для уточнения деталей и оплаты.' },
          { q: 'Какие фотографии можно использовать?', a: 'Любые! Старые семейные фото, свадебные снимки, детские фотографии — мы оживим всё. Главное, чтобы качество позволяло обработку.' },
          { q: 'Сколько времени занимает обработка?', a: 'Обычно 1-3 рабочих дня в зависимости от объема заказа. Срочные заказы обсуждаются индивидуально.' },
          { q: 'Можно ли добавить свою музыку?', a: 'Да! Для видеороликов вы можете указать название трека или просто описать желаемое настроение музыки.' },
          { q: 'Какой формат видео я получу?', a: 'MP4 в высоком разрешении, оптимизированный для просмотра на любых устройствах и публикации в соцсетях.' }
        ]
      },
      order: {
        title: 'Оформить заказ',
        subtitle: 'Заполните форму, и мы свяжемся с вами в ближайшее время',
        name: 'Ваше имя',
        namePlaceholder: 'Введите ваше имя',
        contact: 'Контакт (Telegram/WhatsApp/Email)',
        contactPlaceholder: '@username или номер телефона',
        tariff: 'Выбранный тариф',
        tariffPlaceholder: 'Например: Живой видеоролик 8 секунд',
        description: 'Описание заказа',
        descriptionPlaceholder: 'Опишите, что должно происходить на фото/видео, какая музыка, сколько фотографий...',
        submit: 'Отправить заявку'
      },
      footer: {
        tagline: 'Превращаем воспоминания в живые истории',
        copyright: '© 2024 Оживи Момент. Все права защищены.'
      }
    },
    en: {
      nav: ['Home', 'Pricing', 'Examples', 'FAQ', 'Order'],
      hero: {
        badge: '❗REVIVE YOUR PAST❗',
        title: 'Memories for a Lifetime',
        subtitle: 'Turn old photos into living memories. Bring any moment of your history to life!',
        cta: 'Animate Photo Now'
      },
      tariffs: {
        title: 'Choose Your Plan',
        subtitle: 'Find the perfect option for your memories',
        cards: [
          {
            title: 'Single Photo',
            description: 'Bring your memories to life',
            options: [{ duration: '5 seconds', price: '$2' }, { duration: '8 seconds', price: '$3' }],
            features: ['Any photo', 'High quality', 'Fast processing']
          },
          {
            title: 'Video Slideshow',
            description: 'Create video from photos',
            options: [{ duration: '1 photo', price: '$0.40', note: 'minimum 5 photos' }],
            features: ['Music included', 'Beautiful transitions', 'Custom text']
          },
          {
            title: 'Animated Video',
            description: 'Video with animated photos',
            options: [{ duration: '5 seconds', price: '$1' }, { duration: '8 seconds', price: '$1.60' }],
            features: ['Animated photos', 'Your music', 'Professional editing', 'Minimum 3 photos']
          }
        ],
        button: 'Select Plan',
        popular: 'POPULAR'
      },
      examples: {
        title: 'Our Work Examples',
        items: [
          { title: 'Wedding Moments', description: 'Animated celebration photos' },
          { title: 'Childhood Memories', description: 'First steps in motion' },
          { title: 'Family Archive', description: 'Family history in motion' }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          { q: 'How to place an order?', a: 'Choose a plan, fill out the order form, send your photos and description. We will contact you to confirm details and payment.' },
          { q: 'What photos can I use?', a: 'Any! Old family photos, wedding pictures, childhood photos — we animate everything. Main thing is quality allows processing.' },
          { q: 'How long does processing take?', a: 'Usually 1-3 business days depending on order volume. Rush orders are discussed individually.' },
          { q: 'Can I add my own music?', a: 'Yes! For videos you can specify track name or just describe desired music mood.' },
          { q: 'What video format will I get?', a: 'MP4 in high resolution, optimized for viewing on any device and social media publishing.' }
        ]
      },
      order: {
        title: 'Place Order',
        subtitle: 'Fill out the form and we will contact you soon',
        name: 'Your Name',
        namePlaceholder: 'Enter your name',
        contact: 'Contact (Telegram/WhatsApp/Email)',
        contactPlaceholder: '@username or phone number',
        tariff: 'Selected Plan',
        tariffPlaceholder: 'E.g.: Animated Video 8 seconds',
        description: 'Order Description',
        descriptionPlaceholder: 'Describe what should happen in photo/video, what music, how many photos...',
        submit: 'Send Request'
      },
      footer: {
        tagline: 'Turning memories into living stories',
        copyright: '© 2024 Revive Moment. All rights reserved.'
      }
    }
  };

  const t = translations[language];

  const tariffs = [
    {
      id: 'single',
      title: 'Одиночное фото',
      icon: 'Image',
      gradient: 'from-purple-500 to-pink-500',
      animationDelay: '0s',
      description: 'Оживите ваши воспоминания',
      options: [
        { duration: '5 секунд', price: '100₽' },
        { duration: '8 секунд', price: '150₽' },
      ],
      features: ['Любое фото', 'Высокое качество', 'Быстрая обработка'],
    },
    {
      id: 'simple-video',
      title: 'Видеоролик',
      icon: 'Film',
      gradient: 'from-orange-500 to-red-500',
      animationDelay: '0.2s',
      description: 'Создайте видео из фотографий',
      options: [
        { duration: '1 фото', price: '20₽', note: 'минимум 5 фото' },
      ],
      features: ['Музыкальное сопровождение', 'Красивые переходы', 'Ваш текст'],
    },
    {
      id: 'live-video',
      title: 'Живой видеоролик',
      icon: 'Sparkles',
      gradient: 'from-blue-500 to-purple-600',
      animationDelay: '0.4s',
      description: 'Видео с оживающими фотографиями',
      options: [
        { duration: '5 секунд', price: '50₽' },
        { duration: '8 секунд', price: '80₽' },
      ],
      features: ['Живые фото', 'Ваша музыка', 'Профессиональный монтаж', 'Минимум 3 фото'],
    },
  ];

  const examples = [
    { title: 'Свадебные моменты', description: 'Оживленные фото торжества' },
    { title: 'Детские воспоминания', description: 'Первые шаги в движении' },
    { title: 'Семейный архив', description: 'История семьи в динамике' },
  ];

  const faqs = [
    {
      question: 'Как оформить заказ?',
      answer: 'Выберите тариф, заполните форму заказа, отправьте ваши фотографии и описание. Мы свяжемся с вами для уточнения деталей и оплаты.',
    },
    {
      question: 'Какие фотографии можно использовать?',
      answer: 'Любые! Старые семейные фото, свадебные снимки, детские фотографии — мы оживим всё. Главное, чтобы качество позволяло обработку.',
    },
    {
      question: 'Сколько времени занимает обработка?',
      answer: 'Обычно 1-3 рабочих дня в зависимости от объема заказа. Срочные заказы обсуждаются индивидуально.',
    },
    {
      question: 'Можно ли добавить свою музыку?',
      answer: 'Да! Для видеороликов вы можете указать название трека или просто описать желаемое настроение музыки.',
    },
    {
      question: 'Какой формат видео я получу?',
      answer: 'MP4 в высоком разрешении, оптимизированный для просмотра на любых устройствах и публикации в соцсетях.',
    },
  ];

  return (
    <>
      <BongoCat />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Оживи Момент
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-6">
                {t.nav.map((item, idx) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 relative group"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full p-1">
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    language === 'ru'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-110'
                      : 'text-gray-600 hover:text-purple-600 hover:scale-105'
                  }`}
                >
                  RU
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    language === 'en'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-110'
                      : 'text-gray-600 hover:text-purple-600 hover:scale-105'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-bounce-in">
            <Badge className="mb-6 px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-110 transition-transform duration-300">
              {t.hero.badge}
            </Badge>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            {t.hero.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-slide-up max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection(t.nav[4].toLowerCase())}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 animate-pulse-glow"
          >
            <Icon name="Zap" className="mr-2" size={24} />
            {t.hero.cta}
          </Button>
        </div>
      </section>

      <section id="тарифы" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.tariffs.title}
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">{t.tariffs.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.tariffs.cards.map((card, idx) => (
              <Card
                key={idx}
                className="relative overflow-hidden border-2 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-scale-in cursor-pointer group"
                style={{ animationDelay: `${idx * 0.2}s` }}
                onClick={() => {
                  setSelectedTariff(card.title);
                  scrollToSection(t.nav[4].toLowerCase());
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${['from-purple-500 to-pink-500', 'from-orange-500 to-red-500', 'from-blue-500 to-purple-600'][idx]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${['from-purple-500 to-pink-500', 'from-orange-500 to-red-500', 'from-blue-500 to-purple-600'][idx]} shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <Icon name={['Image', 'Film', 'Sparkles'][idx] as any} className="text-white" size={28} />
                    </div>
                    {idx === 2 && (
                      <Badge className="bg-orange-500 hover:bg-orange-600 animate-bounce">{t.tariffs.popular}</Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold">{card.title}</CardTitle>
                  <CardDescription className="text-base">{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {card.options.map((option, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:scale-105 transition-transform duration-200">
                        <span className="font-medium">{option.duration}</span>
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {option.price}
                        </span>
                      </div>
                    ))}
                    {card.options[0].note && (
                      <p className="text-sm text-gray-500 italic">{card.options[0].note}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    {card.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-green-500 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full bg-gradient-to-r ${['from-purple-500 to-pink-500', 'from-orange-500 to-red-500', 'from-blue-500 to-purple-600'][idx]} hover:opacity-90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTariff(card.title);
                      scrollToSection(t.nav[4].toLowerCase());
                    }}
                  >
                    {t.tariffs.button}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="примеры" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.examples.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.examples.items.map((example, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="PlayCircle" className="text-white opacity-80 group-hover:scale-125 transition-transform duration-500" size={64} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors duration-300">
                    {example.title}
                  </CardTitle>
                  <CardDescription>{example.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.faq.title}
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {t.faq.items.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-white rounded-lg px-6 shadow-md hover:shadow-xl transition-all duration-300 border-none animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-purple-600 transition-colors duration-300 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Icon name="HelpCircle" className="text-purple-500 flex-shrink-0" size={20} />
                    {faq.q}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2 pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="заказать" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-2xl border-2 border-purple-200 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t.order.title}
              </CardTitle>
              <CardDescription className="text-center text-base">
                {t.order.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold">{t.order.name}</Label>
                  <Input
                    id="name"
                    placeholder={t.order.namePlaceholder}
                    required
                    className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-base font-semibold">{t.order.contact}</Label>
                  <Input
                    id="contact"
                    placeholder={t.order.contactPlaceholder}
                    required
                    className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tariff" className="text-base font-semibold">{t.order.tariff}</Label>
                  <Input
                    id="tariff"
                    value={selectedTariff}
                    onChange={(e) => setSelectedTariff(e.target.value)}
                    placeholder={t.order.tariffPlaceholder}
                    className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base font-semibold">
                    {t.order.description}
                  </Label>
                  <Textarea
                    id="description"
                    placeholder={t.order.descriptionPlaceholder}
                    rows={5}
                    className="transition-all duration-300 focus:scale-105 focus:shadow-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  {t.order.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" size={32} />
            <h3 className="text-2xl font-bold">Оживи Момент</h3>
          </div>
          <p className="text-purple-200 mb-6">{t.footer.tagline}</p>
          <div className="flex justify-center gap-6 mb-6">
            <Button
              variant="ghost"
              className="text-white hover:text-purple-200 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Icon name="Mail" size={20} />
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-purple-200 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-purple-200 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Icon name="Phone" size={20} />
            </Button>
          </div>
          <p className="text-sm text-purple-300">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
    </>
  );
}