export interface VideoData {
	youtubeId: string;
	title: string;
	channel: string;
	duration?: string;
}

export const aboutVideo: VideoData = {
	youtubeId: 'BCy5YFIeotk',
	title: 'Fenagra 2026 Feira/Exhibition | São Paulo',
	channel: 'Canal FENAGRA no YouTube',
	// duration: '2:30',
};

export function getYouTubeWatchUrl(youtubeId: string): string {
	return `https://www.youtube.com/watch?v=${youtubeId}`;
}

export function getYouTubeEmbedUrl(youtubeId: string): string {
	return `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&playsinline=1`;
}
