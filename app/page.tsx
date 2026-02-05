"use cache"
import { CoroinhasList } from "@/components/coroinhas-page";
import { listarCoroinhas } from "../app/actions/coroinhas-actions";

export default async function CoroinhasPage(){
    const coroinhas = await listarCoroinhas();

    return <CoroinhasList data={coroinhas}/>
}