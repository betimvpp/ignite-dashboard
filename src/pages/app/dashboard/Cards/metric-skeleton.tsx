import { Skeleton } from '@/components/ui/skeleton'

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="mt-1 h-7 w-36 lg:w-20 md:w-28" />
      <Skeleton className="h-4 w-52 lg:w-40 lg:h-6 md:w-32 md:h-6" />
    </>
  )
}