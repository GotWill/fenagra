export interface NavLink {
	title: string;
	href: string;
	description?: string;
}

export interface NavGroup {
	label: string;
	links: NavLink[];
}

export const navigation: NavGroup[] = [
	{
		label: 'A Feira',
		links: [
			{ title: 'Quem somos', href: '/sobre' },
			{
				title: 'Imprensa',
				href: '/imprensa',
				description: 'Assessoria e credenciamento de imprensa',
			},
			{ title: 'Contato', href: '/contato' },
		],
	},
	{
		label: 'Visitar',
		links: [
			{
				title: 'Credenciamento 2027',
				href: '/credenciamento',
				description: 'Gratuito para profissionais do setor',
			},
			{
				title: 'Por que visitar',
				href: '/por-que-visitar',
				description: 'Segmentos e o que você encontra',
			},
			{ title: 'Lista de expositores', href: '/expositores' },
			{ title: 'Dúvidas frequentes', href: '/duvidas' },
		],
	},
	{
		label: 'Expor',
		links: [
			{
				title: 'Solicitar proposta',
				href: '/expor',
				description: 'Estandes e pacotes de participação',
			},
			{
				title: 'Mídia kit',
				href: '/midia-kit',
				description: 'Perfil do público e números de 2026',
			},
			{ title: 'Patrocínio', href: '/patrocinio' },
		],
	},
	{
		label: 'Congressos',
		links: [
			{
				title: 'Programação 2027',
				href: '/congressos/2027',
				description: 'Em breve: cadastre-se para ser avisado',
			},
			{ title: 'Congressos 2026', href: '/congressos/2026' },
		],
	},
];
