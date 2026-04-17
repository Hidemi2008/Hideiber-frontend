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

export default function LoginForm() {
    return (
        <section className="flex flex-col justify-center gap-8 p-6 h-screen max-w-md w-full mx-auto">

            <Link className="flex items-center gap-4" href="/">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600">
                    <ClipboardIcon className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-bold">Hideiber</h1></Link>

            <div className="flex flex-col gap-2 text-center sm:text-left">
                <h2 className="text-2xl font-semibold">Bem-vindo de volta</h2>
                <p className="text-gray-600 text-sm sm:text-base">
                    Entre com suas credenciais para acessar sua conta
                </p>
            </div>

            <form className="flex flex-col gap-4">
                <Field>
                    <FieldLabel className="text-sm" htmlFor="email">E-mail</FieldLabel>
                    <InputGroup>
                        <InputGroupInput
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                        />
                    </InputGroup>
                </Field>

                <Field>
                    <FieldLabel className="text-sm" htmlFor="password">Senha</FieldLabel>
                    <InputGroup>
                        <InputGroupInput
                            id="password"
                            type="password"
                            placeholder="********"
                        />
                    </InputGroup>
                </Field>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        Lembrar de mim
                    </label>
                    <Link href="/" className="text-purple-600 hover:underline">
                        Esqueceu a senha?
                    </Link>
                </div>

                <Button className="w-full h-10 bg-purple-600 text-white hover:bg-purple-700">
                    Entrar
                </Button>

                <p className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm text-gray-600">
                    <span>Não tem uma conta?</span>
                    <Link href="/signUp" className="text-purple-600 hover:underline">
                        Criar conta
                    </Link>
                </p>
            </form>
        </section>
    )
}
