import React, { useEffect, useRef } from 'react';

const AnimatedChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    // Generate realistic candlestick data
    const candles = [];
    let currentPrice = height / 2;
    const candleWidth = 12;
    const spacing = 4;
    const numCandles = Math.floor(width / (candleWidth + spacing));

    for (let i = 0; i < numCandles; i++) {
      const change = (Math.random() - 0.48) * 20;
      const open = currentPrice;
      const close = currentPrice + change;
      const high = Math.max(open, close) + Math.random() * 15;
      const low = Math.min(open, close) - Math.random() * 15;
      currentPrice = close;

      candles.push({
        x: i * (candleWidth + spacing),
        open,
        close,
        high,
        low,
        bullish: close > open
      });
    }

    let animationFrame = 0;
    const maxFrames = 120;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        const y = (height / 5) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Animate candles
      const progress = Math.min(animationFrame / maxFrames, 1);
      const visibleCandles = Math.floor(candles.length * progress);

      candles.slice(0, visibleCandles).forEach((candle, index) => {
        const alpha = index === visibleCandles - 1 ? progress * candles.length - visibleCandles + 1 : 1;

        // Draw wick
        ctx.strokeStyle = candle.bullish ? `rgba(218, 255, 1, ${alpha * 0.8})` : `rgba(255, 82, 82, ${alpha * 0.8})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(candle.x + candleWidth / 2, candle.high);
        ctx.lineTo(candle.x + candleWidth / 2, candle.low);
        ctx.stroke();

        // Draw body
        const bodyHeight = Math.abs(candle.close - candle.open);
        const bodyY = Math.min(candle.open, candle.close);

        if (candle.bullish) {
          ctx.fillStyle = `rgba(218, 255, 1, ${alpha * 0.9})`;
        } else {
          ctx.fillStyle = `rgba(255, 82, 82, ${alpha * 0.9})`;
        }

        ctx.fillRect(candle.x, bodyY, candleWidth, bodyHeight || 2);

        // Add glow effect to recent candles
        if (index > visibleCandles - 10) {
          ctx.shadowColor = candle.bullish ? 'rgba(218, 255, 1, 0.5)' : 'rgba(255, 82, 82, 0.5)';
          ctx.shadowBlur = 10;
          ctx.fillRect(candle.x, bodyY, candleWidth, bodyHeight || 2);
          ctx.shadowBlur = 0;
        }
      });

      // Draw moving average line
      if (visibleCandles > 10) {
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();

        candles.slice(0, visibleCandles).forEach((candle, index) => {
          const avgPrice = (candle.open + candle.close) / 2;
          if (index === 0) {
            ctx.moveTo(candle.x + candleWidth / 2, avgPrice);
          } else {
            ctx.lineTo(candle.x + candleWidth / 2, avgPrice);
          }
        });

        ctx.stroke();
      }

      if (animationFrame < maxFrames) {
        animationFrame++;
        requestAnimationFrame(animate);
      } else {
        // Loop animation
        setTimeout(() => {
          animationFrame = 0;
          animate();
        }, 2000);
      }
    };

    animate();
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 right-4 space-y-2 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[rgb(55,255,97)] rounded-full"></div>
            <span className="text-[rgb(218,218,218)]">Buy Signal</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-[rgb(218,218,218)]">Sell Signal</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-0.5 bg-purple-500"></div>
            <span className="text-[rgb(218,218,218)]">Moving Avg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedChart;
