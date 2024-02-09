import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "./ui/button";

export interface PaginationProps {
    pageIndex: number;
    totalCount: number;
    perPage: number;
    onPageChange: (pageIndex: number) => Promise<void> | void;
}

export default function Pagination({ pageIndex, totalCount, perPage, onPageChange }: PaginationProps) {
    const pages = Math.ceil(totalCount / perPage) || 1;

    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                Total de {totalCount} item(s)
            </span>

            <div className="flex items-center gap-6 lg:gap-0">
                <div className="flex items-center gap-2">
                    <Button onClick={() => onPageChange(0)} disabled={pageIndex === 0} variant='outline' className="h-8 w-8 p-0">
                        <ChevronsLeft className="h-4 w-4" />
                        <span className="sr-only">Voltar à primeira página</span>
                    </Button>

                    <Button onClick={() => onPageChange(pageIndex - 1)} disabled={pageIndex === 0} variant='outline' className="h-8 w-8 p-0">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Voltar à página anterior</span>
                    </Button>

                    <div className="text-sm font-medium">
                        Página {pageIndex + 1} de {pages}
                    </div>

                    <Button onClick={() => onPageChange(pageIndex + 1)} disabled={pages <= pageIndex + 1} variant='outline' className="h-8 w-8 p-0">
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Avançar à próxima página</span>
                    </Button>

                    <Button onClick={() => onPageChange(pages - 1)} disabled={pages <= pageIndex + 1} variant='outline' className="h-8 w-8 p-0">
                        <ChevronsRight className="h-4 w-4" />
                        <span className="sr-only">Avançar à ultima página</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
