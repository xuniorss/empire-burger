import { create } from 'zustand'

type toggleStore = {
   isOpen: boolean
   onOpen: () => void
   onClose: () => void
}

const useToggle = create<toggleStore>((set) => ({
   isOpen: false,
   onOpen: () => set({ isOpen: true }),
   onClose: () => set({ isOpen: false }),
}))

export default useToggle
