import create, { useStore } from "zustand";

export const useDialogStore = create((set, get) => {
  return {
    dialogState: "closed",

    result: null,

    getResult: () => {
      const allState = get();
      return allState.result;
    },

    open: () => {
      set({ dialogState: "opened", result: null });
    },

    close: (result) => {
      console.log(`close() result=${result}`);

      set({ dialogState: "closed", result });
    },
  };
});

export const useAppStore = create((set) => {
  return {
    /* addToCart: () => {
      set({ role: "admin" });
    }, */
  };
});

/* export const useAppStore = create((set) => ({
//   count: 0,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }));

// function add() {
//   const inc = useStore((state) => state.inc);
//   return <Button onClick={inc}></Button>;
// }

// function Counter() {
//   const count = useStore((state) => state.count);
//   return { count };
// } */
