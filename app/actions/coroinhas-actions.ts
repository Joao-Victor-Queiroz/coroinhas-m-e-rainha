'use server'

import { createClient } from "@/lib/supabase/client"
import { revalidatePath } from "next/cache"
import { Frequencia } from "@/components/coroinhas-page";

const supabase = createClient();

export async function adicionarCoroinha(formData: FormData){

    const nome_coroinha = formData.get('nome_coroinha') as string;

    const {error} = await supabase.from('coroinhas').insert({
        nome_coroinha: nome_coroinha
    })

    

    if(error){
      return {success: false, message: error.message}
    }

    revalidatePath('/')
    return {success: true, message: 'Coroinha adicionado com sucesso!'}

}

export async function editarCoroinha(id: string, formData: FormData){
    const nome_coroinha = formData.get('nome_coroinha') as string;
    
    const {error} = await supabase.from('coroinhas').update({
        nome_coroinha: nome_coroinha
    }).eq('id', id)

    if(error){
        return {success: false, message: error.message}
    }
    revalidatePath('/')
    return {success: true, message: "Coroinha editado com sucesso!"}
}

export async function excluirCoroinha(id: string){
    const {error} = await supabase.from('coroinhas').delete().eq('id', id)

    if(error){
       return {success: false, message: error.message}
    }

    return {success: true, message: 'Coroinha excluído com sucesso!'}
}

export async function listarCoroinhas(){
    const {data, error} = await supabase.from('coroinhas').select('*').order('nome_coroinha');

   if(error){
    throw new Error(error.message);
   }


   return data ?? []
}

export async function coroinhaPorId(id: string){
    const {data, error} = await supabase.from('coroinhas').select('*').eq('id', id).single();

    if(error){
        return {success: false, message: error.message}
    }

    console.log(data)
    return data;
}

export async function frequenciaPorCoroinha(coroinha_uuid: string){
    const {data, error} = await supabase.from('frequencia_coroinhas').select('*').eq('coroinha_uuid', coroinha_uuid).order('data_registro', {ascending: false});

    if(error){
        throw new Error(error.message);
    }

    return data;
}

export async function registrarFrequencia(frequencias: Omit<Frequencia, 'id'>[]){
    const { error } = await supabase.from('frequencia_coroinhas').insert(frequencias);

    if(error){
        return {success: false, messaege: error.message}
    }

    return {success: true, message: 'Frequências registradas com sucesso!'}
}