"use cache"
import {FrequenciaForm} from "@/components/frequencia-page"
import { listarCoroinhas} from "@/app/actions/coroinhas-actions"


export default async function FrequenciaPage(){
    const coroinha = await listarCoroinhas();

    return <FrequenciaForm data={coroinha}/>
}