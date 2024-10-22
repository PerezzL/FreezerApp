import React, { useState } from 'react'
import { Button } from "shadcn-ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "shadcn-ui/card"
import { AlertTriangle, Box, FileUp, PieChart, Thermometer } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Panel de Control de Cadena de Frío</h1>

      <div className="flex space-x-4 mb-6">
        <Button>
          <FileUp className="mr-2 h-4 w-4" /> Carga de datos
        </Button>
        <Button>
          <PieChart className="mr-2 h-4 w-4" /> Analíticas relevantes
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Productos en Tránsito
            </CardTitle>
            <Box className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">
              +12% desde el último mes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Temperatura Promedio
            </CardTitle>
            <Thermometer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-18.5°C</div>
            <p className="text-xs text-muted-foreground">
              Dentro del rango óptimo
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Alertas Activas
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Requieren atención inmediata
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Productos en Tránsito</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {['Vacunas', 'Alimentos Congelados', 'Medicamentos'].map((product, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-1">
                  <div className="text-sm font-medium">{product}</div>
                  <div className="text-xs text-muted-foreground">ID: {1000 + index}</div>
                </div>
                <div className="w-1/3">
                  <div className="text-sm font-medium mb-1">Temperatura</div>
                  <div className="bg-secondary h-2 w-full rounded-full">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: `${75 - index * 10}%` }}
                    ></div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="ml-4">
                  Detalles
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
