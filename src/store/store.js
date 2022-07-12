import create from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set, get) => ({
  row: 20,
  column: 20,
  canvas: [],
  selectedColor: '#000',
  baseColor: '#fff',
  brush: 'BRUSH',
  eraser: 'ERASER',
  bucket: 'BUCKET',
  eyedropper: 'EYEDROPPER',
  selectedTools: 'BRUSH',
  hasChangedColor: false,
  gridRef: {},

  checkChangedColor: () =>
    set((state) => ({ hasChangedColor: !state.hasChangedColor })),
  setBucket: () => set((state) => ({ selectedTools: state.bucket })),
  setBrush: () => set((state) => ({ selectedTools: state.brush })),
  setEraser: () => set((state) => ({ selectedTools: state.eraser })),
  setEyedropper: () => set((state) => ({ selectedTools: state.eyedropper })),
  setColor: () => set((state) => ({ selectedColor: state.selectedColor })),
});

const useStore = create(devtools(store));

export default useStore;
