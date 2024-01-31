import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const signInForm = z.object({
  email: z.string().email()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log(data)
      toast.success("Enviamos um link de autenticação para o seu e-mail!")
      navigate('/')
    } catch {
      toast.error("Insira um e-mail válido!")
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <Button className="w-full" disabled={isSubmitting}>Acessar Painel</Button>
          </form>

          <Separator />

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">Ou clique para seguir à página de cadastro!</p>
            <Button variant="link" asChild >
              <Link to="/sign-up" className="text-primary hover:text-primary/90 hover:no-underline">Cadastrar-se</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
