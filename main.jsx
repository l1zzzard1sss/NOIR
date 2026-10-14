import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, Command, Layers3,
  Zap, Workflow, ShieldCheck, Menu, X, Sparkles, Play, Plus
} from 'lucide-react';
import './styles.css';

const features = [
  { icon: Sparkles, number: '01', title: 'Идеи становятся планами', text: 'Превращайте размытые мысли в чёткие шаги, задачи и понятную стратегию.' },
  { icon: Workflow, number: '02', title: 'Меньше рутины', text: 'Соберите повторяющиеся процессы в один простой и управляемый workflow.' },
  { icon: Layers3, number: '03', title: 'Всё в одном пространстве', text: 'Заметки, задачи и результаты работы — без десятков открытых вкладок.' },
  { icon: ShieldCheck, number: '04', title: 'Контроль на каждом шаге', text: 'Вы задаёте направление, проверяете результат и решаете, что делать дальше.' },
];

const steps = [
  ['Опишите идею', 'Расскажите, чего хотите добиться. Не нужно готовить идеальное техническое задание.'],
  ['Получите структуру', 'NOIR поможет разложить цель на логичные этапы и следующие действия.'],
  ['Двигайтесь быстрее', 'Работайте по плану, отслеживайте прогресс и улучшайте результат по пути.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);


  return (
    <>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="NOIR — на главную">
          <span className="brand-mark"><span /></span><span>NOIR</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#features" onClick={closeMenu}>Возможности</a>
          <a href="#how" onClick={closeMenu}>Как это работает</a>
          <a href="#about" onClick={closeMenu}>О проекте</a>
          <a className="nav-cta" href="#start" onClick={closeMenu}>Попробовать <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> ПРОСТРАНСТВО ДЛЯ БОЛЬШИХ ИДЕЙ</div>
            <h1>Меньше шума.<br />Больше <span className="gradient-text">созданного.</span></h1>
            <p className="hero-description">Превращайте идеи в реальные проекты. NOIR помогает мыслить яснее, действовать быстрее и держать фокус на том, что действительно важно.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#start">Начать бесплатно <ArrowRight size={17} /></a>
              <a className="button button-quiet" href="#features"><span className="play-icon"><Play size={12} fill="currentColor" /></span> Изучить возможности</a>
            </div>
            <div className="hero-proof"><div className="avatar-stack"><i>А</i><i>М</i><i>К</i><i>+</i></div><span>Создано для тех, кто создаёт</span></div>
          </div>

          <div className="hero-visual" aria-label="Декоративный макет интерфейса NOIR">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="visual-label label-top"><span className="label-icon"><Sparkles size={15} /></span><span><b>Новая перспектива</b><small>Идея обретает форму</small></span></div>
            <div className="app-window">
              <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>workspace / overview</span><Command size={14} /></div>
              <div className="window-body">
                <aside className="mock-sidebar"><div className="mock-logo"><span className="mini-mark">N</span> noir</div><div className="side-item active"><Layers3 size={14} /> Обзор</div><div className="side-item"><Workflow size={14} /> Процессы</div><div className="side-item"><Zap size={14} /> Идеи</div><div className="side-item"><ShieldCheck size={14} /> Настройки</div><div className="sidebar-bottom"><div className="profile-dot">N</div><span>Мой workspace</span></div></aside>
                <div className="mock-content">
                  <div className="mock-heading"><div><small>ПОНЕДЕЛЬНИК, 09:41</small><h3>Создаём новое.</h3></div><span className="mock-date">OCT / 13</span></div>
                  <div className="progress-card"><div className="progress-head"><span>Запуск продукта</span><span className="progress-number">68%</span></div><div className="progress-track"><span /></div><div className="progress-foot"><span>4 из 6 этапов завершено</span><span className="tiny-check"><Check size={11} /></span></div></div>
                  <div className="task-heading">Следующие шаги <span>Посмотреть все <ArrowUpRight size={11} /></span></div>
                  <div className="task-row"><span className="task-check checked"><Check size={11} /></span><span className="task-done">Сформировать концепцию</span><span className="task-tag done-tag">Готово</span></div>
                  <div className="task-row"><span className="task-check" /><span>Собрать прототип</span><span className="task-tag">В работе</span></div>
                  <div className="task-row"><span className="task-check" /><span>Подготовить запуск</span><span className="task-tag">Далее</span></div>
                  <div className="ai-note"><span className="ai-spark"><Sparkles size={15} /></span><div><b>Есть идея</b><p>Разбейте следующий этап на 3 простых действия.</p></div><ArrowUpRight size={15} /></div>
                </div>
              </div>
            </div>
            <div className="floating-card float-bottom"><span className="float-icon"><Zap size={17} /></span><span><b>Фокус активирован</b><small>Вы на правильном пути</small></span><span className="live-bars"><i /><i /><i /><i /><i /></span></div>
            <div className="visual-caption"><span className="caption-line" /> ВАШИ ИДЕИ. ВАШ ТЕМП. ВАШИ ПРАВИЛА.</div>
          </div>
          <a href="#features" className="scroll-cue"><span>ЛИСТАЙТЕ НИЖЕ</span><ArrowDownRight size={16} /></a>
        </section>

        <section className="ticker" aria-label="Ключевые принципы"><div className="ticker-track">{Array.from({ length: 2 }, (_, i) => <div className="ticker-group" key={i}><span>МЫСЛИТЕ ШИРЕ</span><b>✳</b><span>СОЗДАВАЙТЕ СМЕЛЕЕ</span><b>✳</b><span>ДЕЙСТВУЙТЕ ТОЧНЕЕ</span><b>✳</b><span>МЫСЛИТЕ ШИРЕ</span><b>✳</b></div>)}</div></section>

        <section id="features" className="features section-wrap section-space">
          <div className="section-heading reveal"><div><div className="eyebrow">01 / ВОЗМОЖНОСТИ</div><h2>Всё важное.<br /><span className="muted-text">Ничего лишнего.</span></h2></div><p>Инструменты, которые помогают убрать лишние шаги между хорошей идеей и её реализацией.</p></div>
          <div className="feature-grid">{features.map(({ icon: Icon, number, title, text }, index) => <article className="feature-card reveal" style={{ '--delay': `${index * 90}ms` }} key={number}><div className="feature-top"><span className="feature-icon"><Icon size={19} /></span><span className="feature-number">{number}</span></div><h3>{title}</h3><p>{text}</p><div className="card-arrow"><ArrowUpRight size={17} /></div></article>)}</div>
        </section>

        <section id="how" className="how section-wrap section-space">
          <div className="how-panel reveal"><div className="how-intro"><div className="eyebrow">02 / ПРОЦЕСС</div><h2>От мысли<br />к <span className="gradient-text">результату.</span></h2><p>Не усложняйте путь. Начните с того, что уже есть, и двигайтесь шаг за шагом.</p><a className="text-link" href="#start">Попробовать подход <ArrowRight size={16} /></a></div><div className="steps-list">{steps.map(([title, text], i) => <div className="step" key={title}><div className="step-index">{String(i + 1).padStart(2, '0')}</div><div className="step-copy"><h3>{title}</h3><p>{text}</p></div><div className="step-plus"><Plus size={15} /></div></div>)}</div></div>
        </section>

        <section id="about" className="manifesto section-wrap section-space reveal"><div className="eyebrow">03 / НАША ФИЛОСОФИЯ</div><p>Хорошие идеи не должны теряться в <span className="muted-text">бесконечных списках задач.</span> Создавайте пространство, в котором <span className="gradient-text">возможности становятся действиями.</span></p><div className="manifesto-bottom"><span>МЕНЬШЕ ШУМА. БОЛЬШЕ СМЫСЛА.</span><span>NOIR® — CONCEPT PROJECT / 2026</span></div></section>

        <section id="start" className="start-section section-wrap">
          <div className="start-card reveal"><div className="start-orb" /><div className="eyebrow"><span className="status-dot" /> ВАШ СЛЕДУЮЩИЙ ШАГ</div><h2>Идеи заслуживают<br />того, чтобы <span className="gradient-text">стать реальностью.</span></h2><p>NOIR — концепция пространства для превращения идей в реальные проекты.</p><a className="button button-primary start-link" href="#features">Изучить возможности <ArrowRight size={16} /></a></div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark"><span /></span><span>NOIR</span></a><span className="footer-note">Создано с намерением. Разработано для движения.</span><a href="#home" className="back-top">НАВЕРХ <ArrowUpRight size={14} /></a><div className="footer-bottom"><span>© 2026 NOIR STUDIO. КОНЦЕПТУАЛЬНЫЙ ПРОЕКТ.</span><span>DESIGNED TO MOVE FORWARD ↗</span></div></footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
