import { onUpdatePassword } from "@/app/actions/settings";
import {
  ChangePasswordProps,
  ChangePasswordSchema,
} from "@/app/schemas/auth.schema";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const useThemeMode = () => {
  const { setTheme, theme } = useTheme();
  return {
    theme,
    setTheme,
  };
};

export const useChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChangePasswordProps>({
    resolver: zodResolver(ChangePasswordSchema),
    mode: "onChange",
  });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onChangePassword = handleSubmit(async (values) => {
    try {
      setLoading(true);
      const update = await onUpdatePassword(values.password);
      if (update) {
        reset();
        setLoading(false);
        toast({ title: "Success", description: update.message });
      }
    } catch (error) {
      console.log(error);
    }
  });
  return {
    register,
    errors,
    onChangePassword,
    loading
  }
};
