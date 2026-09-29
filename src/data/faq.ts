export const faqIntro = {
	title: 'Saiba mais sobre os congressos realizados em paralelo à Fenagra!',
	body: 'A Fenagra 2027 vai reunir profissionais respeitados e renomados do mercado para compartilhar suas opiniões e ideias em um ambiente de debates e experiências.',
};

export const faqSectionTitle = 'Perguntas Frequentes';

export interface FaqItem {
	question: string;
	answer: string;
	defaultOpen?: boolean;
}

export const faqItems: FaqItem[] = [
	{
		question: 'Quando será realizada a Fenagra 2027?',
		answer: 'A Fenagra 2027 acontecerá nos dias 11 a 13 de maio de 2027, no horário das 11h às 19h.',
		defaultOpen: true,
	},
	{
		question: 'Qual o endereço do evento?',
		answer:
			'A Fenagra 2027 acontecerá no Distrito Anhembi — São Paulo, na Av. Olavo Fontoura, 1209 — Santana, São Paulo — SP, 02012-021.',
	},
	{
		question: 'A visitação à feira é aberta ao público?',
		answer: 'A Fenagra é uma feira de negócios voltada exclusivamente a todos os envolvidos no setor Feed & Food.',
	},
	{
		question: 'A visitação à feira é gratuita?',
		answer: 'Sim, é gratuita, sendo necessário somente o credenciamento.',
	},
	{
		question: 'Qual o formato da Fenagra 2027?',
		answer: 'Feira de negócios realizada durante os dias 11 a 13 de maio de 2027. Os congressos acontecem em conjunto com a feira.',
	},
	{
		question: 'Como faço para visitar a feira?',
		answer:
			'O credenciamento on-line é a maneira mais rápida de evitar filas no dia do evento, garantindo acesso aos 3 dias de feira e retirada da credencial nos totens de autoatendimento na entrada. Você também pode se credenciar pessoalmente nos guichês durante o evento.',
	},
];
