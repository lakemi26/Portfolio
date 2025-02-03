"use client";
import React from "react";
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

const schema = z.object({
  name: z.string().min(1, { message: "Coloque seu nome" }),
  email: z.string().email("Email inválido"),
  subject: z.string().min(1, { message: "Preencha este campo" }),
  phone: z.string().min(1, { message: "Número de celular inválido" }),
  message: z.string().min(10, { message: "Deixe sua mensagem! 😊" }),
});
export type MessageForm = z.infer<typeof schema>;

const onSubmit = (data: MessageForm) => {
  sendMessage(data);
};

const Contact = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", phone: "", message: "" },
  });
  return (
    <div className="flex gap-4 flex-col">
      <p className="text-pink-400 font-semibold text-4xl">Contact</p>
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
            <Button type="submit">Enviar</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
