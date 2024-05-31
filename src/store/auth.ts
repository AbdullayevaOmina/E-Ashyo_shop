import { create } from "zustand";
import { AuthStore } from "@auth-interface";
import { auth } from "@service";
import { setDataToCookie } from "@coocie";
import { toast } from "react-toastify";

const useRegisterStore = create<AuthStore>((set) => ({
  data: [],
  isLoading: false,

  signin: async (data) => {
    set({ isLoading: true });
    try {
      const response: any = await auth.signin(data);
      if (response.status === 200) {
        set({ data: response.data });
        setDataToCookie("access_token", response.data.access_token);
        setDataToCookie("refresh_token", response.data.refresh_token);
        setDataToCookie("user_id", response.data.id);
        toast.success("Welkome!");
      } else if (response.status === 400) {
        toast.warning("Email yoki parol xato!");
      } else if (response.status === 404) {
        toast.warning("Siz hali ro'yxatdan otmagansiz");
      } else if (response.status === 500) {
        toast.warning("Kechirasiz server bilan aloqa uzildi");
      }
      return response.status;
    } catch (error) {
      console.error("Sign-in error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  signup: async (data) => {
    set({ isLoading: true });
    try {
      const response: any = await auth.signup(data);
      return response.status;
    } catch (error) {
      console.error("Sign-up error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useRegisterStore;
