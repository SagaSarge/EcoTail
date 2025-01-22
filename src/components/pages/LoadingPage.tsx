import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoadingPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/mobile-app');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50">
      {/* Pyramid Loader */}
      <div className="relative w-[300px] h-[300px] block [transform-style:preserve-3d] [transform:rotateX(-20deg)]">
        <div className="relative w-full h-full [transform-style:preserve-3d] animate-spin-3d">
          {/* Side 1 */}
          <span className="absolute inset-0 m-auto w-[70px] h-[70px] [transform:rotateZ(-30deg)_rotateY(90deg)] [transform-origin:center_top] [clip-path:polygon(50%_0%,0%_100%,100%_100%)] bg-gradient-to-r from-primary-600 via-primary-400 to-primary-600"></span>
          
          {/* Side 2 */}
          <span className="absolute inset-0 m-auto w-[70px] h-[70px] [transform:rotateZ(30deg)_rotateY(90deg)] [transform-origin:center_top] [clip-path:polygon(50%_0%,0%_100%,100%_100%)] bg-gradient-to-r from-primary-500 via-primary-300 to-primary-500"></span>
          
          {/* Side 3 */}
          <span className="absolute inset-0 m-auto w-[70px] h-[70px] [transform:rotateX(30deg)] [transform-origin:center_top] [clip-path:polygon(50%_0%,0%_100%,100%_100%)] bg-gradient-to-r from-primary-400 via-primary-200 to-primary-400"></span>
          
          {/* Side 4 */}
          <span className="absolute inset-0 m-auto w-[70px] h-[70px] [transform:rotateX(-30deg)] [transform-origin:center_top] [clip-path:polygon(50%_0%,0%_100%,100%_100%)] bg-gradient-to-r from-primary-300 via-primary-100 to-primary-300"></span>
          
          {/* Shadow */}
          <span className="absolute inset-0 m-auto w-[60px] h-[60px] bg-primary-200/50 [transform:rotateX(90deg)_translateZ(-40px)] blur-xl"></span>
        </div>
      </div>
      
      <p className="mt-12 text-lg text-gray-600">Loading your experience...</p>
    </div>
  );
}; 