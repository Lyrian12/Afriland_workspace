'use server'

import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function signUp(formData: FormData) {
  const origin = (await headers()).get('origin')
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const supabase = await createClient()

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    return redirect('/?message=Erreur d’inscription')
  }

  return redirect('/?message=Vérifiez votre boîte mail pour confirmer votre compte Afriland')
}