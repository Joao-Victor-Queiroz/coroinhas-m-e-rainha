import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function FrequenciaSkeleton(){
    return(
        <main className="p-6 flex flex-col items-center">
            <div className="bg-slate-200 w-full h-8 rounded-md animate-pulse mb-8"/>
            <div className="w-full flex justify-start mb-6">
                    <Button variant="ghost" disabled className="flex items-center gap-2 opacity-50">
                      <ChevronLeft className="h-4 w-4" />
                      Voltar para o Início
                    </Button>
            </div>
            <div className="mt-4 max-w-full">
                <div className="bg-slate-200 w-full h-4 rounded-md animate-pulse mb-2"/>
                <div className="bg-slate-200 w-full h-4 rounded-md animate-pulse mb-2"/>
            </div>
            <div>
                {[...Array(6)].map((_, i) => (
                       <div
            key={i}
            className="p-4 rounded-lg border-2 border-slate-100 bg-white shadow-sm flex flex-col gap-4"
          >
            {/* Linha da Data */}
            <div className="space-y-2">
              <div className="h-3 w-10 bg-slate-200 animate-pulse rounded" />
              <div className="h-4 w-24 bg-slate-200 animate-pulse rounded" />
            </div>

            {/* Linha do Status */}
            <div className="space-y-2">
              <div className="h-3 w-12 bg-slate-200 animate-pulse rounded" />
              <div className="h-4 w-20 bg-slate-200 animate-pulse rounded" />
            </div>
          </div>
                ))}
            </div>
        </main>
    )
}