
import { CoroinhasList } from "@/components/coroinhas-page";
import CoroinhasListSkeleton from "@/components/ui/coroinhas-list-skeleton";
import { Suspense } from "react";


export default async function CoroinhasPage(){
   
    return (
    <Suspense fallback={<CoroinhasListSkeleton/>}>
        <CoroinhasList/>
    </Suspense>)
}