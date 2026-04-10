import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./card";
import { ClipboardIcon, Clock, DollarSign } from "lucide-react";

export default function FeatureCards() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-6">

            <Card className="hover:shadow-2xl transition-shadow">
                <CardHeader className="flex flex-col gap-2 ">
                    <div className="rounded-full bg-purple-100 p-2">
                        <ClipboardIcon className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle>Cadastro Completo</CardTitle>
                </CardHeader>
                <CardContent>
                    Registre todos os detalhes dos seus serviços em um só lugar, incluindo descrições, valores e especificações.
                </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow">
                <CardHeader className="flex flex-col gap-2 ">
                    <div className="rounded-full bg-purple-100 p-2">
                        <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle>Tempo Estimado</CardTitle>
                </CardHeader>
                <CardContent>
                    Defina e acompanhe o tempo estimado de execução de cada serviço para melhor planejamento.
                </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow">
                <CardHeader className="flex flex-col gap-2 ">
                    <div className="rounded-full bg-purple-100 p-2">
                        <DollarSign className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle>Valores e Descontos</CardTitle>
                </CardHeader>
                <CardContent>
                    Gerencie preços, aplique descontos e mantenha a precificação sempre atualizada e organizada.
                </CardContent>
            </Card>

        </section>
    )
}
