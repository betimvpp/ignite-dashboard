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
  status: z.string().optional(),
})

type EmployeeFiltersSchema = z.infer<typeof employeeFiltersSchema>

export function EmployeeTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const employeeId = searchParams.get('employeeId') || ''
  const employeeName = searchParams.get('employeeName') || ''
  const status = searchParams.get('status') || 'all'

  const { register, handleSubmit, control, reset } =
    useForm<EmployeeFiltersSchema>({
      resolver: zodResolver(employeeFiltersSchema),
      defaultValues: {
        employeeId,
        employeeName,
        status,
      },
    })

  function handleFilter(data: EmployeeFiltersSchema) {
    const { employeeId, employeeName, status } = data
    setSearchParams((state) => {
      if (employeeId) {
        state.set('employeeId', employeeId)
      } else {
        state.delete('employeeId')
      }

      if (employeeName) {
        state.set('employeeName', employeeName)
      } else {
        state.delete('employeeName')
      }

      if (status) {
        state.set('status', status)
      } else {
        state.delete('status')
      }

      state.set('pageIndex', '0') // Reset to the first page

      return state
    })
  }

  function handleClearFilters() {
    setSearchParams((state) => {
      state.delete('employeeId')
      state.delete('employeeName')
      state.delete('status')
      state.set('pageIndex', '0') // Reset to the first page

      return state
    })

    reset({
      employeeId: '',
      employeeName: '',
      status: 'all',
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
      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os status</SelectItem>
                <SelectItem value="ativo">Ativo</SelectItem>
                <SelectItem value="inativo">Inativo</SelectItem>
              </SelectContent>
            </Select>
          )
        }}
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
