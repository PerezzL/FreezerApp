import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export function ProductList() {
  const products = ['Vacunas', 'Alimentos Congelados', 'Medicamentos'];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Productos en Tránsito</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-1">
                <div className="text-sm font-medium">{product}</div>
                <div className="text-xs text-muted-foreground">ID: {1000 + index}</div>
              </div>
              <div className="w-1/3">
                <div className="text-sm font-medium mb-1">Temperatura</div>
                <Progress value={75 - index * 10} className="h-2" />
              </div>
              <Button variant="outline" size="sm" className="ml-4">
                Detalles
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}


