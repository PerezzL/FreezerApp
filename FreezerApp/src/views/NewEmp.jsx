import React, { useState } from "react"
import { Button } from "shadcn-ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "shadcn-ui/card"
import { Input } from "shadcn-ui/input"
import { Label } from "shadcn-ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "shadcn-ui/select"
import { useToast } from "shadcn-ui/use-toast"

export default function AddEmployee() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    // Aquí iría la lógica para enviar los datos del nuevo empleado al servidor
    console.log("Nuevo empleado:", { firstName, lastName, password, email, role })
    toast({
      title: "Empleado añadido",
      description: "El nuevo empleado ha sido añadido con éxito.",
    })
    // Resetear los campos después de enviar
    setFirstName("")
    setLastName("")
    setPassword("")
    setEmail("")
    setRole("")
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Añadir Nuevo Empleado</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nombre</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Apellido</Label>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Rol</Label>
              <Select value={role} onValueChange={setRole} required>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Selecciona un rol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrador</SelectItem>
                  <SelectItem value="manager">Gerente</SelectItem>
                  <SelectItem value="employee">Empleado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Añadir Empleado</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}