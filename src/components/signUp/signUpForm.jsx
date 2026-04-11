import { ClipboardIcon } from "lucide-react";
import {
    Field,
    FieldLabel,
} from "@/components/ui/field"
import {
    InputGroup,
    InputGroupInput,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignUpForm() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-6">
            <div className="w-full max-w-md flex flex-col gap-6 sm:gap-8">

                <div className="flex items-center gap-4 justify-center sm:justify-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600">
                        <ClipboardIcon className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-xl font-bold">Hideiber</h1>
                </div>

                <div className="flex flex-col gap-2 text-center sm:text-left">
                    <h2 className="text-2xl font-semibold">Criar sua conta</h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Preencha os dados abaixo para começar
                    </p>
                </div>

                <form className="flex flex-col gap-4">
                    <Field>
                        <FieldLabel className="text-sm" htmlFor="nome">Nome completo</FieldLabel>
                        <InputGroup>
                            <InputGroupInput id="nome" type="text" placeholder="Seu nome" />
                        </InputGroup>
                    </Field>

                    <Field>
                        <FieldLabel className="text-sm" htmlFor="empresa">Nome da empresa</FieldLabel>
                        <InputGroup>
                            <InputGroupInput id="empresa" type="text" placeholder="Nome da sua empresa" />
                        </InputGroup>
                    </Field>

                    <Field>
                        <FieldLabel className="text-sm" htmlFor="email">E-mail</FieldLabel>
                        <InputGroup>
                            <InputGroupInput id="email" type="email" placeholder="seu@email.com" />
                        </InputGroup>
                    </Field>

                    <Field>
                        <FieldLabel className="text-sm" htmlFor="password">Senha</FieldLabel>
                        <InputGroup>
                            <InputGroupInput id="password" type="password" placeholder="********" />
                        </InputGroup>
                    </Field>

                    <Field>
                        <FieldLabel className="text-sm" htmlFor="confirmPassword">Confirmar senha</FieldLabel>
                        <InputGroup>
                            <InputGroupInput id="confirmPassword" type="password" placeholder="********" />
                        </InputGroup>
                    </Field>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm gap-2">
                        <input id="terms" type="checkbox" className="rounded" />
                        <label htmlFor="terms">
                            Eu concordo com os{" "}
                            <Link href="/" className="text-purple-600 hover:underline">
                                termos de uso
                            </Link>{" "}
                            e{" "}
                            <Link href="/" className="text-purple-600 hover:underline">
                                política de privacidade
                            </Link>
                        </label>
                    </div>

                    <Button className="w-full h-12 bg-purple-600 text-white hover:bg-purple-700">
                        Criar conta
                    </Button>

                    <p className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm text-gray-600">
                        <span>Já tem uma conta?</span>
                        <Link href="/login" className="text-purple-600 hover:underline">
                            Fazer Login
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    )
}
