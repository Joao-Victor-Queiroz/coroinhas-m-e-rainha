import {Card, CardHeader, CardTitle, CardContent, CardFooter} from "./ui/card"
import {Button} from "./ui/button"
import {Church, User} from "lucide-react" 
import Link from "next/link"

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

type Props = {
    data: Coroinha[]
}

export function CoroinhasList({data} : Props){
    return(
      <main className="p-6 max-w-7xl mx-auto"> 
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
                <Church className="h-8 w-8 text-primary"/>
                <h1 className="font-bold text-2xl md:text-3xl tracking-tight">Coroinhas - Santuário Mãe Rainha</h1>
            </div>
            
            <Button asChild size="lg" className="text-md shadow-md">
                <Link href="/frequencia">Registrar Frequência</Link>
            </Button>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((coroinha) => (
                <Card key={coroinha.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 mb-1 text-muted-foreground text-xs uppercase font-semibold">
                            <User className="h-3 w-3" />
                            <span>Coroinha</span>
                        </div>
                        <CardTitle className="text-xl line-clamp-1">{coroinha.nome_coroinha}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                 
                        <p className="text-sm text-muted-foreground">Membro ativo do Santuário.</p>
                    </CardContent>
                    
                    <CardFooter className="pt-2">
                        <Button asChild variant="default" size="lg" className="w-full">
                            <Link href={`/coroinhas/${coroinha.id}`}>Ver detalhes</Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>

        {data.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed rounded-xl">
                <p className="text-muted-foreground">Nenhum coroinha cadastrado no momento.</p>
            </div>
        )}
      </main>
    )
}