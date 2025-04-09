"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { sendMessage } from "@/actions/actions";
import confetti from "canvas-confetti";
import { Bounce, ToastContainer, toast } from "react-toastify";

const schema = z.object({
  name: z.string().min(1, { message: "Coloque seu nome" }),
  email: z.string().email("Email inválido"),
  subject: z.string().min(1, { message: "Preencha este campo" }),
  phone: z.string().min(1, { message: "Número de celular inválido" }),
  message: z.string().min(10, { message: "Deixe sua mensagem! 😊" }),
});
export type MessageForm = z.infer<typeof schema>;

const Contact = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", phone: "", message: "" },
  });

  const onSubmit = async (data: MessageForm) => {
    const result = await sendMessage(data);
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };
    if (result) {
      frame();
      form.reset();

      toast.success("🦄 Email Enviado!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div id="contato" className=" flex gap-4 flex-col mx-4 lg:ml-0">
      <p className="text-pink-400 font-semibold text-4xl">Contato</p>
      <div>
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-pink-400 font-semibold">
                    Nome:
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-pink-400 font-semibold">
                    Email:
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-pink-400 font-semibold">
                    Assunto:
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-pink-400 font-semibold">
                    Telefone:
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-pink-400 font-semibold">
                    Mensagem:
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-pink-400 self-center">
              Enviar
            </Button>
          </form>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
