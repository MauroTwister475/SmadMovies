import { LayoutDashboard, Plus, Clapperboard } from "lucide-react";

export const NAVBAR_LINKS = [
  { 
    href: "/pages/dashboard",
    text: "Dashboard",
    icon: <LayoutDashboard />,
  },
  { 
    href: "/pages/add_movie",
    text: "Adicionar",
    icon: <Plus />,
  },
  { 
    href: "/pages/see_movies",
    text: "Ver filmes",
    icon: <Clapperboard />,
  },
]
