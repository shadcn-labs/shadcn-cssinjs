"use client";

import * as React from "react";

import { useTranslation } from "@/components/language-selector";
import type { Translations } from "@/components/language-selector";
import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/ui/card";
import { Input } from "@/registry/bases/stylex/ui/input";
import { Label } from "@/registry/bases/stylex/ui/label";

const translations: Translations = {
  ar: {
    dir: "rtl",
    values: {
      description: "أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك",
      email: "البريد الإلكتروني",
      emailPlaceholder: "m@example.com",
      forgotPassword: "نسيت كلمة المرور؟",
      login: "تسجيل الدخول",
      loginWithGoogle: "تسجيل الدخول باستخدام Google",
      password: "كلمة المرور",
      signUp: "إنشاء حساب",
      title: "تسجيل الدخول إلى حسابك",
    },
  },
  en: {
    dir: "ltr",
    values: {
      description: "Enter your email below to login to your account",
      email: "Email",
      emailPlaceholder: "m@example.com",
      forgotPassword: "Forgot your password?",
      login: "Login",
      loginWithGoogle: "Login with Google",
      password: "Password",
      signUp: "Sign Up",
      title: "Login to your account",
    },
  },
  he: {
    dir: "rtl",
    values: {
      description: "הזן את האימייל שלך למטה כדי להתחבר לחשבון שלך",
      email: "אימייל",
      emailPlaceholder: "m@example.com",
      forgotPassword: "שכחת את הסיסמה?",
      login: "התחבר",
      loginWithGoogle: "התחבר עם Google",
      password: "סיסמה",
      signUp: "הירשם",
      title: "התחבר לחשבון שלך",
    },
  },
};

export default function CardRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Card className="w-full max-w-sm" dir={dir}>
      <CardHeader>
        <CardTitle>{t.title}</CardTitle>
        <CardDescription>{t.description}</CardDescription>
        <CardAction>
          <Button variant="link">{t.signUp}</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email-rtl">{t.email}</Label>
              <Input
                id="email-rtl"
                type="email"
                placeholder={t.emailPlaceholder}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password-rtl">{t.password}</Label>
                <a
                  href="#"
                  className="ms-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  {t.forgotPassword}
                </a>
              </div>
              <Input id="password-rtl" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          {t.login}
        </Button>
        <Button variant="outline" className="w-full">
          {t.loginWithGoogle}
        </Button>
      </CardFooter>
    </Card>
  );
}
