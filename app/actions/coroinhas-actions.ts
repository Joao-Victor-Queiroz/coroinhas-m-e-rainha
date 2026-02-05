'use server'

import { createClient } from "@/lib/supabase/client"
import { revalidatePath } from "next/cache"
import { Frequencia } from "@/components/coroinhas-page";

const supabase = createClient();

export async function adicionarCoroinha(formData: FormData){

    const nome_coroinha = formData.get('nome_coroinha') as string;

    console.log('Valor recebido: ', nome_coroinha)

    const {error} = await supabase.from('coroinhas').insert({
        nome_coroinha: nome_coroinha
    })

    if(error){
        throw new Error(error.message)
      
    }

    revalidatePath('/')
}

export async function listarCoroinhas(){
    const {data, error} = await supabase.from('coroinhas').select('*').order('nome_coroinha');

   if(error){
    throw new Error(error.message);
   }

   console.log('Dados recebidos: ', data)

   return data ?? []
}

export async function coroinhaPorId(id: string){
    const {data, error} = await supabase.from('coroinhas').select('*').eq('id', id).single();

    if(error){
        throw new Error(error.message);
    }

    console.log(data)
    return data;
}

export async function frequenciaPorCoroinha(coroinha_uuid: string){
    const {data, error} = await supabase.from('frequencia_coroinhas').select('*').eq('coroinha_uuid', coroinha_uuid).order('data_registro', {ascending: false});

    if(error){
        throw new Error(error.message);
    }

    console.log("Frequências recebidas: ", data);
    return data;
}

export async function registrarFrequencia(frequencias: Omit<Frequencia, 'uuid'>[]){
    const { error } = await supabase.from('frequencia_coroinhas').insert(frequencias);

    if(error){
        throw new Error(error.message)
    }

    console.log('Frequências registradas: ', frequencias)
}