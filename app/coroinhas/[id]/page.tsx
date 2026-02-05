
import { coroinhaPorId, frequenciaPorCoroinha } from "@/app/actions/coroinhas-actions";
import { CoroinhaDetails } from "@/components/coroinha-details";



export default async function DetalhesCoroinha({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
    const coroinha = await coroinhaPorId(id);
  const frequencias = await frequenciaPorCoroinha(coroinha.id);
 

  return (
  <CoroinhaDetails nome={coroinha.nome_coroinha} frequencia={frequencias}/>
  )
}