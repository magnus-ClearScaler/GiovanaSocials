import { useEffect, useRef } from "react";
import "./HeroAnimation.css";

type Props = {
  /** HTML for the rotating cube text faces. */
  poemHTML?: string;
  /** Optional background image URL. If omitted a soft brand gradient is used. */
  backgroundImageUrl?: string;
  /** Optional foreground portrait image URL. */
  boyImageUrl?: string;
};

const defaultPoem = `
  <span class="ha-line ha-line-1">Social Media</span>
  <span class="ha-line ha-line-2"><em>Growth</em></span>
  <span class="ha-line ha-line-3">Without Limits</span>
`;

export function HeroAnimation({
  poemHTML = defaultPoem,
  backgroundImageUrl,
  boyImageUrl,
}: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adjust = () => {
      if (!contentRef.current) return;
      const viewportWidth = window.innerWidth;
      const baseWidth = 1000;
      const scaleFactor =
        viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.9 : 1;
      contentRef.current.style.transform = `scale(${scaleFactor})`;
    };
    adjust();
    window.addEventListener("resize", adjust);
    return () => window.removeEventListener("resize", adjust);
  }, []);

  return (
    <header className="hero-animation">
      <div className="ha-stage">
        <div
          ref={contentRef}
          className="ha-content"
          style={{ width: 1000, height: 562 }}
        >
          <div className="ha-scene">
            <div className="ha-hue" />
            {backgroundImageUrl && (
              <img
                className="ha-bg"
                src={backgroundImageUrl}
                alt="Soft brand backdrop"
                onError={(e) =>
                  (e.currentTarget.style.display = "none")
                }
              />
            )}
            {boyImageUrl && (
              <img
                className="ha-fg"
                src={boyImageUrl}
                alt="Editorial portrait"
                onError={(e) =>
                  (e.currentTarget.style.display = "none")
                }
              />
            )}

            <div className="ha-cube-wrap">
              <div className="ha-cube">
                <div className="ha-face ha-top" />
                <div className="ha-face ha-bottom" />
                <div
                  className="ha-face ha-left ha-text"
                  dangerouslySetInnerHTML={{ __html: poemHTML }}
                />
                <div
                  className="ha-face ha-right ha-text"
                  dangerouslySetInnerHTML={{ __html: poemHTML }}
                />
                <div className="ha-face ha-front ha-text-front" />
                <div
                  className="ha-face ha-back ha-text"
                  dangerouslySetInnerHTML={{ __html: poemHTML }}
                />
              </div>
            </div>

            <div className="ha-cube-wrap ha-cube-reflect" aria-hidden="true">
              <div className="ha-cube">
                <div className="ha-face ha-top" />
                <div className="ha-face ha-bottom" />
                <div
                  className="ha-face ha-left ha-text"
                  dangerouslySetInnerHTML={{ __html: poemHTML }}
                />
                <div
                  className="ha-face ha-right ha-text"
                  dangerouslySetInnerHTML={{ __html: poemHTML }}
                />
                <div className="ha-face ha-front" />
                <div
                  className="ha-face ha-back ha-text"
                  dangerouslySetInnerHTML={{ __html: poemHTML }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
