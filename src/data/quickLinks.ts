export interface QuickLink {
	label: string;
	href: string;
	plate: string; // cor da placa deslocada atrás do card
	icon: 'credential' | 'people' | 'mic' | 'question';
}

export const quickLinks: QuickLink[] = [
	{ label: 'Credenciamento', href: '#', plate: '#274B23', icon: 'credential' },
	{ label: 'Expositores', href: '#', plate: '#C3D337', icon: 'people' },
	{ label: 'Congressos', href: '#', plate: '#7BA13E', icon: 'mic' },
	{ label: 'Dúvidas', href: '#', plate: '#F4EBAA', icon: 'question' },
];
