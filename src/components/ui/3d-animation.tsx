import { useEffect, useRef } from "react";
import "./3d-animation.css";

export type PoemAnimationProps = {
  poemHTML: string;
  backgroundImageUrl: string;
};

export const PoemAnimation = ({
  poemHTML,
  backgroundImageUrl,
}: PoemAnimationProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function adjustContentSize() {
      if (contentRef.current) {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const baseW = 1000;
        const baseH = 562;
        // Cover the viewport — scale so the cube's bounding box fills both axes.
        const scaleFactor = Math.max(vw / baseW, vh / baseH);
        contentRef.current.style.transform = `scale(${scaleFactor})`;
      }
    }

    adjustContentSize();
    window.addEventListener("resize", adjustContentSize);
    return () => window.removeEventListener("resize", adjustContentSize);
  }, []);

  // Repeat the poem so each face has enough text to scroll for the
  // -54000px keyframes without showing empty space.
  const repeated = Array(8).fill(poemHTML).join("");

  return (
    <header className="hero-section">
      <div className="container">
        <div
          ref={contentRef}
          className="content"
          style={{ display: "block", width: "1000px", height: "562px" }}
        >
          <div className="container-full">
            <div className="animated hue"></div>
            <img
              className="backgroundImage"
              src={backgroundImageUrl}
              alt="A neon-lit room at night"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            <div className="container">
              <div className="cube">
                <div className="face top"></div>
                <div className="face bottom"></div>
                <div
                  className="face left text"
                  dangerouslySetInnerHTML={{ __html: repeated }}
                ></div>
                <div
                  className="face right text"
                  dangerouslySetInnerHTML={{ __html: repeated }}
                ></div>
                <div className="face front"></div>
                <div
                  className="face back text"
                  dangerouslySetInnerHTML={{ __html: repeated }}
                ></div>
              </div>
            </div>

            <div className="container-reflect">
              <div className="cube">
                <div className="face top"></div>
                <div className="face bottom"></div>
                <div
                  className="face left text"
                  dangerouslySetInnerHTML={{ __html: repeated }}
                ></div>
                <div
                  className="face right text"
                  dangerouslySetInnerHTML={{ __html: repeated }}
                ></div>
                <div className="face front"></div>
                <div
                  className="face back text"
                  dangerouslySetInnerHTML={{ __html: repeated }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
