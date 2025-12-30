"use client";

import { useCallback } from "react";

import { logoutAction } from "@/app/[locale]/(main)/auth/_actions/logout";
import { meAction } from "@/app/[locale]/(main)/auth/_actions/me";
import { useUserStore } from "@/stores/user";

export function useUser() {
  const user = useUserStore((state) => state.user);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const isLoading = useUserStore((state) => state.isLoading);
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);
  const setLoading = useUserStore((state) => state.setLoading);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    try {
      const result = await meAction();
      if ("success" in result) {
        setUser(result.user);
        return result.user;
      }
      return null;
    } catch (error) {
      console.error("Failed to fetch user:", error);
      return null;
    } finally {
      setLoading(false);
    }
  }, [setUser, setLoading]);

  const logout = useCallback(async () => {
    try {
      clearUser();
      await logoutAction();
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  }, [clearUser]);

  return {
    user,
    isAuthenticated,
    isLoading,
    fetchUser,
    logout,
  };
}
