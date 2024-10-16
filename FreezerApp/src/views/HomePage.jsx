import { ProductList } from './ProductList';
import { StatisticsCard } from './StatisticsCard';
import { AlertTriangle, Box, Thermometer, FileUp, PieChart } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Panel de Control de Cadena de Frío</h1>

      {/* Botones de acción */}
      <div className="flex space-x-4 mb-6">
        <StatisticsCard type="button" title="Carga de datos" icon={FileUp} />
        <StatisticsCard type="button" title="Analíticas relevantes" icon={PieChart} />
        <StatisticsCard type="button" title="Administración de empleados" />
      </div>

      {/* Tarjetas de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatisticsCard 
          title="Productos en Tránsito" 
          value="245" 
          icon={Box} 
          description="+12% desde el último mes" 
        />
        <StatisticsCard 
          title="Temperatura Promedio" 
          value="-18.5°C" 
          icon={Thermometer} 
          description="Dentro del rango óptimo" 
        />
        <StatisticsCard 
          title="Alertas Activas" 
          value="3" 
          icon={AlertTriangle} 
          description="Requieren atención inmediata" 
        />
      </div>

      {/* Lista de productos */}
      <ProductList />
    </div>
  );
}
