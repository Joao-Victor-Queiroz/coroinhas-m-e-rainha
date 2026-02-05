import { Frequencia } from "./coroinhas-page";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link"; // Importação necessária para navegação
import { Button } from "@/components/ui/button"; // Ajuste o caminho conforme seu projeto
import { ChevronLeft } from "lucide-react"; // Opcional: ícone para o botão

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Props = {
  nome: string;
  frequencia: Frequencia[];
};

export function CoroinhaDetails({ nome, frequencia }: Props) {
  return (
    <main className="max-w-4xl mx-auto p-6 flex flex-col items-center">
      {/* Botão de Voltar */}
      <div className="w-full flex justify-start mb-6">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Voltar para o Início
          </Link>
        </Button>
      </div>

      <h1 className="text-2xl font-bold mb-8 text-slate-800">{nome}</h1>

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