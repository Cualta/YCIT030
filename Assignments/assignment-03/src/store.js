import { Button } from "@mui/material";
import create from "zustand";

/* export const useAppStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

function add() {
  const inc = useStore((state) => state.inc);
  return <Button onClick={inc}></Button>;
}

function Counter() {
  const count = useStore((state) => state.count);
  return { count };
} */

export const useAppStore = create((set) => {
  return {
    role: "user",

    addToCart: () => {
      set({
        role: "admin",
      });
    },
  };
});

export const useDialogStore = create((set, get) => {
  return {
    result: null,
    dialogState: "closed",

    type: "",
    message: "",
    headerText: "",

    open: (type, message, headerText) => {
      set({
        result: null,
        dialogState: "opened",
        type,
        message,
        headerText,
      });
    },

    close: (result) => {
      set({
        result,
        dialogState: "closed",
      });
    },

    msgBox: (message, headerText) => {
      get().open("ok", message, headerText);

      return get().waitForUser();
    },

    msgBoxYN: (message, headerText) => {
      get().open("yes-no", message, headerText);

      return get().waitForUser();
    },

    waitForUser: () => {
      return new Promise((resolve) => {
        const handle = setInterval(() => {
          console.log("waiting for user");
          const result = get().result;
          if (result !== null) {
            resolve(result);
            clearInterval(handle);
          }
        }, 50);
      });
    },
  };
});
