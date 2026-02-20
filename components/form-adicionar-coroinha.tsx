"use client";

import { adicionarCoroinha } from "@/app/actions/coroinhas-actions";
import { Button } from "./ui/button";
import {Input} from "./ui/input"
import Link from "next/link"; 
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react"; 
import { useState } from "react";
import { toast } from "sonner"

export function FormAdicionarCoroinha(){
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.target as HTMLFormElement)

    try {
      const result = await adicionarCoroinha(formData);
      
      if(result.success){
        toast.success(result.message)
        router.replace('/')
        
      }else{
        toast.error(result.message)
      }
    } catch (error) {
        console.error('Erro ao adicionar coroinha: ', error)
        toast.error('Erro ao adicionar coroinha')
    }finally{
      setIsPending(false);
    }
  }

    return (
   
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6">
          <h1 className="font-bold mb-4 text-xl md:text-2xl">Adicionar coroinha</h1>
          <div className="w-full flex justify-start my-6">
            <Button variant="ghost" asChild className="pl-1">
              <Link href="/" className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                    Voltar para o Início
              </Link>
            </Button>
          </div>
                      
        <div className="flex flex-col gap-1 ">
          <label htmlFor="nome_coroinha" className="text-sm font-bold">Nome</label>
          <Input 
            name="nome_coroinha" 
            placeholder="Ex: João Silva" 
            required 
          />
        <Button type="submit" disabled={isPending}>
          Salvar
        </Button>
        </div>
      </form>
)
}