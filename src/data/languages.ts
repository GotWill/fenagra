export interface Language {
	code: 'pt' | 'es' | 'en';
	label: string;
	name: string;
}

export const languages: Language[] = [
	{ code: 'pt', label: 'PT', name: 'Português' },
	{ code: 'es', label: 'ES', name: 'Español' },
	{ code: 'en', label: 'EN', name: 'English' },
];

export const defaultLanguage: Language['code'] = 'pt';
