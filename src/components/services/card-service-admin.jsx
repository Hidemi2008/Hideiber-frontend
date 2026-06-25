// frontend/src/components/services/card-service-admin.jsx
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function CardServiceAdmin({
  service,
  confirmDelete,
  onEdit,
  onDelete,
  onRequestDelete,
  onCancelDelete,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{service.name}</CardTitle>
        <CardDescription>
          {Number(service.price) === 0
            ? "Grátis"
            : `R$ ${Number(service.price).toFixed(2)}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground flex flex-col gap-1">
        {service.description && <span>{service.description}</span>}
        {service.estimatedTime != null && (
          <span>⏱ {service.estimatedTime} min</span>
        )}
        {service.discount != null && Number(service.discount) > 0 && (
          <span>🏷 {Number(service.discount).toFixed(0)}% de desconto</span>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        {confirmDelete === service.id ? (
          <>
            <span className="text-sm text-destructive flex-1">
              Confirmar exclusão?
            </span>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onDelete(service.id)}
            >
              Sim
            </Button>
            <Button size="sm" variant="outline" onClick={onCancelDelete}>
              Não
            </Button>
          </>
        ) : (
          <>
            <Button size="sm" variant="outline" onClick={() => onEdit(service)}>
              <Pencil className="size-3.5 mr-1" /> Editar
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onRequestDelete(service.id)}
            >
              <Trash2 className="size-3.5 mr-1" /> Excluir
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}