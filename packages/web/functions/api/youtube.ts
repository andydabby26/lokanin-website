export const onRequestGet: PagesFunction = async () => {
  try {
    const response = await fetch(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCmJYcx0T8qrgVDWnfIsYsHg"
    );
    const xml = await response.text();

    const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];

    const videos = entries.map((entry) => {
      const title = entry.match(/<title>([\s\S]*?)<\/title>/)?.[1] || "";
      const videoId = entry.match(/<yt:videoId>([\s\S]*?)<\/yt:videoId>/)?.[1] || "";
      const description = entry.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] || "";
      const thumbnail = entry.match(/<media:thumbnail url="([\s\S]*?)"/)?.[1] || "";
      return { title, videoId, description, thumbnail };
    });

    return Response.json({ videos });
  } catch {
    return Response.json({ error: "Failed to fetch YouTube data" }, { status: 500 });
  }
};
