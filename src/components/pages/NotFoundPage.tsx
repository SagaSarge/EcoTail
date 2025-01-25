import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const [floatingItems, setFloatingItems] = useState<Array<{ id: number; type: string; x: number }>>([]);

  useEffect(() => {
    // Generate floating recycling items
    const items = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      type: ['♻️', '🌱', '🌍', '📦', '🔋'][Math.floor(Math.random() * 5)],
      x: Math.random() * 100
    }));
    setFloatingItems(items);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0A1128] to-[#001F54] text-white px-4">
      {/* Floating items */}
      {floatingItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-2xl"
          initial={{ 
            x: `${item.x}vw`, 
            y: -20,
            rotate: 0,
            opacity: 0.7
          }}
          animate={{ 
            y: ['110vh'],
            rotate: [0, 360],
            opacity: [0.7, 0]
          }}
          transition={{ 
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {item.type}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Retro CRT Screen Effect */}
          <div className="relative bg-[#001233] p-8 rounded-lg border-4 border-[#4285F4] shadow-[0_0_50px_rgba(66,133,244,0.3)] mb-8">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(66,133,244,0.1)] to-transparent pointer-events-none" />
            <div className="relative">
              <motion.h1 
                className="text-8xl font-bold text-[#4285F4] mb-4 font-mono glitch"
                animate={{ 
                  textShadow: [
                    "0 0 10px #4285F4",
                    "2px 2px 10px #4285F4",
                    "-2px -2px 10px #4285F4",
                    "0 0 10px #4285F4"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                404
              </motion.h1>
              <h2 className="text-2xl font-bold mb-4 text-[#4285F4]">MISSION CONTROL: PAGE NOT FOUND</h2>
              <motion.div 
                className="h-1 w-full bg-[#4285F4] mb-4"
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 1 }}
              />
              <p className="text-[#CAF0F8] mb-6 font-mono">
                &gt; ERROR: The recycling coordinates you're looking for have been lost in space.
              </p>
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-3 bg-[#4285F4] text-white rounded-lg font-mono hover:bg-[#3367D6] transition-colors duration-300 flex items-center justify-center space-x-2"
                  onClick={() => navigate('/')}
                >
                  <span>⟨ RETURN TO HOME BASE ⟩</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(-1)}
                  className="w-full px-8 py-3 bg-transparent border-2 border-[#4285F4] text-[#4285F4] rounded-lg font-mono hover:bg-[#4285F4]/10 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>⟨ PREVIOUS COORDINATES ⟩</span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Terminal-style message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-sm text-[#90E0EF] max-w-md mx-auto"
          >
            <p className="typing-effect">
              &gt; Initiating eco-friendly route recalculation...
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Add some CSS for the glitch and typing effects */}
      <style jsx>{`
        .glitch {
          text-shadow: 
            0.05em 0 0 rgba(255,0,0,.75),
            -0.025em -0.05em 0 rgba(0,255,0,.75),
            0.025em 0.05em 0 rgba(0,0,255,.75);
          animation: glitch 500ms infinite;
        }

        .typing-effect {
          overflow: hidden;
          border-right: 2px solid #4285F4;
          white-space: nowrap;
          animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes glitch {
          0% { text-shadow: 0.05em 0 0 #ff0000, -0.025em -0.05em 0 #00ff00, 0.025em 0.05em 0 #0000ff; }
          14% { text-shadow: 0.05em 0 0 #ff0000, -0.025em -0.05em 0 #00ff00, 0.025em 0.05em 0 #0000ff; }
          15% { text-shadow: -0.05em -0.025em 0 #ff0000, 0.025em 0.025em 0 #00ff00, -0.05em -0.05em 0 #0000ff; }
          49% { text-shadow: -0.05em -0.025em 0 #ff0000, 0.025em 0.025em 0 #00ff00, -0.05em -0.05em 0 #0000ff; }
          50% { text-shadow: 0.025em 0.05em 0 #ff0000, 0.05em 0 0 #00ff00, 0 -0.05em 0 #0000ff; }
          99% { text-shadow: 0.025em 0.05em 0 #ff0000, 0.05em 0 0 #00ff00, 0 -0.05em 0 #0000ff; }
          100% { text-shadow: -0.025em 0 0 #ff0000, -0.025em -0.025em 0 #00ff00, -0.025em -0.05em 0 #0000ff; }
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #4285F4 }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage; 