export default class ValidarCpf {
	private Conversor(cpf) {
		const conversor = []
		for (const i in cpf) {
			if (!isNaN(cpf[i])) {
				conversor.push(+cpf[i])
			}
		}
		return conversor
	}

	private ValidarDigitoUm(cpf) {
		const conversor = this.Conversor(cpf)
		let resultado = 0
		let a = 0
		for (let i = 10; i >= 2; i--) {
			resultado = i * conversor[a] + resultado
			a = a + 1
		}
		resultado = (resultado * 10) % 11
		if (resultado === conversor[9]) {
			return true
		} else {
			return false
		}
	}

	private ValidarDigitoDois(cpf) {
		const conversor = this.Conversor(cpf)
		let resultado = 0
		let a = 0
		for (let i = 11; i >= 2; i--) {
			resultado = i * conversor[a] + resultado
			a = a + 1
		}
		resultado = (resultado * 10) % 11

		if (resultado >= 10) {
			resultado = 0
		}
		if (resultado === conversor[10]) {
			return true
		} else {
			return false
		}
	}

	async Validar(cpf: string): Promise<boolean> {
		const digitoUm = await this.ValidarDigitoUm(cpf)

		const digitoDois = await this.ValidarDigitoDois(cpf)

		if (digitoUm && digitoDois) {
			return true
		} else {
			return false
		}
	}
}
