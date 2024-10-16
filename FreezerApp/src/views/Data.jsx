import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Send } from "lucide-react"

export default function CargaDatos() {
  const [producto, setProducto] = useState("")
  const [temperatura, setTemperatura] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    event.preventDefault()
    setLoading(true)
    // Aquí iría la lógica para enviar los datos a la base de datos
    console.log("Enviando datos:", { producto, temperatura, timestamp: new Date().toISOString() })
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulación de envío
    setLoading(false)
    // Resetear los campos después del envío
    setProducto("")
    setTemperatura("")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Carga de Datos</CardTitle>
          <CardDescription>Ingrese los datos del producto y su temperatura</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="producto">Producto</Label>
                <Select value={producto} onValueChange={setProducto} required>
                  <SelectTrigger id="producto">
                    <SelectValue placeholder="Seleccione un producto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vacunas">Vacunas</SelectItem>
                    <SelectItem value="alimentos">Alimentos Congelados</SelectItem>
                    <SelectItem value="medicamentos">Medicamentos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="temperatura">Temperatura (°C)</Label>
                <Input
                  id="temperatura"
                  type="number"
                  step="0.1"
                  placeholder="Ingrese la temperatura"
                  value={temperatura}
                  onChange={(e) => setTemperatura(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timestamp">Fecha y Hora de Registro</Label>
                <Input
                  id="timestamp"
                  type="text"
                  value={new Date().toLocaleString()}
                  readOnly
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Cargando...
              </>
            ) : (
              "Cargar"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}