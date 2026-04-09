import { Button } from "./button";

export default function TopbarHeader(){
    return(
        <header className="flex ">
            <span></span>
            <h1>Hideiber</h1>

            <div>
                <Button variant="outline">Entrar</Button>
                <Button>Começar Agora</Button>
            </div>


        </header>
    )
}