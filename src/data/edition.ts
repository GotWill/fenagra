export interface EditionCard {
	tone: 'accent' | 'butter' | 'dark' | 'outline';
	label?: string;
	title?: string;
	caption: string;
	countTo: number;
	prefix?: string;
	suffix?: string;
	icon?: 'ticket' | 'clock';
}

export const edition = {
	title: '2026 foi uma das maiores edições da história da feira',
	cta: { label: 'Ver a edição 2026', href: '#' },
	photo: {
		tag: 'FENAGRA 2026',
		alt: 'Público visitando os estandes da FENAGRA 2026',
		caption: 'visitantes profissionais da cadeia Feed & Food',
		countTo: 12,
		prefix: '+ de ',
		suffix: ' mil',
	},
	cards: [
		{
			tone: 'dark',
			title: 'Entrada gratuita',
			caption: 'para profissionais do setor, com credenciamento',
			countTo: 0,
			icon: 'ticket',
		},
		{ tone: 'accent', caption: 'congressistas', countTo: 1500 },
		{ tone: 'outline', caption: 'expositoras em 2026', countTo: 250, suffix: ' marcas', icon: 'clock' },
	] as EditionCard[],
};
