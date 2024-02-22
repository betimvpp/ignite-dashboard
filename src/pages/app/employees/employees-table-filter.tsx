import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const employeeFiltersSchema = z.object({
  employeeId: z.string().optional(),
  employeeName: z.string().optional(),
  category: z.string().optional(),
})

type EmployeeFiltersSchema = z.infer<typeof employeeFiltersSchema>

export function EmployeeTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const employeeId = searchParams.get('employeeId')
  const employeeName = searchParams.get('employeeName')
  const category = searchParams.get('category')

  const { register, handleSubmit, control, reset } =
    useForm<EmployeeFiltersSchema>({
      resolver: zodResolver(employeeFiltersSchema),
      defaultValues: {
        employeeId: employeeId ?? '',
        employeeName: employeeName ?? '',
        category: category ?? 'all',
      },
    })

  function handleFilter({ employeeName, employeeId, category }: EmployeeFiltersSchema) {
    setSearchParams((state) => {
      if (employeeId) {
        state.set('employeeId', employeeId)
      } else {
        state.delete('employeeId')
      }

      if (employeeName) {
        state.set('customerName', employeeName)
      } else {
        state.delete('customerName')
      }

      if (category) {
        state.set('category', category)
      } else {
        state.delete('category')
      }

      state.set('page', '1')

      return state
    })
  }

  function handleClearFilters() {
    setSearchParams((state) => {
      state.delete('employeeId')
      state.delete('employeeName')
      state.delete('category')
      state.set('page', '1')

      return state
    })

    reset({
      employeeId: '',
      employeeName: '',
      category: 'all',
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="flex items-center gap-2"
    >
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        placeholder="ID do funcionário"
        className="h-8 w-auto"
        {...register('employeeId')}
      />
      <Input
        placeholder="Nome do funcionário"
        className="h-8 w-[320px]"
        {...register('employeeName')}
      />
      <Button variant="secondary" size="xs" type="submit">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>
      <Button
        onClick={handleClearFilters}
        variant="outline"
        size="xs"
        type="button"
      >
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}