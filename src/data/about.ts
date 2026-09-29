export interface AboutCta {
	label: string;
	href: string;
}

export interface AboutData {
	eyebrow: string;
	title: string;
	body: string;
	listLabel: string;
	primaryCta: AboutCta;
	secondaryCta: AboutCta;
}

export const about: AboutData = {
	eyebrow: 'A feira',
	title: 'Mais do que uma feira: uma plataforma de negócios, inovação e networking',
	body: 'A FENAGRA, Feira Internacional da Agroindústria Feed & Food, é o principal ponto de encontro da cadeia agroindustrial na América Latina. Empresas líderes apresentam soluções que movimentam e transformam o setor.',
	listLabel: 'Reúne em um só lugar',
	primaryCta: { label: 'Conheça os segmentos', href: '/segmentos' },
	secondaryCta: { label: 'Lista de expositores', href: '/expositores' },
};
