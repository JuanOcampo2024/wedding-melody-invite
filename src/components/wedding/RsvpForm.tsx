import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Heart, Check } from "lucide-react";

const RsvpForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", guests: "1", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast({ title: "Por favor ingresa tu nombre", variant: "destructive" });
      return;
    }
    setLoading(true);
    // TODO: save to database once Cloud is enabled
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
    toast({ title: "¡Confirmación recibida!", description: "Gracias por confirmar tu asistencia." });
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
          <p className="font-script text-4xl text-primary mb-2">¡Gracias!</p>
          <p className="font-body text-muted-foreground text-lg">
            Hemos recibido tu confirmación. ¡Nos vemos pronto!
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="font-script text-5xl text-primary mb-3">Confirma tu Asistencia</p>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-primary/30" />
          <Heart className="w-4 h-4 text-primary/50" fill="currentColor" />
          <div className="h-px w-20 bg-primary/30" />
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto ornament-border p-8 bg-card space-y-6"
      >
        <div>
          <label className="font-display text-sm tracking-widest uppercase text-foreground mb-2 block">
            Nombre completo
          </label>
          <Input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Tu nombre"
            className="bg-background/50 border-primary/30 font-body"
            maxLength={100}
          />
        </div>
        <div>
          <label className="font-display text-sm tracking-widest uppercase text-foreground mb-2 block">
            Número de acompañantes
          </label>
          <Input
            type="number"
            min="1"
            max="10"
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            className="bg-background/50 border-primary/30 font-body"
          />
        </div>
        <div>
          <label className="font-display text-sm tracking-widest uppercase text-foreground mb-2 block">
            Mensaje para los novios
          </label>
          <Textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Escribe un mensaje especial..."
            className="bg-background/50 border-primary/30 font-body"
            maxLength={500}
            rows={4}
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full gold-gradient text-primary-foreground font-display tracking-widest uppercase hover:opacity-90"
        >
          {loading ? "Enviando..." : "Confirmar Asistencia"}
        </Button>
      </motion.form>
    </section>
  );
};

export default RsvpForm;
