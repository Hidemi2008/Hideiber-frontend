// frontend/src/components/services/card-service.jsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardService({ service }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{service.name}</CardTitle>
        <CardDescription className="text-2xl font-bold text-foreground">
          {Number(service.price) === 0
            ? "Grátis"
            : `R$ ${Number(service.price).toFixed(2)}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 text-sm text-muted-foreground">
        {service.description && <span>{service.description}</span>}
        {service.estimatedTime != null && (
          <span>⏱ Tempo estimado: {service.estimatedTime} min</span>
        )}
        {service.discount != null && Number(service.discount) > 0 && (
          <span>🏷 Desconto: {Number(service.discount).toFixed(0)}%</span>
        )}
      </CardContent>
    </Card>
  );
}