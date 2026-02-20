
import { Church} from "lucide-react";

export default function CoroinhasListSkeleton() {
  return (
    <main className="p-6 max-w-7xl mx-auto">
   
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Church className="h-8 w-8 text-slate-200" />
     
          <div className="h-8 w-64 bg-slate-200 animate-pulse rounded-md" />
        </div>

    
        <div className="h-11 w-44 bg-slate-200 animate-pulse rounded-md shadow-sm" />
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="rounded-xl border-2 border-slate-100 bg-white shadow-sm flex flex-col overflow-hidden"
          >
        
            <div className="p-6 pb-2 space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-slate-200 animate-pulse rounded-full" />
                <div className="h-3 w-16 bg-slate-200 animate-pulse rounded" />
              </div>
              <div className="h-6 w-3/4 bg-slate-200 animate-pulse rounded-md" />
            </div>

          
            <div className="px-6 py-4 flex-grow space-y-2">
              <div className="h-4 w-full bg-slate-100 animate-pulse rounded" />
              <div className="h-4 w-2/3 bg-slate-100 animate-pulse rounded" />
            </div>

          
            <div className="p-6 pt-2">
              <div className="h-10 w-full bg-slate-200 animate-pulse rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}