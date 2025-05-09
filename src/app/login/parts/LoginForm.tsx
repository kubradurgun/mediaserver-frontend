import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export type Props = {
    className?: string
}

export function LoginForm({
    className,
    ...props
}: Props) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Enter your username below to login to your account.
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input className="placeholder:text-sm" id="username" type="text" placeholder="username" required />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                            href="#"
                            className="ml-auto text-sm underline-offset-4 hover:underline"
                        >

                        </a>
                    </div>
                    <Input className="placeholder:text-sm" id="password" type="password"
                        placeholder="Enter your password" required />
                </div>
                <Button type="submit" className="w-full">
                    Login
                </Button>
                <div
                    className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">

                </div>
            </div>
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="/register" className="underline underline-offset-4">
                    Sign up
                </a>
            </div>
        </form>
    )
}
