import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';

// Caption with one highlighted keyword. The keyword gets an accent color and a box,
// which keeps the eye moving (the pattern the lecture-style shorts use).
export const Caption = ({text, keyword, p}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 5], [0, 1], {extrapolateRight: 'clamp'});
  const parts = keyword ? text.split(keyword) : [text];
  return (
    <AbsoluteFill style={{justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 240, opacity}}>
      <div style={{fontFamily: 'sans-serif', fontSize: 64, fontWeight: 700, color: p.text, background: 'rgba(0,0,0,0.5)', padding: '16px 28px', borderRadius: 12, textAlign: 'center', maxWidth: 900}}>
        {keyword ? (
          <>
            {parts[0]}
            <span style={{color: p.accent, background: 'rgba(255,255,255,0.12)', padding: '0 8px', borderRadius: 8}}>{keyword}</span>
            {parts[1]}
          </>
        ) : text}
      </div>
    </AbsoluteFill>
  );
};
