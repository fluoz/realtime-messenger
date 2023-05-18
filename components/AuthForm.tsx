'use client'
import Input from "@/components/inputs/Input"
import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        setVariant((prev: Variant) => prev === 'LOGIN' ? 'REGISTER' : "LOGIN")
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        if (variant === "REGISTER") {
            // axios register
        }
        if (variant === "LOGIN") {
            // nextauth signin
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true)

        // next auth social sign in
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant === "REGISTER" && (
                        <Input id="name" label="Name" errors={errors} register={register}></Input>
                    )}
                    <Input id="email" label="Email Address" type="email" errors={errors} register={register}></Input>
                    <Input id="password" label="Password" type="password" errors={errors} register={register}></Input>
                </form>
            </div>
        </div>
    )
}

export default AuthForm