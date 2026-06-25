// (public)/services/page.js
"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "../../../components/ui/skeleton";
import CardService from "../../../components/services/card-service";

const API = "http://localhost:5500/api/services";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(API, { credentials: "include" });

      if (!res.ok) {
        console.error("Erro ao buscar serviços, status:", res.status);
        setError("Não foi possível carregar os serviços.");
        setServices([]);
        return;
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        setServices(data);
      } else {
        console.error("Resposta inesperada da API de serviços:", data);
        setServices([]);
        setError("Resposta inesperada do servidor.");
      }
    } catch (err) {
      console.error("Falha ao buscar serviços:", err);
      setError("Não foi possível conectar ao servidor.");
      setServices([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">Serviços</h1>
        <p className="text-muted-foreground mt-2">
          Conheça os serviços disponíveis.
        </p>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
        </div>
      ) : error ? (
        <p className="text-center text-destructive text-sm">{error}</p>
      ) : services.length === 0 ? (
        <p className="text-center text-muted-foreground text-sm">
          Nenhum serviço cadastrado ainda.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <CardService key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
}