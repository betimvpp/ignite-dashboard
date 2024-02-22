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

const productFiltersSchema = z.object({
  productId: z.string().optional(),
  productName: z.string().optional(),
  category: z.string().optional(),
})

type ProductFiltersSchema = z.infer<typeof productFiltersSchema>

export function ProductTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const productId = searchParams.get('productId')
  const productName = searchParams.get('productName')
  const category = searchParams.get('category')

  const { register, handleSubmit, control, reset } =
    useForm<ProductFiltersSchema>({
      resolver: zodResolver(productFiltersSchema),
      defaultValues: {
        productId: productId ?? '',
        productName: productName ?? '',
        category: category ?? 'all',
      },
    })

  function handleFilter({ productName, productId, category }: ProductFiltersSchema) {
    setSearchParams((state) => {
      if (productId) {
        state.set('productId', productId)
      } else {
        state.delete('productId')
      }

      if (productName) {
        state.set('customerName', productName)
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
      state.delete('productId')
      state.delete('productName')
      state.delete('category')
      state.set('page', '1')

      return state
    })

    reset({
      productId: '',
      productName: '',
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
        placeholder="ID do produto"
        className="h-8 w-auto"
        {...register('productId')}
      />
      <Input
        placeholder="Nome do produto"
        className="h-8 w-[320px]"
        {...register('productName')}
      />
      <Controller
        name="category"
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
                <SelectItem value="all">Todas as categorias</SelectItem>
                <SelectItem value="pending">Cerveja</SelectItem>
                <SelectItem value="canceled">Whisky</SelectItem>
                <SelectItem value="processing">Vodka</SelectItem>
                <SelectItem value="delivering">Vinho</SelectItem>
                <SelectItem value="delivering">Cachaça</SelectItem>
                <SelectItem value="delivered">Petisco</SelectItem>
                <SelectItem value="delivered">Porções</SelectItem>
              </SelectContent>
            </Select>
          )
        }}
      ></Controller>
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