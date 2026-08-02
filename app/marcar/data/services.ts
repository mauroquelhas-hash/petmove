import { CalendarDays, HeartHandshake, Zap } from "lucide-react";
const services = [
  {
    id: "standard",
    name: "PetMove Standard",
    subtitle: "Transporte programado",
    description:
      "Para consultas, vacinas, exames e outros serviços marcados com antecedência.",
    price: "Desde 25 €",
    icon: CalendarDays,
    iconStyle: "bg-green-100 text-green-600",
  },
  {
    id: "care",
    name: "PetMove Care",
    subtitle: "Ida, espera e regresso",
    description:
      "Recolhemos o animal, aguardamos no local e fazemos o regresso seguro a casa.",
    price: "Desde 45 €",
    icon: HeartHandshake,
    iconStyle: "bg-blue-100 text-blue-600",
  },
  {
    id: "direct",
    name: "PetMove Direct",
    subtitle: "Transporte no próprio dia",
    description:
      "Procuramos a primeira janela disponível para situações que não podem esperar.",
    price: "Sob disponibilidade",
    icon: Zap,
    iconStyle: "bg-amber-100 text-amber-600",
  },
];
export default services;