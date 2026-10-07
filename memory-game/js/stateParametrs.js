export const state = {
    count: 0,
    pairs: 0,
    firstCard: null,
    secondCard: null,
    isLocked: false,
  };

export function resetState() {
  state.count = 0;
  state.pairs = 0;
  state.firstCard = null;
  state.secondCard = null;
  state.isLocked = false;
}