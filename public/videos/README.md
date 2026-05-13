# Welcome video

The homepage uses **`welcome.mp4`** (H.264 + AAC, 720p, web-optimized with `faststart`) checked into this folder so Cloudflare Pages can serve it.

To replace it with a new master from Downloads:

```bash
ffmpeg -y -i ~/Downloads/website-video.mp4 -vf "scale=-2:720" -c:v libx264 -crf 26 -preset fast \
  -c:a aac -b:a 128k -movflags +faststart ./welcome.mp4
```

Or point `welcomeVideoSrc` in `src/content/pages/home.md` to any HTTPS URL.
