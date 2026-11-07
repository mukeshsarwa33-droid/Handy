# Shorts template (Remotion)

Vertical 1080x1920 short with a title, timed captions with a highlighted keyword,
and three color presets based on color-harmony ideas:

- `warmCool`: complementary (warm accent light against a cool environment)
- `analogous`: neighboring hues in one family
- `monochrome`: one hue, varied only by lightness

## Use

```
npm install
npx remotion render src/index.jsx Short out/short.mp4 --props=props/warmCool.json
```

Edit a props file to change the title, captions (`from`/`to` in frames at 30 fps),
keyword highlights, or preset. Replace the gradient background in `src/Short.jsx`
with `<OffthreadVideo src=...>` once real footage is available.
