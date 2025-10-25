import { useEffect, useState } from 'react';

interface Paw {
  id: number;
  x: number;
  y: number;
  side: 'left' | 'right' | 'top' | 'bottom';
}

interface PawPrint {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

export default function BongoCat() {
  const [paws, setPaws] = useState<Paw[]>([]);
  const [pawPrints, setPawPrints] = useState<PawPrint[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const sides: Array<'left' | 'right' | 'top' | 'bottom'> = ['left', 'right', 'top', 'bottom'];
      const randomSide = sides[Math.floor(Math.random() * sides.length)];
      
      const pawId = Date.now();
      const printId = pawId + 1;

      let pawX = e.clientX;
      let pawY = e.clientY;

      switch (randomSide) {
        case 'left':
          pawX = -80;
          pawY = e.clientY;
          break;
        case 'right':
          pawX = window.innerWidth + 80;
          pawY = e.clientY;
          break;
        case 'top':
          pawX = e.clientX;
          pawY = -80;
          break;
        case 'bottom':
          pawX = e.clientX;
          pawY = window.innerHeight + 80;
          break;
      }

      setPaws(prev => [...prev, { id: pawId, x: pawX, y: pawY, side: randomSide }]);
      
      const rotation = Math.random() * 360;
      setPawPrints(prev => [...prev, { id: printId, x: e.clientX, y: e.clientY, rotation }]);

      setTimeout(() => {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTcIGWi77eefTRAMUKfj8LZjHAY4ktjzzHksBSR3yPDekEAKFV616OunVRQLSKDh8r9tIgUsgc7y2Yk3CBlou+3nn00QDFC');
        audio.volume = 0.3;
        audio.play().catch(() => {});
      }, 1000);

      setTimeout(() => {
        setPaws(prev => prev.filter(p => p.id !== pawId));
      }, 2000);

      setTimeout(() => {
        setPawPrints(prev => prev.filter(s => s.id !== printId));
      }, 3000);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {paws.map(paw => (
        <div
          key={paw.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: paw.x,
            top: paw.y,
            transform: `translate(-50%, -50%) ${
              paw.side === 'right' ? 'scaleX(-1)' : ''
            } ${paw.side === 'top' ? 'rotate(90deg)' : ''} ${
              paw.side === 'bottom' ? 'rotate(-90deg)' : ''
            }`,
          }}
        >
          <div className="animate-paw-strike">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
              <ellipse cx="50" cy="65" rx="22" ry="28" fill="#FFA07A" opacity="0.9" />
              
              <ellipse cx="38" cy="45" rx="8" ry="12" fill="#FFA07A" opacity="0.9" />
              <ellipse cx="50" cy="42" rx="8" ry="12" fill="#FFA07A" opacity="0.9" />
              <ellipse cx="62" cy="45" rx="8" ry="12" fill="#FFA07A" opacity="0.9" />
              
              <ellipse cx="35" cy="45" rx="4" ry="6" fill="#FF8C69" />
              <ellipse cx="47" cy="42" rx="4" ry="6" fill="#FF8C69" />
              <ellipse cx="59" cy="45" rx="4" ry="6" fill="#FF8C69" />
              
              <path
                d="M 50 65 Q 45 72 42 75"
                stroke="#FF8C69"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 50 65 Q 55 72 58 75"
                stroke="#FF8C69"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 50 65 Q 50 74 50 78"
                stroke="#FF8C69"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      ))}

      {pawPrints.map(print => (
        <div
          key={print.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: print.x,
            top: print.y,
            transform: `translate(-50%, -50%) rotate(${print.rotation}deg)`,
          }}
        >
          <div className="animate-paw-print">
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
              <ellipse cx="50" cy="65" rx="18" ry="22" fill="#9b87f5" opacity="0.6" />
              
              <ellipse cx="40" cy="48" rx="6" ry="9" fill="#9b87f5" opacity="0.5" />
              <ellipse cx="50" cy="45" rx="6" ry="9" fill="#9b87f5" opacity="0.5" />
              <ellipse cx="60" cy="48" rx="6" ry="9" fill="#9b87f5" opacity="0.5" />
              
              <ellipse cx="37" cy="48" rx="3" ry="5" fill="#D946EF" opacity="0.4" />
              <ellipse cx="47" cy="45" rx="3" ry="5" fill="#D946EF" opacity="0.4" />
              <ellipse cx="57" cy="48" rx="3" ry="5" fill="#D946EF" opacity="0.4" />
            </svg>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes paw-strike {
          0% {
            transform: translateX(0) scale(0.5);
            opacity: 0;
          }
          30% {
            transform: translateX(0) scale(1.1);
            opacity: 1;
          }
          50% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(0) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes paw-print {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          10% {
            transform: scale(1.2);
            opacity: 0.8;
          }
          20% {
            transform: scale(1);
            opacity: 0.7;
          }
          70% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }

        .animate-paw-strike {
          animation: paw-strike 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-paw-print {
          animation: paw-print 3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
