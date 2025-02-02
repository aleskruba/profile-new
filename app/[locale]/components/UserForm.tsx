"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { SubmitButton } from "./SubmitButton";

interface UserProps {
  email: string;
  name: string;
  message: string;
}

interface Errors {
  email?: string;
  name?: string;
  message?: string;
}

function UserForm() {
  const initialUser = {
    email: "",
    name: "",
    message: "",
  };

  const [user, setUser] = useState<UserProps>(initialUser);
  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Remove error for the current field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!user.name.trim()) {
      newErrors.name = lang == 'en' ? 'Name cannot be empty.' : 'Jméno nemůže být prázdné';
    }
    if (!user.email.trim()) {
      newErrors.email = lang == 'en' ? 'Email cannot be empty.' : 'Email nemůže být prázdný';
    } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      newErrors.email = lang == 'en' ? 'Invalid email format.' : 'Neplatný formát emailu';
    }
    if (!user.message.trim()) {
      newErrors.message = lang == 'en' ? 'Message cannot be empty.' : 'Zpráva nemůže být prázdná';
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };


const handleSubmitEmail = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
  event.preventDefault();

  if (validate()) {
    setPending(true); // Start pending state
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          message: user.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSuccessMessage(
          lang === "en"
            ? "Your message has been sent successfully!"
            : "Vaše zpráva byla úspěšně odeslána!"
        );
        setUser(initialUser); // Reset form
        setTimeout(() => setSuccessMessage(null), 3000);
      } else {
        alert(lang === "en" ? "Error sending email." : "Chyba při odesílání zprávy.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert(lang === "en" ? "An unexpected error occurred." : "Došlo k neočekávané chybě.");
    } finally {
      setPending(false); // End pending state
    }
  }
};


  return (
    <>
      {successMessage && (
        <div className="bg-green-700 text-gray-100 mt-4 text-center">
          {successMessage}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmitEmail}>
        <div>
          <Label htmlFor="name">{lang == 'en' ? 'Your Name' : 'Tvoje jméno'}</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={onChangeHandler}
            placeholder={lang == 'en' ? 'Enter your name' : 'Napište svoje jméno'}
            maxLength={100}
          />
          {errors.name && <span className="text-xs font-bold dark:text-red-400 text-red-700">{errors.name}</span>}
        </div>

        <div>
          <Label htmlFor="email">{lang == 'en' ? 'Your Email' : 'Tvůj Email'}</Label>
          <Input
            id="email"
            name="email"
            value={user.email}
            onChange={onChangeHandler}
            placeholder={lang == 'en' ? 'Enter your email' : 'Napište svůj email'}
            maxLength={100}
          />
          {errors.email && <span className="text-xs font-bold dark:text-red-400 text-red-700">{errors.email}</span>}
        </div>

        <div>
          <Label htmlFor="message">{lang == 'en' ? 'Your Message' : 'Tvoje Zpráva'}</Label>
          <Textarea
            id="message"
            rows={4}
            name="message"
            value={user.message}
            onChange={onChangeHandler}
            placeholder={lang == 'en' ? 'Type your message here...' : 'Napište svou zprávu sem...'}
            maxLength={2000}
          />
          {errors.message && <span className="text-xs font-bold dark:text-red-400 text-red-700">{errors.message}</span>}
        </div>

        <SubmitButton text={lang == "en" ? "Send Message" : "Odešli zprávu"} pending={pending} />

     {/*    <Button type="submit" className="w-full text-gray-200 bg-gray-900 hover:bg-gray-700">
          {lang == 'en' ? 'Send Message' : 'Odešli zprávu'}
        </Button> */}
      </form>
    </>
  );
}

export default UserForm;
