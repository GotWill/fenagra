export interface Segment {
	number: string;
	label: string;
	href: string;
	/** Rótulo curto usado em chips (ex.: AboutSection). Ausente = não aparece em listas resumidas. */
	shortLabel?: string;
}

export const segments: Segment[] = [
	{
		number: '01',
		label: 'Nutrição animal e pet food',
		href: '/segmentos/nutricao-animal-e-pet-food',
		shortLabel: 'Nutrição animal e pet food',
	},
	{
		number: '02',
		label: 'Óleos e gorduras vegetais',
		href: '/segmentos/oleos-e-gorduras-vegetais',
		shortLabel: 'Óleos e gorduras',
	},
	{ number: '03', label: 'Biodiesel', href: '/segmentos/biodiesel', shortLabel: 'Biodiesel' },
	{
		number: '04',
		label: 'Reciclagem animal e graxarias',
		href: '/segmentos/reciclagem-animal-e-graxarias',
		shortLabel: 'Reciclagem animal',
	},
	{
		number: '05',
		label: 'Máquinas e equipamentos',
		href: '/segmentos/maquinas-e-equipamentos',
		shortLabel: 'Equipamentos',
	},
	{ number: '06', label: 'Matérias-primas e insumos', href: '/segmentos/materias-primas-e-insumos' },
	{ number: '07', label: 'Embalagens', href: '/segmentos/embalagens', shortLabel: 'Embalagens' },
	{
		number: '08',
		label: 'Logística, software e serviços',
		href: '/segmentos/logistica-software-e-servicos',
		shortLabel: 'Logística e serviços',
	},
];
