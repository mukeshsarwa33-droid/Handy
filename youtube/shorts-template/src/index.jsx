import React from 'react';
import {registerRoot, Composition} from 'remotion';
import {Short} from './Short';

const defaultProps = {
  title: 'Sample Short',
  preset: 'warmCool',
  captions: [
    {from: 0, to: 60, text: 'Color sets the mood', keyword: 'mood'},
    {from: 60, to: 120, text: 'Warm light, cool shadows', keyword: 'cool shadows'},
    {from: 120, to: 180, text: 'Captions stay readable', keyword: 'readable'},
  ],
};

const Root = () => (
  <Composition id="Short" component={Short} durationInFrames={180} fps={30} width={1080} height={1920} defaultProps={defaultProps} />
);

registerRoot(Root);
