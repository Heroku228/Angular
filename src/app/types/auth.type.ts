export type TLoginPayload = {
	username: string,
	password: string
}


export type TRegisterPayload = {
	username: string,
	email: string,
	password: string,
	icon: File | null | undefined
}
