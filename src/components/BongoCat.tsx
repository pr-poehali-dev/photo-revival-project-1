import { useEffect, useState } from 'react';

interface Paw {
  id: number;
  x: number;
  y: number;
  side: 'left' | 'right' | 'top' | 'bottom';
}

interface Scratch {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

export default function BongoCat() {
  const [paws, setPaws] = useState<Paw[]>([]);
  const [scratches, setScratches] = useState<Scratch[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const sides: Array<'left' | 'right' | 'top' | 'bottom'> = ['left', 'right', 'top', 'bottom'];
      const randomSide = sides[Math.floor(Math.random() * sides.length)];
      
      const pawId = Date.now();
      const scratchId = pawId + 1;

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
      
      setTimeout(() => {
        const rotation = Math.random() * 60 - 30;
        setScratches(prev => [...prev, { id: scratchId, x: e.clientX, y: e.clientY, rotation }]);
      }, 500);

      setTimeout(() => {
        setPaws(prev => prev.filter(p => p.id !== pawId));
      }, 2000);

      setTimeout(() => {
        setScratches(prev => prev.filter(s => s.id !== scratchId));
      }, 5000);
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

      {scratches.map(scratch => (
        <div
          key={scratch.id}
          className="fixed pointer-events-none z-40 animate-fade-in"
          style={{
            left: scratch.x,
            top: scratch.y,
            transform: `translate(-50%, -50%) rotate(${scratch.rotation}deg)`,
          }}
        >
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
            <path
              d="M 10 10 Q 12 40 10 70"
              stroke="#9b87f5"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity="0.4"
            />
            <path
              d="M 25 5 Q 27 40 25 75"
              stroke="#9b87f5"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
            />
            <path
              d="M 40 8 Q 42 40 40 72"
              stroke="#9b87f5"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity="0.4"
            />
            <path
              d="M 50 15 Q 52 40 50 65"
              stroke="#9b87f5"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.3"
            />
          </svg>
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

        .animate-paw-strike {
          animation: paw-strike 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </>
  );
}
