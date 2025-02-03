"use server";

import { MessageForm } from "@/components/contact/contact";

export const sendMessage = async (formData: MessageForm) => {
  const data = new FormData();
  for (const key in formData) {
    data.append(key, formData[key as keyof MessageForm]);
  }
  const accessKey = "e1c06da1-dac8-4cca-803b-b42bac6df6d2";
  data.append("access_key", accessKey);
  const opt: RequestInit = {
    method: "POST",
    body: data,
  };
  const result = await fetch("https://api.web3forms.com/submit", opt);

  return result.ok;
};
