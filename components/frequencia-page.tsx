"use client"

import {Coroinha} from "@/components/coroinhas-page";
import {Frequencia} from "@/components/coroinhas-page"
import {CoroinhaCardFrequencia} from "@/components/coroinha-card-frequencia"
import {Button} from "./ui/button"
import {Input} from "./ui/input"
import {registrarFrequencia} from "@/app/actions/coroinhas-actions"
import {useState, useEffect} from "react"
import Link from "next/link"; 
import { ChevronLeft } from "lucide-react"; 

type Props = {
    data: Coroinha[]
}

type FrequenciaPost = Omit<Frequencia, 'id'>;


export function FrequenciaForm({data} : Props) {
    const [isPending, setIsPending] = useState(false)
    const [dataRegistro, setDataRegistro] = useState<string>("")
    const [frequencias, setFrequencias] = useState<FrequenciaPost[]>(() => {
    if (!data || !Array.isArray(data)) return [];
    
    return data.map((coroinha) => ({
      coroinha_uuid: coroinha.id,
      data_registro: dataRegistro,
      status: "P",
    }));
  });
  


  useEffect(() => {
    if (data && Array.isArray(data)) {
      const novosDados: FrequenciaPost[] = data.map((coroinha) => ({
        coroinha_uuid: coroinha.id,
        data_registro: new Date().toISOString().split('T')[0],
        status: "P",
      }));
      setFrequencias(novosDados);
    }
  }, [data]);

    const handleChangeStatus = (coroinha_uuid: string, status: string) => {
        setFrequencias((prevFrequencias) => (
            prevFrequencias.map((frequencia) => {
                if(frequencia.coroinha_uuid === coroinha_uuid){
                    return {...frequencia, status: status as "P" | "FJ" | "FNJ"}
                }
                return frequencia;
            })
      ))
    }

    const handleSubmit = async(event: React.SyntheticEvent) => {
        event.preventDefault();
        setIsPending(true);

        try{
            await registrarFrequencia(frequencias);
            alert('Frequências registradas com sucesso!')
        } catch(error){
            console.error('Erro ao registrar frequências: ', error);
            alert('Erro ao registrar frequências. Por favor, tente novamente.')
        }finally{
            setIsPending(false)
        }
    }

    return(
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6">
            <h1 className="font-bold text-xl md:text-2xl">Registrar Frequência</h1>
             <div className="w-full flex justify-start my-6">
                    <Button variant="ghost" asChild className="pl-1">
                      <Link href="/" className="flex items-center gap-2">
                        <ChevronLeft className="h-4 w-4" />
                        Voltar para o Início
                      </Link>
                    </Button>
                  </div>
            
            <div className="mt-4 max-w-full">
                <label htmlFor="data_registro" className="block font-medium mb-2">Data de Registro</label>
                <Input 
                    type="date"
                    id="data_registro"
                    onChange={(e) => setDataRegistro(e.target.value)}
                    value={dataRegistro}
                    required
                    />
            </div>
            {data.map((coroinha) => (
                <CoroinhaCardFrequencia 
                key={coroinha.id} 
                nome={coroinha.nome_coroinha} 
                statusSelecionado={frequencias.find(frequencia => frequencia.coroinha_uuid === coroinha.id)?.status || 'P'}
                onChangeStatus ={(status) => handleChangeStatus(coroinha.id, status)}
                />
            ))}
            <Button disabled={isPending} type="submit" className="w-full text-lg p-6">Registrar</Button>
        </form>
    )
}