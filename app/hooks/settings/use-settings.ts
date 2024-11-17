import {
  onChatBotImageUpdate,
  onDeleteUserDomain,
  onUpdateDomain,
  onUpdatePassword,
  onUpdateWelcomeMessage,
} from "@/app/actions/settings";
import {
  ChangePasswordProps,
  ChangePasswordSchema,
} from "@/app/schemas/auth.schema";
import {
  DomainSettingsProps,
  DomainSettingsSchema,
} from "@/app/schemas/settings.schema";
import { useToast } from "@/hooks/use-toast";
import { UploadClient } from "@uploadcare/upload-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const uplaod = new UploadClient({
  publicKey: process.env.NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY as string,
});

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
    loading,
  };
};

export const useSettings = (id: string) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DomainSettingsProps>({
    resolver: zodResolver(DomainSettingsSchema),
  });
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [deleting, setDeleting] = useState<boolean>(false);
  const onUpdateSettings = handleSubmit(async (values) => {
    setLoading(true);
    if (values.domain) {
      const domain = await onUpdateDomain(id, values.domain);
      if (domain) {
        toast({
          title: "Success",
          description: domain.message,
        });
      }
    }
    if (values.image[0]) {
      const uploaded = await uplaod.uploadFile(values.image[0]);
      const image = await onChatBotImageUpdate(id, uploaded.uuid);
      if (image) {
        toast({
          title: image.status == 200 ? "Success" : "Error",
          description: image.message,
        });
        setLoading(false);
      }
    }
    if (values.welcomeMessage) {
      const message = await onUpdateWelcomeMessage(values.welcomeMessage, id);
      if (message) {
        toast({
          title: "Success",
          description: message.message,
        });
      }
    }
    reset()
    router.refresh()
    setLoading(false)
  });

  const onDeleteDomain = async() =>{
    setDeleting(true)
    const deleted = await onDeleteUserDomain(id)
    if(deleted){
      toast({
        title: 'Success',
        description: deleted.message
      })
      setDeleting(false)
      router.refresh()
    }
  }
  return{
    register,
    onUpdateSettings,
    errors,
    loading,
    onDeleteDomain,
    deleting
  }
};
