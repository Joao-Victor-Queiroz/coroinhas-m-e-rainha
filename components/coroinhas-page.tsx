import {Card, CardHeader, CardTitle, CardFooter} from "./ui/card"
import {Button} from "./ui/button"
import {Church, User} from "lucide-react" 
import Link from "next/link"
import { listarCoroinhas } from "../app/actions/coroinhas-actions";

export type Coroinha = {
    id: string;
    nome_coroinha: string;
}

export type Frequencia = {
    id: string;
    coroinha_uuid: string;
    data_registro: string | "";
    status: "P" | "FJ" | "FNJ"
}


export async function CoroinhasList(){
    const coroinhas = await listarCoroinhas();

    return(
      <main className="p-6 max-w-7xl mx-auto"> 
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
                <Church className="h-8 w-8 text-primary"/>
                <h1 className="font-bold text-2xl md:text-3xl tracking-tight">Coroinhas - Santuário Mãe Rainha</h1>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                <Button asChild variant="ghost" size="lg" className="text-md shadow-md">
                    <Link href="/adicionar-coroinha">Adicionar Coroinha</Link>
                </Button>
                <Button asChild size="lg" className="text-md shadow-md">
                    <Link href="/frequencia">Registrar Frequência</Link>
                </Button>
            </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coroinhas.map((coroinha) => (
                <Card key={coroinha.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 mb-1 text-muted-foreground text-xs uppercase font-semibold">
                            <User className="h-3 w-3" />
                            <span>Coroinha</span>
                        </div>
                        <CardTitle className="text-xl line-clamp-1">{coroinha.nome_coroinha}</CardTitle>
                    </CardHeader>
                    
                    <CardFooter className="pt-2">
                        <Button asChild variant="default" size="lg" className="w-full">
                            <Link href={`/coroinhas/${coroinha.id}`}>Ver detalhes</Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>

        {coroinhas.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed rounded-xl">
                <p className="text-muted-foreground">Nenhum coroinha cadastrado no momento.</p>
            </div>
        )}
      </main>
    )
}