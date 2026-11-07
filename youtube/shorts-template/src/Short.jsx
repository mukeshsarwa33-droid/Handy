import React from 'react';
import {AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig, interpolate, spring} from 'remotion';
import {PRESETS} from './grade';
import {Caption} from './Caption';

// Replace the gradient `bg` with <OffthreadVideo src={...}/> once real footage is available.
export const Short = ({title, captions = [], preset = 'warmCool'}) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const p = PRESETS[preset] || PRESETS.warmCool;
  const zoom = interpolate(frame, [0, durationInFrames], [1, 1.08], {extrapolateRight: 'clamp'});
  const pop = spring({frame, fps, config: {damping: 14}});
  return (
    <AbsoluteFill style={{background: p.base, overflow: 'hidden'}}>
      <AbsoluteFill style={{background: p.bg, filter: `contrast(${p.contrast}) saturate(${p.saturate}) brightness(${p.brightness})`, transform: `scale(${zoom})`}} />
      <AbsoluteFill style={{background: `linear-gradient(180deg, ${p.shadow} 0%, rgba(0,0,0,0) 45%, ${p.highlight} 100%)`, mixBlendMode: 'soft-light', opacity: p.tintOpacity}} />
      <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
        <div style={{fontFamily: 'sans-serif', fontSize: 96, fontWeight: 800, color: p.text, transform: `scale(${pop})`, textAlign: 'center', padding: '0 60px'}}>{title}</div>
      </AbsoluteFill>
      {captions.map((c, i) => (
        <Sequence key={i} from={c.from} durationInFrames={c.to - c.from}>
          <Caption text={c.text} keyword={c.keyword} p={p} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
