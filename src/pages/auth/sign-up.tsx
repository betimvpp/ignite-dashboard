import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { registerRestaurant } from "@/api/register-restaurant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const signUpForm = z.object({
  email: z.string().email(),
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<SignUpForm>();

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant
  })

  async function handlesignUp(data: SignUpForm) {
    try {
      await registerRestaurantFn({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        email: data.email,
        phone: data.phone,
      })

      toast.success('Estabelecimento cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })

      reset()
      navigate('/sign-in')
    } catch {
      toast.error("Erro ao cadastrar estabelecimento!")
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Criar uma conta gratuita!</h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e acompanhe suas vendas!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handlesignUp)}>
            <div className="space-y-2">
              <Label htmlFor="username">Seu nome de usuário:</Label>
              <Input id="username" type="username" {...register('managerName')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail:</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu telefone:</Label>
              <Input id="phone" type="phone" {...register('phone')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="establishment">Nome do estabelecimento:</Label>
              <Input id="establishment" type="establishment" {...register('restaurantName')} />
            </div>

            <Button className="w-full" disabled={isSubmitting}>Finalizar cadastro</Button>
          </form>

          <Separator />

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">Já tem uma conta?</p>
            <Button variant="link" asChild >
              <Link to="/sign-in" className="text-primary hover:text-primary/90 hover:no-underline">Fazer Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
