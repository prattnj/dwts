# Dancing with the Stars — Party Site

Promotional website for the DWTS birthday party. React + TypeScript + Tailwind CSS v4,
served by a minimal Express server, deployable via Docker.

## Development

```sh
npm install
npm run dev        # Vite dev server
```

## Production (local)

```sh
npm run build      # outputs to dist/
npm start          # Express serves dist/ on port 3000
```

## Docker

The container listens on port 3000 internally; the host port is taken from the
`PORT_DWTS` environment variable.

```sh
docker compose up -d --build
```

## Filling in real content

- **Promo video**: the trailer lives at `public/trailer.mp4` (H.264, converted from the
  original .mov); poster frame at `public/trailer-poster.jpg`.
- **This year's couples**: edit the `couples` array in `src/components/Couples.tsx`.
- **Last year's recap**: edit `lastYearCouples` in `src/components/LastYear.tsx`.
- **Event details**: edit the `details` array in `src/components/EventDetails.tsx`.
