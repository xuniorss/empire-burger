import { create } from 'zustand'

type modalStore = {
   isOpen: boolean
   onOpen: () => void
   onClose: () => void
}

const useModal = create<modalStore>((set) => ({
   isOpen: false,
   onOpen: () => set({ isOpen: true }),
   onClose: () => set({ isOpen: false }),
}))

export default useModal
