"use client";

import { Frequencia } from "./coroinhas-page";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link"; 
import { Button } from "@/components/ui/button"; 
import { ChevronLeft, Trash, Pen} from "lucide-react"; 
import { useState } from "react";
import { toast } from "sonner"
import {excluirCoroinha, editarCoroinha} from "@/app/actions/coroinhas-actions"
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
   DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Props = {
  nome: string;
  frequencia: Frequencia[];
  id: string;
};

export function CoroinhaDetails({ nome, id,  frequencia }: Props) {
  const [isExcludeDialogOpen, setIsExcludeDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isEditPending, setIsEditPending] = useState(false)
  const [isExcludePending, setIsExcludePending] = useState(false);

  const router = useRouter();

  async function handleEditarCoroinha(event: React.SyntheticEvent){
    event.preventDefault();
    setIsEditDialogOpen(true);
    const formData = new FormData(event.currentTarget as HTMLFormElement)

    const result = await editarCoroinha(id, formData)

    if(result.success){
      toast.success("Coroinha editado com sucesso!");
      console.log('coroinha editado com sucesso')
      setIsEditDialogOpen(false);
      setIsEditPending(false);
      router.refresh();
    }else{
      toast.error("Erro ao editar coroinha!");
       console.log('erro ao editar')
      setIsEditPending(false)
    }
  }

  async function handleRemoverCoroinha(){
    setIsExcludeDialogOpen(true);
    setIsExcludePending(true);

    const result = await excluirCoroinha(id);

    if(result.success){
      toast.success("Coroinha removido(a) com sucesso!");
      setIsExcludeDialogOpen(false);
      setIsExcludePending(false);
      router.push("/");
    }else{
      toast.error("Erro ao remover coroinha!");
      setIsExcludePending(false);
    }
  }

  const EditDialog = () => (
    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <Pen /> Editar Coroinha
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleEditarCoroinha}>
        <DialogHeader>
          <DialogTitle>Editar Coroinha</DialogTitle>
          <DialogDescription>
            Edite os dados da coroinha.
          </DialogDescription>
        </DialogHeader>
         <div className="flex flex-col gap-1 ">
          <label htmlFor="nome_coroinha" className="text-sm font-bold">Nome</label>
          <Input 
            name="nome_coroinha" 
            placeholder="Ex: João Silva" 
            defaultValue={nome}
            required 
          />
        </div>
        <DialogFooter className="mt-8">
          <Button variant="outline" type="button" onClick={() => setIsEditDialogOpen(false)}>
            Cancelar
          </Button>
            <Button  
            type="submit"
            disabled={isEditPending}
            >
            {isEditPending ? "Editando..." : "Confirmar edição"}
          </Button>
        </DialogFooter>
            </form>
      </DialogContent>
    </Dialog>
  )

  const DeleteConfirmationDialog = () => (
    <Dialog open={isExcludeDialogOpen} onOpenChange={setIsExcludeDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" className="w-full">
          <Trash /> Remover Coroinha
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Você tem certeza?</DialogTitle>
          <DialogDescription>
            Esta ação não pode ser desfeita. Isso excluirá permanentemente o registro de <strong>{nome}</strong>.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsExcludeDialogOpen(false)}>
            Cancelar
          </Button>
          <Button 
            variant="destructive" 
            onClick={handleRemoverCoroinha}
            disabled={isExcludePending}
          >
            {isExcludePending ? "Excluindo..." : "Sim, excluir"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  return (
    <main className="max-w-4xl mx-auto p-6 flex flex-col items-center">
   
      <div className="w-full flex justify-start mb-6">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Voltar para o Início
          </Link>
        </Button>
      </div>

      <h1 className="text-2xl font-bold mb-8 text-slate-800">{nome}</h1>

      <div className="w-full flex flex-col md:flex-row gap-4 mb-8">
        <DeleteConfirmationDialog />
        <EditDialog />
      </div>
 

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {frequencia.map((registro) => (
          <div
            key={registro.id}
            className={cn(
              "p-4 rounded-lg border-2 bg-white shadow-sm flex flex-col gap-2 transition-all",
              {
                "border-green-500 bg-green-50/30": registro.status === "P",
                "border-blue-500 bg-blue-50/30": registro.status === "FJ",
                "border-red-500 bg-red-50/30": registro.status === "FNJ",
              }
            )}
          >
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase text-slate-500">Data</span>
              <span className="text-sm font-medium">
                {new Date(registro.data_registro).toLocaleDateString("pt-BR")}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase text-slate-500">Status</span>
              <span
                className={cn("text-sm font-bold", {
                  "text-green-700": registro.status === "P",
                  "text-blue-700": registro.status === "FJ",
                  "text-red-700": registro.status === "FNJ",
                })}
              >
                {registro.status === "P" && "Presente"}
                {registro.status === "FJ" && "Falta Justificada"}
                {registro.status === "FNJ" && "Falta"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {frequencia.length === 0 && (
        <p className="text-slate-500 mt-8 bg-slate-100 p-4 rounded-md w-full text-center">
          Nenhum registro de frequência encontrado para este coroinha.
        </p>
      )}
    </main>
  );
}