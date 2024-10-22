import React, { useState } from "react"
import { Eye, EyeOff, LockKeyhole } from "lucide-react"
import { Button } from "shadcn-ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "shadcn-ui/card"
import { Checkbox } from "shadcn-ui/checkbox"
import { Input } from "shadcn-ui/input"
import { Label } from "shadcn-ui/label"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log("Intento de inicio de sesión")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Iniciar Sesión</CardTitle>
          <CardDescription className="text-center">
            Ingresa tus credenciales para acceder al panel de control
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" type="email" placeholder="tu@ejemplo.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Recordar sesión</Label>
              </div>
              <Button type="submit" className="w-full">
                <LockKeyhole className="mr-2 h-4 w-4" /> Iniciar Sesión
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="w-full">
            ¿Olvidaste tu contraseña?
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}