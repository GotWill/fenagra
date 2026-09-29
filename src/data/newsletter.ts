export interface ConsentItem {
	text: string;
	purpose: string; // ex.: "finalidade 5"
}

export const newsletter = {
	eyebrow: 'Newsletter',
	title: 'Fique por dentro da',
	highlight: 'Fenagra 2027',
	body: 'Cadastre-se e receba em primeira mão a abertura do credenciamento e a programação completa dos congressos.',
	cta: 'Quero receber',
	emailPlaceholder: 'Digite seu e-mail',
	privacy: {
		label: 'Preferências de comunicação (LGPD)',
		linkText: 'Ler a Política de Privacidade →',
		linkHref: 'https://iegbrasil.com.br/privacy-policy/',
		intro: 'Após ler a Política de Privacidade, declare suas escolhas sobre como seus dados podem ser usados:',
	},
	consents: [
		{
			text: 'Aceito a criação de comunicação personalizada pela IEG',
			purpose: 'finalidade 5',
		},
		{
			text: 'Aceito o envio de comunicações de marketing direto (exceto mensagens informativas comuns / "soft spam") pela IEG',
			purpose: 'finalidade 7',
		},
		{
			text: 'Aceito o compartilhamento dos meus dados com empresas parceiras ou controladas pela IEG, para que elas realizem suas próprias ações de marketing',
			purpose: 'finalidade 8a',
		},
		{
			text: 'Aceito o envio de mensagens informativas e promocionais pela Italian Exhibition Group Brasil Eventos Ltda (empresa do grupo no Brasil)',
			purpose: 'finalidade 8',
		},
	] satisfies ConsentItem[],
};