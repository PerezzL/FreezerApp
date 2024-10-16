"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input" // Eliminado porque ya no se usa
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronDown, Plus, Trash, Edit, MoreHorizontal } from "lucide-react"

// Tipo para representar a un empleado
type Employee = {
  id: number
  name: string
}

export default function ManageEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, name: "Juan Pérez" },
    { id: 2, name: "María García" },
    { id: 3, name: "Carlos Rodríguez" },
  ])
  // const [newEmployeeName, setNewEmployeeName] = useState("") // Eliminado
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null)

  // const handleAddEmployee = () => { // Eliminado
  //   if (newEmployeeName.trim()) {
  //     setEmployees([...employees, { id: Date.now(), name: newEmployeeName.trim() }])
  //     setNewEmployeeName("")
  //   }
  // }

  const handleDeleteEmployee = (id: number) => {
    setEmployees(employees.filter(emp => emp.id !== id))
  }

  const handleEditEmployee = (employee: Employee) => {
    setEditingEmployee(employee)
  }

  const handleSaveEdit = () => {
    if (editingEmployee) {
      setEmployees(employees.map(emp => emp.id === editingEmployee.id ? editingEmployee : emp))
      setEditingEmployee(null)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Administrar Empleados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="mb-4">
              <Button onClick={() => console.log("Navegar a la página de añadir empleado")}>
                <Plus className="mr-2 h-4 w-4" /> Añadir nuevo empleado
              </Button>
            </div>
            <ul className="space-y-2">
              {employees.map((employee) => (
                <li key={employee.id} className="flex items-center justify-between p-2 bg-gray-100 rounded">
                  <span>{employee.name}</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onSelect={() => handleEditEmployee(employee)}>
                        <Edit className="mr-2 h-4 w-4" /> Modificar
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => handleDeleteEmployee(employee.id)}>
                        <Trash className="mr-2 h-4 w-4" /> Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!editingEmployee} onOpenChange={() => setEditingEmployee(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modificar Empleado</DialogTitle>
            <DialogDescription>Edita el nombre del empleado aquí.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Label htmlFor="name" className="text-right">
              Nombre
            </Label>
            <Input
              id="name"
              value={editingEmployee?.name || ""}
              onChange={(e) => setEditingEmployee(prev => prev ? {...prev, name: e.target.value} : null)}
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button onClick={handleSaveEdit}>Guardar cambios</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}