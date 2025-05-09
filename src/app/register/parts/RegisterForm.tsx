import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export type Props = {
    className?: string
}

export function RegisterForm({
    className,
    ...props
}: Props) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create an account</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Enter your details to create an account.
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input className="placeholder:text-sm" id="username" type="username" placeholder="username"
                        required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input className="placeholder:text-sm" id="password" type="password"
                        placeholder="Enter your password" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Verify your password</Label>
                    <Input className="placeholder:text-sm" id="password" type="password"
                        placeholder="Re-enter your password" required />
                </div>
                <Button type="submit" className="w-full">
                    Sign up
                </Button>
                <div
                    className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                </div>
            </div>
            <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="/login" className="underline underline-offset-4">
                    Log in
                </a>
            </div>


        </form>
    )
}
