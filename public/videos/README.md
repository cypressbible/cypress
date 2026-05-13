# Welcome video

Place your homepage welcome video here as **`welcome.mp4`**.

Your file in Downloads is named **`website-video.mp4`**. Copy it locally (do not commit if over GitHub’s 100MB limit):

```bash
cp ~/Downloads/website-video.mp4 ./public/videos/welcome.mp4
```

For production, either:

- Re-encode to under ~80MB and commit, or  
- Host the file (R2, Cloudflare Stream, YouTube, etc.) and set **`welcomeVideoSrc`** in `src/content/pages/home.md` (or Tina) to that full URL.
