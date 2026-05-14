/** YouTube live embed + channel links (Cypress Bible Church). */

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/cypressbiblechurch";

/**
 * Public channel id from the channel page (`externalId` on /c/cypressbiblechurch).
 * Used with YouTube’s permanent live embed URL so the player shows the stream when the channel is live.
 */
export const YOUTUBE_CHANNEL_ID = "UCh9b74sJKaOdbu5BIYRTO5g";

export function getLiveStreamEmbedSrc(): string {
  const params = new URLSearchParams({
    channel: YOUTUBE_CHANNEL_ID,
    rel: "0",
    modestbranding: "1"
  });
  return `https://www.youtube-nocookie.com/embed/live_stream?${params.toString()}`;
}
