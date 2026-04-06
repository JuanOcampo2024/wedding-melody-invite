import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useInvitationData } from "@/hooks/useInvitationData";
import { Check } from "lucide-react";

const RsvpForm = () => {
  const { toast } = useToast();
  const { nombre, pases } = useInvitationData();

  const maxPases = Number(pases) || 1;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [asiste, setAsiste] = useState<null | boolean>(null);
  const [form, setForm] = useState({
    guests: "1",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (asiste === null) {
      toast({
        title: "Selecciona una opción",
        description: "Indica si asistirás o no",
        variant: "destructive",
      });
      return;
    }

    if (asiste && Number(form.guests) > maxPases) {
      toast({
        title: "Cantidad inválida",
        description: `Solo tienes ${maxPases} pase(s) disponibles`,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyZ2Xxw7_BKXQ7YsPehfmwzkkjyzw_Yv12Q7EWBOXczjOTL0GjtTcDhRbKSMVuo8HN5/exec",
        {
          method: "POST",
          mode: "no-cors", // 👈 evita errores en Netlify
          body: JSON.stringify({
            nombre,
            asiste: asiste ? "SI" : "NO",
            cantidad: asiste ? form.guests : 0,
            mensaje: form.message,
          }),
        }
      );

      setSubmitted(true);

      toast({
        title: "¡Confirmación enviada!",
        
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar la confirmación",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center ornament-border p-12 bg-card"
        >
          <Check className="w-12 h-12 text-accent mx-auto mb-4" />
        
          <p className="text-muted-foreground text-lg">
            {asiste
              ? "Nos alegra contar contigo en este día especial."
              : "Gracias por avisarnos."}
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      {/* TITULO */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <p className="font-script text-5xl text-primary mb-4">
          Confirma tu Asistencia
        </p>
      </motion.div>

      {/* FORM */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto ornament-border p-8 bg-card space-y-6"
      >
        {/* MENSAJE */}
        <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed text-center">
          Decir "no puedo asistir" no es descortés, es honesto. <br />
          Confirma tu asistencia antes del{" "}
          <span className="text-primary font-bold tracking-wide">
            10 de Mayo del 2026
          </span>{" "}
          para mantenerte en nuestra lista de invitados y unirte a nuestra
          celebración.
        </p>

        {/* BOTONES */}
        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setAsiste(true)}
            className={`w-full ${
              asiste === true ? "gold-gradient text-white" : ""
            }`}
          >
            Sí asistiré
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => setAsiste(false)}
            className={`w-full ${
              asiste === false ? "gold-gradient text-white" : ""
            }`}
          >
            No podré asistir
          </Button>
        </div>

        {/* CANTIDAD */}
        {asiste && (
          <div>
            <label className="text-sm uppercase tracking-widest mb-2 block">
              Cantidad de asistentes
            </label>

            <Input
              type="number"
              min="1"
              max={maxPases}
              value={form.guests}
              onChange={(e) =>
                setForm({ ...form, guests: e.target.value })
              }
              className="bg-background/50 border-primary/30"
            />

            <p className="text-xs text-muted-foreground mt-1">
              Máximo permitido: {maxPases}
            </p>
          </div>
        )}

        {/* MENSAJE OPCIONAL */}
        <div>
          <label className="text-sm uppercase tracking-widest mb-2 block">
            Mensaje (opcional)
          </label>

          <Textarea
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            placeholder="Escribe un mensaje especial para los futuros esposos..."
            className="bg-background/50 border-primary/30"
            maxLength={300}
            rows={3}
          />
        </div>

        {/* BOTON */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full gold-gradient text-primary-foreground uppercase tracking-widest"
        >
          {loading ? "Enviando..." : "Confirmar Respuesta"}
        </Button>
      </motion.form>
    </section>
  );
};

export default RsvpForm;