import React, { useState } from 'react';
import {
  Boxes,
  Clock,
  Cpu,
  Factory,
  FileCheck,
  FileText,
  Flame,
  HardHat,
  Headphones,
  PackagePlus,
  Pill,
  Plane,
  Search,
  Shield,
  ShieldCheck,
  Ship,
  ShoppingBag,
  Sprout,
  Truck,
  Utensils,
  Warehouse,
  Wrench,
} from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'inverse' | 'cobalt';
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  className?: string;
}

export const SureAfricaLogo: React.FC<LogoProps> = ({
  variant = 'default',
  size = 'md',
  showWordmark = true,
  className = '',
}) => {
  const iconDims = size === 'lg' ? 56 : size === 'sm' ? 24 : 28;
  const textSize =
    size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-sm' : 'text-[15px]';

  const markBg =
    variant === 'inverse'
      ? '#FFFFFF'
      : variant === 'cobalt'
      ? '#1434CB'
      : '#1434CB';
  const markStroke =
    variant === 'inverse' ? '#0B0D12' : '#FFFFFF';
  const accentFill = '#F2B705';
  const wordmarkColor =
    variant === 'inverse' ? 'text-white' : 'text-[#0B0D12]';

  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Swappable Geometric S Mark */}
      <svg
        width={iconDims}
        height={iconDims}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="36" height="36" rx="6" fill={markBg} />
        <path
          d="M24.5 11.5H14.5C12.567 11.5 11 13.067 11 15C11 16.933 12.567 18.5 14.5 18.5H21.5C23.433 18.5 25 20.067 25 22C25 23.933 23.433 25.5 21.5 25.5H11.5"
          stroke={markStroke}
          strokeWidth="2.75"
          strokeLinecap="square"
        />
        <rect x="22" y="9" width="4" height="4" rx="0.5" fill={accentFill} />
      </svg>
      {showWordmark && (
        <span
          className={`font-medium tracking-[0.04em] uppercase whitespace-nowrap ${textSize} ${wordmarkColor}`}
        >
          SURE AFRICA
        </span>
      )}
    </span>
  );
};

interface MonoLabelProps {
  children: React.ReactNode;
  tone?: 'dark' | 'light' | 'cobalt' | 'gold';
  className?: string;
}

export const MonoLabel: React.FC<MonoLabelProps> = ({
  children,
  tone = 'dark',
  className = '',
}) => {
  const textTone =
    tone === 'light'
      ? 'text-white/85'
      : tone === 'cobalt'
      ? 'text-[#1434CB]'
      : 'text-[#4B5563]';
  const squareTone =
    tone === 'light'
      ? 'bg-white'
      : tone === 'cobalt'
      ? 'bg-[#1434CB]'
      : tone === 'gold'
      ? 'bg-[#F2B705]'
      : 'bg-[#0B0D12]';

  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em] ${textTone} ${className}`}
    >
      <span className={`inline-block w-1.5 h-1.5 shrink-0 ${squareTone}`} aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
};

interface MediaFrameProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackTitle?: string;
}

export const MediaFrame: React.FC<MediaFrameProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  fallbackTitle = 'Sure Africa Logistics',
}) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0B0D12] via-[#15224A] to-[#1434CB] text-white p-6 ${className}`}
        role="img"
        aria-label={alt}
      >
        <Ship className="w-8 h-8 mb-2 text-[#F2B705]" strokeWidth={1.5} />
        <span className="font-mono text-[11px] uppercase tracking-wider text-white/80 text-center">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-[#E5E7EB] ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
};

export const ServiceIcon: React.FC<{
  name: string;
  className?: string;
}> = ({ name, className = 'w-5 h-5' }) => {
  const props = { className, strokeWidth: 1.5 };
  switch (name) {
    case 'ship':
      return <Ship {...props} />;
    case 'plane':
      return <Plane {...props} />;
    case 'truck':
      return <Truck {...props} />;
    case 'file-check':
      return <FileCheck {...props} />;
    case 'warehouse':
      return <Warehouse {...props} />;
    case 'boxes':
      return <Boxes {...props} />;
    case 'search':
      return <Search {...props} />;
    case 'package-plus':
      return <PackagePlus {...props} />;
    case 'factory':
      return <Factory {...props} />;
    case 'shopping-bag':
      return <ShoppingBag {...props} />;
    case 'wrench':
      return <Wrench {...props} />;
    case 'cpu':
      return <Cpu {...props} />;
    case 'utensils':
      return <Utensils {...props} />;
    case 'pill':
      return <Pill {...props} />;
    case 'hard-hat':
      return <HardHat {...props} />;
    case 'flame':
      return <Flame {...props} />;
    case 'sprout':
      return <Sprout {...props} />;
    case 'shield':
      return <ShieldCheck {...props} />;
    case 'clock':
      return <Clock {...props} />;
    case 'headphones':
      return <Headphones {...props} />;
    case 'file':
      return <FileText {...props} />;
    default:
      return <Shield {...props} />;
  }
};
