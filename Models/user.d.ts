export default interface USer {
	id: number;
	user_name: string;
	password: string;
	email: string;
	creado_el: Date;
	modificado_el: Date | null;
}
