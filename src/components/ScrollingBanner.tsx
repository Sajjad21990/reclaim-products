import React, { useEffect, useRef } from "react";
import "./ScrollingBanner.css";

interface BannerItem {
  type: "text" | "logo" | "combined";
  text?: string;
  logoSrc?: string;
  logoAlt?: string;
  link?: string;
}

interface ScrollingBannerProps {
  items: BannerItem[];
  speed?: number;
  backgroundColor?: string;
  textColor?: string;
  height?: number;
}

const ScrollingBanner: React.FC<ScrollingBannerProps> = ({
  items,
  speed = 30,
  backgroundColor = "#1a1a1a",
  textColor = "#ffffff",
  height = 50,
}) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bannerRef.current || !contentRef.current) return;

    // Clone content to create seamless loop
    const content = contentRef.current;
    const clone = content.cloneNode(true) as HTMLDivElement;
    bannerRef.current.appendChild(clone);

    // Calculate animation duration based on content width and speed
    const contentWidth = content.offsetWidth;
    const duration = contentWidth / speed;

    // Set animation properties
    bannerRef.current.style.setProperty("--duration", `${duration}s`);
    bannerRef.current.style.setProperty("--banner-height", `${height}px`);
    bannerRef.current.style.setProperty("--background-color", backgroundColor);
    bannerRef.current.style.setProperty("--text-color", textColor);

    bannerRef.current.classList.add("animate");
  }, [speed, backgroundColor, textColor, height, items]);

  const renderItem = (item: BannerItem, index: number) => {
    const inner = (
      <>
        {item.logoSrc && <img src={item.logoSrc} alt={item.logoAlt || ""} className="banner-logo" />}
        {item.text && <span className="banner-text">{item.text}</span>}
      </>
    );

    return (
      <div key={index} className="banner-item">
        {item.link ? (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {inner}
          </a>
        ) : (
          inner
        )}
      </div>
    );
  };

  return (
    <div
      className="scrolling-banner"
      ref={bannerRef}
      style={{
        height: `${height}px`,
        backgroundColor,
        color: textColor,
      }}
    >
      <div className="banner-content" ref={contentRef}>
        {items.map(renderItem)}
      </div>
    </div>
  );
};

export default ScrollingBanner;
