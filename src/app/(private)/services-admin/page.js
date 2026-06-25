"use client";

// frontend/src/app/dashboard/services/page.jsx
import { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { Skeleton } from "../../../components/ui/skeleton";
import { Plus } from "lucide-react";
import CardServiceAdmin from "../../../components/services/card-service-admin";
import ServiceForm from "../../../components/services/service-form";

const API = "http://localhost:5500/api/services";

const EMPTY_FORM = {
  name: "",
  description: "",
  price: "",
  discount: "",
  estimatedTime: "",
};

export default function ServicesAdmin() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editing, setEditing] = useState(null); // null = criar, objeto = editar
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null); // id do serviço a deletar

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    setLoading(true);
    try {
      const res = await fetch(API, { credentials: "include" });

      if (!res.ok) {
        console.error("Erro ao buscar serviços, status:", res.status);
        setServices([]);
        return;
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        setServices(data);
      } else {
        console.error("Resposta inesperada da API de serviços:", data);
        setServices([]);
      }
    } catch (err) {
      console.error("Erro ao buscar serviços:", err);
      setServices([]);
    } finally {
      setLoading(false);
    }
  }

  function openCreate() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setError("");
    setSheetOpen(true);
  }

  function openEdit(service) {
    setEditing(service);
    setForm({
      name: service.name,
      description: service.description ?? "",
      price: String(service.price),
      discount: service.discount != null ? String(service.discount) : "",
      estimatedTime:
        service.estimatedTime != null ? String(service.estimatedTime) : "",
    });
    setError("");
    setSheetOpen(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    // Campos opcionais: só envia se preenchidos
    const body = {
      name: form.name,
      price: Number(form.price),
      ...(form.description !== "" && { description: form.description }),
      ...(form.discount !== "" && { discount: Number(form.discount) }),
      ...(form.estimatedTime !== "" && {
        estimatedTime: Number(form.estimatedTime),
      }),
    };

    try {
      const res = await fetch(editing ? `${API}/${editing.id}` : API, {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        let message = "Erro ao salvar serviço.";
        try {
          const data = await res.json();
          message = data.error ?? message;
        } catch {
          message = `Erro ao salvar serviço (status ${res.status}).`;
        }
        console.error("Erro ao salvar serviço:", res.status, message);
        setError(message);
        return;
      }

      setSheetOpen(false);
      fetchServices();
    } catch (err) {
      console.error("Falha inesperada ao salvar serviço:", err);
      setError("Não foi possível conectar ao servidor. Tente novamente.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    try {
      const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) {
        console.error("Erro ao excluir serviço:", res.status);
      }
    } catch (err) {
      console.error("Falha inesperada ao excluir serviço:", err);
    } finally {
      setConfirmDelete(null);
      fetchServices();
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Serviços</h1>
        <Button onClick={openCreate}>
          <Plus className="size-4 mr-2" />
          Novo Serviço
        </Button>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
        </div>
      ) : services.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          Nenhum serviço cadastrado ainda.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <CardServiceAdmin
              key={service.id}
              service={service}
              confirmDelete={confirmDelete}
              onEdit={openEdit}
              onDelete={handleDelete}
              onRequestDelete={setConfirmDelete}
              onCancelDelete={() => setConfirmDelete(null)}
            />
          ))}
        </div>
      )}

      <ServiceForm
        editing={editing}
        sheetOpen={sheetOpen}
        setSheetOpen={setSheetOpen}
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        saving={saving}
        error={error}
      />
    </div>
  );
}