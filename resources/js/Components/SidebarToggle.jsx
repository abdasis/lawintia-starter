import {create} from "zustand";

const useSidebarToggle = create((set) => ({
    open: false,
    setOpen: () => set((state) => ({open: !state.open})),
}));

export default useSidebarToggle;
