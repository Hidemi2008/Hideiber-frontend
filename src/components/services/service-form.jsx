// frontend/src/components/services/service-form.jsx
import { Button } from "../ui/button";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

export default function ServiceForm({
  editing,
  sheetOpen,
  setSheetOpen,
  form,
  setForm,
  error,
  saving,
  handleSubmit,
}) {
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{editing ? "Editar Serviço" : "Novo Serviço"}</SheetTitle>
          <SheetDescription>
            {editing
              ? "Altere os dados do serviço."
              : "Preencha os dados para criar um novo serviço."}
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 px-4">
          <FieldGroup>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Field>
              <FieldLabel htmlFor="service-name">Nome do Serviço</FieldLabel>
              <Input
                id="service-name"
                placeholder="Ex: Corte de cabelo"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="service-description">Descrição</FieldLabel>
              <Input
                id="service-description"
                placeholder="Descreva o serviço (opcional)"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="service-price">Preço (R$)</FieldLabel>
              <Input
                id="service-price"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                required
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="service-discount">Desconto (%)</FieldLabel>
              <Input
                id="service-discount"
                type="number"
                step="1"
                min="0"
                max="100"
                placeholder="0"
                value={form.discount}
                onChange={(e) => setForm({ ...form, discount: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="service-estimatedTime">
                Tempo Estimado (min)
              </FieldLabel>
              <Input
                id="service-estimatedTime"
                type="number"
                min="1"
                placeholder="30"
                value={form.estimatedTime}
                onChange={(e) =>
                  setForm({ ...form, estimatedTime: e.target.value })
                }
              />
            </Field>
            <Field className="mt-4">
              <Button type="submit" disabled={saving}>
                {saving
                  ? "Salvando..."
                  : editing
                    ? "Salvar Alterações"
                    : "Criar Serviço"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </SheetContent>
    </Sheet>
  );
}