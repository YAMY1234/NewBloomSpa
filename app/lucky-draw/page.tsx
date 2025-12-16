"use client";

import { useState, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { 
  Gift, 
  Sparkles, 
  RefreshCw, 
  Crown, 
  User, 
  Hand, 
  Eye, 
  Smile, 
  Battery, 
  Footprints, 
  Droplets, 
  Leaf, 
  Activity,
  Zap
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export default function LuckyDrawPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const controls = useAnimation();
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [hasSpun, setHasSpun] = useState(false);

  const prizes = useMemo(() => [
    { id: 'head', icon: Crown, name: { en: "Head gua sha therapy", zh: "头部刮痧" }, price: 30, color: "#b07e62" },
    { id: 'neck', icon: User, name: { en: "Neck lymphatic detox", zh: "颈部淋巴排毒" }, price: 50, color: "#588c6e" },
    { id: 'hand1', icon: Hand, name: { en: "Hand care treatment", zh: "手部护理" }, price: 50, color: "#c59b81" },
    { id: 'hand2', icon: Sparkles, name: { en: "Hand nourishing", zh: "手部保养" }, price: 40, color: "#76a88a" },
    { id: 'eye', icon: Eye, name: { en: "Eye care treatment", zh: "眼部护理" }, price: 50, color: "#d6b9a5" },
    { id: 'face', icon: Smile, name: { en: "Basic facial care", zh: "基础面部护理" }, price: 55, color: "#9bc4aa" },
    { id: 'fatigue', icon: Battery, name: { en: "Fatigue relief", zh: "疲劳护理" }, price: 40, color: "#b07e62" },
    { id: 'foot', icon: Footprints, name: { en: "Foot care treatment", zh: "足部保养" }, price: 40, color: "#588c6e" },
    { id: 'mask', icon: Droplets, name: { en: "Hydrating mask", zh: "面部水膜" }, price: 30, color: "#c59b81" },
    { id: 'oil', icon: Leaf, name: { en: "CBD oil add-on", zh: "CBD 油" }, price: 20, color: "#76a88a" },
    { id: 'meridian', icon: Activity, name: { en: "Meridian relaxation", zh: "通经络舒筋" }, price: 30, color: "#d6b9a5" }
  ], []);

  // Calculate coordinates for SVG paths
  const getCoordinatesForPercent = (percent: number) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  const segments = useMemo(() => {
    const totalSegments = prizes.length;
    const segmentAngle = 1 / totalSegments;

    return prizes.map((prize, index) => {
      const startAngle = index * segmentAngle;
      const endAngle = (index + 1) * segmentAngle;
      
      const [startX, startY] = getCoordinatesForPercent(startAngle);
      const [endX, endY] = getCoordinatesForPercent(endAngle);
      
      const largeArcFlag = segmentAngle > 0.5 ? 1 : 0;
      
      const pathData = [
        `M 0 0`,
        `L ${startX} ${startY}`,
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        `L 0 0`,
      ].join(' ');

      // Calculate rotation for icon
      const midAngle = startAngle + segmentAngle / 2;
      const rotationAngle = midAngle * 360;

      return {
        ...prize,
        path: pathData,
        rotation: rotationAngle
      };
    });
  }, [prizes]);

  const spinWheel = async () => {
    if (isSpinning || hasSpun) return;

    setIsSpinning(true);
    setResult(null);

    const selectedIndex = Math.floor(Math.random() * prizes.length);
    
    // Rotation calculation
    const segmentArc = 360 / prizes.length;
    const segmentCenter = selectedIndex * segmentArc + (segmentArc / 2);
    const rotationAmount = 1800 + (-90 - segmentCenter);

    await controls.start({
      rotate: rotationAmount,
      transition: {
        duration: 4,
        ease: "easeOut"
      }
    });

    const prizeName = prizes[selectedIndex].name[language as 'en' | 'zh'];
    setResult(`${prizeName} ($${prizes[selectedIndex].price})`);
    setIsSpinning(false);
    setHasSpun(true);
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-sage-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Gift className="w-8 h-8 text-primary-600" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              {t.luckyDraw.hero.title}
            </h1>
            <p className="text-xl text-gray-600">
              {t.luckyDraw.hero.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Wheel Section */}
            <div className="relative flex justify-center py-8 order-1">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 mt-4">
                <div className="w-8 h-10 bg-gray-800" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }} />
              </div>

              <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
                <motion.div
                  className="w-full h-full relative"
                  animate={controls}
                  style={{ transformOrigin: "center" }}
                >
                  <svg 
                    viewBox="-1 -1 2 2" 
                    className="w-full h-full transform rotate-0" 
                    style={{ overflow: 'visible' }}
                  >
                    {segments.map((segment) => (
                      <path 
                        key={segment.id}
                        d={segment.path} 
                        fill={segment.color} 
                        stroke="white" 
                        strokeWidth="0.01" 
                      />
                    ))}
                  </svg>
                  
                  {/* Icons Layer - Rendered as absolute divs on top to avoid SVG rotation complexity with foreignObject */}
                  {segments.map((segment) => (
                    <div
                      key={segment.id}
                      className="absolute top-0 left-0 w-full h-full pointer-events-none"
                      style={{
                        transform: `rotate(${segment.rotation}deg)`
                      }}
                    >
                      <div 
                        className="absolute top-1/2 left-1/2 w-8 h-8 -mt-4 -ml-4 flex items-center justify-center text-white"
                        style={{
                          transform: `translate(120px, 0) rotate(90deg)` // Adjust distance from center
                        }}
                      >
                        <segment.icon className="w-6 h-6 md:w-8 md:h-8 drop-shadow-md" />
                      </div>
                    </div>
                  ))}
                </motion.div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-4 border-sage-100">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Legend & Controls */}
            <div className="space-y-8 order-2">
              {!result ? (
                <>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-6 flex items-center">
                      <Gift className="w-5 h-5 mr-2 text-primary-600" />
                      {t.luckyDraw.nav} - {t.services.hero.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                      {prizes.map((prize) => (
                        <div key={prize.id} className="flex items-center p-3 rounded-lg bg-gray-50 border border-gray-100 hover:bg-primary-50 transition-colors">
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 mr-3"
                            style={{ backgroundColor: prize.color }}
                          >
                            <prize.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">
                              {prize.name[language as 'en' | 'zh']}
                            </div>
                            <div className="text-primary-600 font-bold text-sm">
                              ${prize.price}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={spinWheel}
                    disabled={isSpinning || hasSpun}
                    className={`w-full py-4 px-8 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      isSpinning || hasSpun
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-xl'
                    }`}
                  >
                    {isSpinning ? '...' : t.luckyDraw.hero.button}
                  </button>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      {t.luckyDraw.rules.title}
                    </h4>
                    <ul className="space-y-1 text-xs text-gray-600">
                      {t.luckyDraw.rules.items.map((rule: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-primary-500">•</span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 rounded-2xl shadow-xl border-2 border-primary-100 text-center h-full flex flex-col justify-center items-center"
                >
                  <motion.div
                    initial={{ rotate: -10, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <Gift className="w-20 h-20 text-primary-600 mb-6" />
                  </motion.div>
                  
                  <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                    {t.luckyDraw.result.congrats}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    {t.luckyDraw.result.youWon}
                  </p>
                  
                  <div className="bg-sage-50 py-6 px-8 rounded-2xl mb-8 w-full">
                    <span className="text-2xl md:text-3xl font-bold text-sage-700 block">
                      {result}
                    </span>
                  </div>
                  
                  <p className="text-gray-500 mb-2">
                    {t.luckyDraw.result.claim}
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    {t.luckyDraw.result.disclaimer}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d6b9a5;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #b07e62;
        }
      `}</style>
    </div>
  );
}
