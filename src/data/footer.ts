export interface FooterLink {
	label: string;
	href: string;
}

export interface FooterGroup {
	title: string;
	links: FooterLink[];
}

export const footer = {
	logo: {
		alt: 'FENAGRA — Feira Internacional da Agroindústria Feed & Food',
	},
	tagline: 'O principal ponto de encontro da cadeia agroindustrial Feed & Food na América Latina.',

	social: [
		{ name: 'Instagram', href: 'https://www.instagram.com/editorastilo' },
		{ name: 'Facebook', href: 'https://www.facebook.com/editorastilo' },
		{ name: 'X (antigo Twitter)', href: 'https://x.com/editorastilo' },
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/fenagra/' },
		{ name: 'YouTube', href: 'https://www.youtube.com/user/editorastilo' },
	] as const,

	groups: [
		{
			title: 'A Feira',
			links: [
				{ label: 'Quem somos', href: '#' },
				{ label: 'Imprensa', href: '#' },
				{ label: 'Contato', href: '#' },
			],
		},
		{
			title: 'Visitar',
			links: [
				{ label: 'Credenciamento 2027', href: '#' },
				{ label: 'Por que visitar', href: '#' },
				{ label: 'Lista de expositores', href: '#' },
				{ label: 'Dúvidas frequentes', href: '#' },
			],
		},
		{
			title: 'Expor',
			links: [
				{ label: 'Solicitar proposta', href: '#' },
				{ label: 'Mídia kit', href: '#' },
				{ label: 'Patrocínio', href: '#' },
			],
		},
		{
			title: 'Congressos',
			links: [
				{ label: 'Programação 2027', href: '#' },
				{ label: 'Congressos 2026', href: '#' },
			],
		}
	] satisfies FooterGroup[],

	contact: {
		label: 'Atendimento',
		phone: { text: '(11) 2384-0047', href: 'tel:+551123840047' },
		whatsapp: { text: 'WhatsApp (11) 97450-0047', href: 'https://wa.me/5511974500047' },
		email: { text: 'contato@editorastilo.com.br', href: 'mailto:contato@editorastilo.com.br' },
	},

	legal: {
		copyright:
			'Copyright © 2025 Fenagra 2026 | Promoção e Organização: DG Eventos e Editora Ltda – CNPJ: 04.738.703-0001-72',
		links: [
			{ label: 'Termos de uso', href: '#' },
			{ label: 'Política de privacidade', href: '#' },
		],
	},
};
