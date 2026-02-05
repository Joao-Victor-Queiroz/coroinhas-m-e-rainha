import { adicionarCoroinha } from "@/app/actions/coroinhas-actions";
import { Button } from "./ui/button";
import {Input} from "./ui/input"

export function FormAdicionarCoroinha(){
    return (
    <div className="bg-slate-50 p-4 rounded-lg border my-4">
      <h3 className="font-bold mb-4">Adicionar Novo</h3>
      
  
      <form action={adicionarCoroinha} className="flex gap-4 items-end">
        
        <div className="flex flex-col gap-1">
          <label htmlFor="nome_coroinha" className="text-sm text-gray-600">Nome</label>
          <Input 
            name="nome_coroinha" 
            placeholder="Ex: João Silva" 
            required 
          />
        </div>

      
        <Button type="submit">
          Salvar
        </Button>

      </form>
    </div>)
}