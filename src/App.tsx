import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Heart, Music2, Volume2, VolumeX } from 'lucide-react';

const YOUTUBE_VIDEO_ID = "tb1gj06SKW8";

const storySections = [
  {
    id: 1,
    image: "/fotos/foto1.jpg",
    title: "Nossa Cumplicidade",
    description: "Cada sorriso bobo e momento de carinho ao seu lado é como um sonho que se torna realidade. Aconchegados, abraçados, vivendo o nosso amor.",
  },
  {
    id: 2,
    image: "/fotos/foto2.jpg",
    title: "Até nas Nossas Loucuras",
    description: "A vida é muito mais leve quando estou com você. Nossas brincadeiras e palhaçadas são a prova de que somos a melhor dupla que existe.",
  },
  {
    id: 3,
    image: "/fotos/foto3.jpg",
    title: "Sempre Juntinhos",
    description: "Não importa o momento, minhas melhores memórias são as que passo com você. Minha companheira de vida e aventuras.",
  },
  {
    id: 4,
    image: "/fotos/foto4.jpg",
    title: "O Mais Puro Amor",
    description: "Lembra desse dia especial? Entre rosas, beijos e muito amor... Você é a flor mais linda do meu jardim, minha eterna namorada.",
  },
  {
    id: 5,
    image: "/fotos/foto5.jpg",
    title: "Elegantes e Prontos Pro Mundo",
    description: "Ao seu lado, sinto que posso conquistar tudo. Somos nós dois contra o mundo, juntos construindo a nossa história para sempre.",
  },
];

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    // Generate static hearts on mount to avoid hydration mismatches,
    // in this case we're pure client-side but it's a good practice.
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 16 + Math.random() * 24,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-rose-500/20"
          initial={{ y: "110vh", x: `${heart.left}vw`, rotate: 0, opacity: 0 }}
          animate={{
            y: "-10vh",
            x: `${heart.left + (Math.random() * 10 - 5)}vw`,
            rotate: 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

const FallingPetals = () => {
  const [petals, setPetals] = useState<{ id: number; left: number; delay: number; duration: number; size: number; rotation: number }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 12 + Math.random() * 18,
      size: 10 + Math.random() * 14,
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={`petal-${petal.id}`}
          className="absolute text-rose-600/30"
          initial={{ y: "-10vh", x: `${petal.left}vw`, rotate: petal.rotation, opacity: 0 }}
          animate={{
            y: "110vh",
            x: `${petal.left + (Math.random() * 20 - 10)}vw`,
            rotate: petal.rotation + 200,
            opacity: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width={petal.size} height={petal.size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22C4 19 2 9 12 2C22 9 20 19 12 22Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

const FloatingLabels = () => {
  const [labels, setLabels] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newLabels = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: 5 + Math.random() * 90,
      delay: Math.random() * 20,
      duration: 18 + Math.random() * 15,
    }));
    setLabels(newLabels);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {labels.map((label) => (
        <motion.div
          key={`label-${label.id}`}
          className="absolute text-rose-400/30 font-handwriting text-2xl md:text-3xl whitespace-nowrap drop-shadow-sm"
          initial={{ y: "110vh", x: `${label.left}vw`, opacity: 0 }}
          animate={{
            y: "-20vh",
            x: `${label.left + (Math.random() * 20 - 10)}vw`,
            opacity: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: label.duration,
            delay: label.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Eu te amo
        </motion.div>
      ))}
    </div>
  );
};

const START_DATE = new Date('2026-02-25T00:00:00');

const ROMANTIC_QUOTES = [
  "Você é a poesia mais linda que a vida já escreveu em mim.",
  "E de repente, todas as canções de amor faziam sentido. Elas falavam sobre você.",
  "Eu te escolheria de novo, mil vezes, em qualquer outra vida.",
  "Meu lugar favorito no mundo é dentro do seu abraço.",
  "Não sei se o universo conspirou a nosso favor, mas agradeço todos os dias por ter te encontrado.",
  "Amar você é como respirar, não tem como parar.",
  "Seu sorriso é a luz que ilumina meus dias mais escuros.",
  "Você não é apenas o amor da minha vida, é a vida do meu amor.",
  "E no meio de tanta gente, meus olhos sempre vão buscar os seus.",
  "Você é a resposta para todas as orações que eu nem sabia que tinha feito.",
];

const RomanticQuote = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setQuoteIndex(Math.floor(Math.random() * ROMANTIC_QUOTES.length));
  }, []);

  const handleNewQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * ROMANTIC_QUOTES.length);
      } while (newIndex === quoteIndex && ROMANTIC_QUOTES.length > 1);
      
      setQuoteIndex(newIndex);
      setIsAnimating(false);
    }, 400); // Wait for fade out
  };

  return (
    <div className="max-w-2xl mx-auto px-6 mb-32 text-center">
      <div className="relative p-10 bg-[#1e141a]/60 backdrop-blur-sm rounded-3xl border border-rose-900/20 shadow-xl overflow-hidden min-h-[250px] flex flex-col justify-center">
        <Heart className="absolute top-6 left-1/2 -translate-x-1/2 text-rose-500/10" size={120} />
        
        <div className="relative z-10 flex-grow flex items-center justify-center min-h-[120px]">
          <p 
            className={`text-2xl md:text-3xl font-serif italic text-rose-200/90 leading-relaxed transition-opacity duration-400 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          >
            "{ROMANTIC_QUOTES[quoteIndex] || ROMANTIC_QUOTES[0]}"
          </p>
        </div>

        <button 
          onClick={handleNewQuote}
          disabled={isAnimating}
          className="relative z-10 mt-8 mx-auto px-6 py-2 bg-rose-900/40 hover:bg-rose-800/60 text-rose-300 rounded-full font-sans text-sm tracking-widest uppercase transition-colors border border-rose-800/50"
        >
          Nova Mensagem
        </button>
      </div>
    </div>
  );
};

const LoveCounter = () => {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const start = START_DATE.getTime();
    const now = new Date().getTime();
    const diff = Math.max(0, now - start);
    setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <div className="mb-12 mt-8 flex flex-col items-center justify-center gap-4">
      <div className="relative group cursor-default">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-rose-500/10 blur-[40px] rounded-full scale-150 transition-opacity duration-1000 group-hover:bg-rose-500/30"></div>
        
        {/* Heart icons */}
        <Heart 
          size={56} 
          className="absolute -top-6 -right-6 text-rose-500/30 animate-[pulse_3s_ease-in-out_infinite]" 
          fill="currentColor" 
        />
        <Heart 
          size={32} 
          className="absolute -bottom-4 -left-4 text-rose-500/20 animate-[pulse_4s_ease-in-out_infinite]" 
          fill="currentColor" 
        />
        
        {/* Main numbers display */}
        <div className="relative overflow-hidden flex flex-col items-center bg-black/40 backdrop-blur-xl px-12 py-10 rounded-[2rem] border border-rose-900/40 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <span className="text-7xl sm:text-8xl font-serif text-rose-200 font-bold tracking-tighter mb-4 drop-shadow-[0_0_20px_rgba(244,63,94,0.3)]">
            {isNaN(days) ? 0 : days}
          </span>
          <span className="text-sm font-sans text-rose-400/80 uppercase tracking-[0.4em]">
            Dias Amando Você
          </span>
        </div>
      </div>
    </div>
  );
};

const VisitTracker = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const currentVisits = parseInt(localStorage.getItem('love_visits') || '0', 10);
    const newVisits = currentVisits + 1;
    localStorage.setItem('love_visits', newVisits.toString());
    setVisits(newVisits);
  }, []);

  if (visits === 0) return null;

  return (
    <div className="mt-4 text-xs font-sans tracking-widest uppercase text-rose-400/50">
      Times we've shared this moment: {visits}
    </div>
  );
};

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-700 via-rose-500 to-rose-300 origin-left z-[100] drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

const QUIZ_QUESTIONS = [
  {
    question: "Qual foi a nosso primeiro apelido carinhoso?",
    options: ["Amor", "Meu bem", "Vida", "Princesa"],
    correctAnswer: "Meu bem"
  },
  {
    question: "Aonde vamos casar?",
    options: ["Na igreja", "Na praia ou sitio", "Na fazenda", "Numa capela"],
    correctAnswer: "Na praia ou sitio"
  },
  {
    question: "Qual vai ser o nome da nossa filha?",
    options: ["Helena", "Alice", "Cecilia", "Laura"],
    correctAnswer: "Cecilia"
  }
];

const LoveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswerClick = (option: string) => {
    setSelectedAnswer(option);
    const correct = option === QUIZ_QUESTIONS[currentQuestion].correctAnswer;
    setIsCorrect(correct);

    setTimeout(() => {
      if (correct) {
        setScore((prev) => prev + 1);
      }
      
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < QUIZ_QUESTIONS.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 mb-32">
      <div className="p-8 bg-[#1e141a]/80 backdrop-blur-md rounded-3xl border border-rose-900/30 shadow-2xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-500/10 rounded-full blur-[40px] pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-700/10 rounded-full blur-[40px] pointer-events-none"></div>

        <h3 className="text-3xl font-serif text-rose-300 text-center mb-8 italic relative z-10">Pequeno Quiz do Nosso Amor</h3>
        
        {showResult ? (
          <div className="text-center space-y-6 relative z-10">
            {score === QUIZ_QUESTIONS.length ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <Heart className="mx-auto text-rose-500 mb-4 animate-[pulse_2s_ease-in-out_infinite]" size={56} fill="currentColor" />
                <h4 className="text-2xl font-bold text-rose-200 mb-6 tracking-wider">MENSAGEM SECRETA DESBLOQUEADA!</h4>
                <div className="text-lg md:text-xl font-sans text-rose-100 leading-relaxed bg-rose-950/40 p-6 md:p-8 rounded-2xl border border-rose-500/30 text-left shadow-inner">
                  Fernanda, meu amor, eu sinto um orgulho imenso de você e de tudo que estamos construindo. Você é uma mulher incrível, forte, linda e, com todo o respeito do mundo (ou melhor, sem nenhum)... 
                  <strong className="text-rose-400 flex items-center gap-3 text-2xl md:text-3xl uppercase tracking-widest mt-4 mb-2 animate-bounce">
                    🔥 MUITO GOSTOSA! 🔥
                  </strong>
                  Te amo pra toda vida!
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h4 className="text-2xl font-bold text-rose-300 mb-4 tracking-wider mt-4">Quase lá, princesa!</h4>
                <p className="text-lg text-rose-200/80 mb-8">Você acertou {score} de {QUIZ_QUESTIONS.length}. Tente de novo para desbloquear sua surpresa secreta!</p>
                <button onClick={restartQuiz} className="px-8 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-full font-sans tracking-wide uppercase transition-colors shadow-lg shadow-rose-900/50">Tentar Novamente</button>
              </motion.div>
            )}
          </div>
        ) : (
          <div className="space-y-6 relative z-10">
            <div className="flex justify-between items-center text-xs uppercase tracking-widest text-rose-500/80 font-bold mb-6 border-b border-rose-900/30 pb-4">
              <span>Pergunta {currentQuestion + 1} de {QUIZ_QUESTIONS.length}</span>
              <span>Acertos: {score}</span>
            </div>
            
            <h4 className="text-xl md:text-2xl font-sans text-rose-50 mb-8 text-center leading-relaxed">
              {QUIZ_QUESTIONS[currentQuestion].question}
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {QUIZ_QUESTIONS[currentQuestion].options.map((option) => {
                let btnStyle = "bg-[#2b1c25] hover:bg-rose-900/40 border-rose-900/30 text-rose-200 hover:shadow-[0_0_15px_rgba(244,63,94,0.15)] hover:-translate-y-1";
                
                if (selectedAnswer === option) {
                  if (isCorrect) {
                     btnStyle = "bg-green-900/40 border-green-500/50 text-green-200 shadow-[0_0_20px_rgba(34,197,94,0.2)]";
                  } else {
                     btnStyle = "bg-red-900/40 border-red-500/50 text-red-200 shadow-[0_0_20px_rgba(239,68,68,0.2)]";
                  }
                } else if (selectedAnswer && option === QUIZ_QUESTIONS[currentQuestion].correctAnswer) {
                     btnStyle = "bg-green-900/40 border-green-500/50 text-green-200";
                }

                return (
                  <button
                    key={option}
                    onClick={() => !selectedAnswer && handleAnswerClick(option)}
                    disabled={!!selectedAnswer}
                    className={`p-4 rounded-xl border transition-all duration-300 ${btnStyle} font-sans text-lg ${selectedAnswer ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    setIsPlaying(true);
  };

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center bg-[#110c11] text-rose-50 selection:bg-rose-900 selection:text-white">
      <div style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: '1px', height: '1px', overflow: 'hidden' }}>
        {isOpened && (
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=${isPlaying ? 1 : 0}&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        )}
      </div>

      <FloatingHearts />
      <FallingPetals />
      <FloatingLabels />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex-1 flex flex-col items-center justify-center min-h-screen z-10 p-6"
          >
            <div className="bg-[#1e141a]/80 backdrop-blur-md p-10 md:p-16 rounded-3xl shadow-2xl border border-rose-900/30 max-w-md w-full text-center space-y-8 relative overflow-hidden group">
              <motion.div 
                className="absolute -top-10 -right-10 text-rose-900/20 group-hover:text-rose-900/40 transition-colors duration-700"
                animate={{ rotate: 10, scale: [1, 1.05, 1] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <Heart size={160} fill="currentColor" />
              </motion.div>

              <div className="relative z-10 space-y-6">
                <Music2 className="mx-auto text-rose-400 opacity-60" size={32} />
                <h1 className="text-4xl md:text-5xl font-serif italic text-rose-200">
                  Para minha princesa
                </h1>
                <p className="font-sans text-rose-300/80 text-lg tracking-wide uppercase">
                  Surpresa do seu amoreco
                </p>

                <motion.button
                  onClick={handleOpen}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white rounded-full font-bold tracking-wider shadow-lg shadow-rose-900/50 flex items-center justify-center gap-3 w-full transition-colors"
                >
                  <Heart size={20} fill="currentColor" />
                  <span>ABRIR PRESENTE</span>
                </motion.button>
                <p className="text-xs text-rose-400 mt-4 opacity-75 font-sans">
                  * Ligue o som para uma experiência mais aconchegante
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-full flex-col items-center z-10"
          >
            <ScrollProgressBar />
            {/* Audio Toggle Control */}
            <div className="fixed top-4 right-4 z-50">
              <button 
                onClick={toggleAudio}
                className="p-3 bg-[#1e141a]/80 backdrop-blur shadow-lg hover:bg-[#2b1c25] text-rose-400 rounded-full transition-all border border-rose-900/30"
                aria-label="Toggle music"
              >
                {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
              </button>
            </div>

            {/* Header / Intro */}
            <section className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-6xl md:text-8xl font-handwriting text-rose-500 mb-6 font-bold -rotate-2 drop-shadow-md">
                  Eu te amo.
                </h2>
                <p className="font-serif text-xl md:text-2xl text-rose-200/90 max-w-2xl mx-auto leading-relaxed">
                  Quis fazer algo diferente pra te mostrar o quanto você é especial pra mim. Role para baixo e aproveite a nossa pequena jornada.
                </p>
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 2, duration: 1 }}
                  className="animate-bounce mt-16 text-rose-500"
                >
                  ↓
                </motion.div>
              </motion.div>
            </section>

            {/* Story Sections */}
            <div className="max-w-4xl mx-auto px-6 py-12 space-y-32 mb-32">
              {storySections.map((section, index) => (
                <motion.section
                  key={section.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-100px", once: true }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-rose-900/40 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                      <div className="relative z-10 rounded-2xl shadow-2xl shadow-black/50 group-hover:shadow-[0_0_40px_rgba(244,63,94,0.4)] border border-rose-900/30 group-hover:border-rose-500/50 overflow-hidden transform transition-all duration-500">
                        <img 
                          src={section.image} 
                          alt="Nosso momento" 
                          className="w-full h-[400px] object-cover sepia-[.35] contrast-[1.15] brightness-[0.85] saturate-[0.85] hue-rotate-[-10deg] group-hover:sepia-[.2] group-hover:saturate-100 transition-all duration-700"
                        />
                        {/* Overlay retrô romântico adicionando um tom avermelhado suave */}
                        <div className="absolute inset-0 bg-rose-950/30 mix-blend-overlay pointer-events-none"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-serif italic text-rose-300 drop-shadow-sm">
                      {section.title}
                    </h3>
                    <p className="text-lg md:text-xl text-rose-200/80 font-sans leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Romantic Quotes Component */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <RomanticQuote />
            </motion.section>

            {/* Interactive Quiz Component */}
            <motion.section
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <LoveQuiz />
            </motion.section>

            {/* Final Letter Section */}
            <motion.section
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 1 }}
              className="max-w-3xl mx-auto px-6 pb-40 text-center"
            >
              <div className="bg-[#1e141a]/80 backdrop-blur p-8 md:p-16 rounded-3xl shadow-2xl border border-rose-900/30">
                <Heart className="mx-auto text-rose-500 mb-8" size={48} fill="currentColor" />
                <h2 className="text-4xl md:text-6xl font-handwriting text-rose-400 font-bold mb-8">
                  Feliz Dia dos Namorados!
                </h2>
                <p className="text-xl md:text-2xl font-serif text-rose-200/90 leading-relaxed italic">
                  "Você é a melhor companhia que a vida já me deu. Obrigado por dividir os seus dias comigo. Que venham muitos outros dias dos namorados ao seu lado!"
                </p>
                <div className="mt-12 text-rose-400 font-handwriting text-4xl">
                  Com todo amor, <br/> Eduardo
                </div>
              </div>
            </motion.section>
            
            {/* Footer */}
            <div className="pb-10 pt-20 border-t border-rose-900/30 mt-20 text-center text-sm font-sans text-rose-400/50">
              <LoveCounter />
              <p>Feito com amor por Eduardo para sua princesa.</p>
              <VisitTracker />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
