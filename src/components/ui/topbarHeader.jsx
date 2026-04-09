import { Button } from "./button";
import { ClipboardIcon } from "lucide-react"; 

export default function TopbarHeader() {
    return (
        <header className="flex justify-between items-center px-6 h-16 border-b">
            <div className="flex items-center gap-2">
                <ClipboardIcon className="w-6 h-6 text-purple-600" />
                <h1 className="text-xl font-bold">Hideiber</h1>
            </div>

            <div className="flex gap-4">    
                <Button variant="outline">Entrar</Button>
                <Button className="bg-purple-600 text-white hover:bg-purple-700">
                    Começar agora
                </Button>
            </div>
        </header>
    )
}
