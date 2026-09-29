export interface Partner {
	name: string; // usado no alt da imagem
	file: string; // nome do arquivo em src/assets/images/partners/
	href: string; // link de destino do logo
}

export const partners = {
	realizacao: [
		{ name: 'Editora Stilo', file: 'editora-stilo.png', href: 'https://www.editorastilo.com.br' },
		{ name: 'IEG Brasil', file: 'ieg.png', href: 'https://www.iegbrasil.com.br' },
	] satisfies Partner[],

	apoio: [
		{ name: 'ABISA', file: 'abisalogoazul.png', href: 'https://abisa.com.br/' },
		{ name: 'CBNA', file: 'cbna.png', href: 'https://www.cbna.com.br/' },
		{ name: 'Embrapa', file: 'Embrapa-Suinos-e-Aves_Sintese.png', href: 'https://www.embrapa.br/' },
		{ name: 'ABIEC', file: 'abiec.png', href: 'https://abiec.com.br/' },
		{ name: 'ABRA', file: 'abra.webp', href: 'https://abra.ind.br/' },
		{ name: 'Abrafrigo', file: 'ABRAFRIGO.png', href: 'https://www.abrafrigo.com.br/' },
		{ name: 'Editora Stilo', file: 'editora-stilo.png', href: 'https://www.editorastilo.com.br' },
		{ name: 'Mapa', file: 'mapa.png', href: '' },
		{ name: 'Distrito Anhembi', file: 'Anhembi.png', href: 'https://www.distritoanhembi.com.br' },
		{ name: 'AEG', file: 'aeg.png', href: '#' },
		{ name: 'Abiam', file: 'logo-abiam-45anos.png', href: 'https://abiam.com.br/' },
		{ name: 'São Paulo Turismo', file: 'sao-paulo-turismo.png', href: '#' },
		{ name: 'SBOG', file: 'sbog.png', href: 'https://oleosegorduras.org.br/' },
		{ name: 'SBNutriPet', file: 'sbnutripet-v2.png', href: 'https://sbnutripet.cbna.com.br/' },
		{ name: 'Sindrações', file: 'sindiracoes.png', href: 'https://sindiracoes.org.br/' },
		{ name: 'Ubrabio', file: 'Ubrabio.png', href: 'https://ubrabio.com.br/' },
		{ name: 'ABIOVE', file: 'abiove.png', href: 'https://abiove.org.br/' },
		{ name: 'Pet Food', file: 'petfood.png', href: 'https://www.petfoodexpress.com.br/' },
	] satisfies Partner[],

	midias: [
		{ name: 'Óleos & Gorduras', file: 'oleos-e-gorduras.png', href: 'https://www.editorastilo.com.br/revista-oleos-e-gorduras/' },
		{ name: 'AquaFeed', file: 'aquafed.png', href: 'https://www.aquafed.org/' },
		{ name: 'Espuma', file: 'espuma.png', href: 'https://abisa.com.br/revista-espuma' },
		{ name: 'Reciclagem Animal', file: 'reciclagem-animal.png', href: 'https://abra.ind.br/' },
		{ name: 'Pet Food Brasil', file: 'pet-food-brasil.png', href: 'https://www.editorastilo.com.br/revista-pet-food/' },
		{ name: 'nutriNews', file: 'nuti-news.png', href: 'https://nutrinews.com/pt-br/paises/brasil/' },
		{ name: 'Zoo', file: 'zoo-inc.png', href: 'https://www.instagram.com/zooincagency/' },
		{ name: 'Ingredientes & Nutrientes', file: 'ingredientes.png', href: 'https://www.editorastilo.com.br/revista-ingredientes-e-nutrientes/' },
		{ name: 'AgriBrasilis', file: 'AgriBrasilis.png', href: 'https://agribrasilis.com/' },
		{ name: 'Pet Food', file: 'petfood-2.png', href: 'https://www.editorastilo.com.br/revista-pet-food/' },
		{ name: 'Panorama PetVet', file: 'Panorama-escuro.png', href: 'https://panoramapetvet.com.br/' },
		{ name: 'AEG', file: 'aeg.png', href: '#' },
	] satisfies Partner[],
};
