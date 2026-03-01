import { create } from 'zustand';

interface UIState {
  isLoaded: boolean;
  hoveredCard: string | null;
  toggles: {
    projector: boolean;
    soundSystem: boolean;
  };
  setLoaded: (loaded: boolean) => void;
  setHoveredCard: (id: string | null) => void;
  toggleFeature: (feature: 'projector' | 'soundSystem') => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLoaded: false,
  hoveredCard: null,
  toggles: {
    projector: true,
    soundSystem: false,
  },
  setLoaded: (loaded) => set({ isLoaded: loaded }),
  setHoveredCard: (id) => set({ hoveredCard: id }),
  toggleFeature: (feature) =>
    set((state) => ({
      toggles: {
        ...state.toggles,
        [feature]: !state.toggles[feature],
      },
    })),
}));
