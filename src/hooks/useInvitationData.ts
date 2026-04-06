import { useSearchParams } from "react-router-dom";

export const useInvitationData = () => {
  const [params] = useSearchParams();

  const nombre = params.get("nombre") || "";
  const pases = params.get("pases") || "";

  return { nombre, pases };
};