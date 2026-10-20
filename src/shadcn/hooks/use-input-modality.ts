import * as React from 'react';

type InputModality = 'pointer' | 'keyboard';

const setInputModality = (modality: InputModality) => {
  document.documentElement.dataset.inputModality = modality;
};

const onPointerDown = () => setInputModality('pointer');

const onKeyDown = (event: KeyboardEvent) => {
  if (event.metaKey || event.altKey || event.ctrlKey) return;
  setInputModality('keyboard');
};

let mountedConsumers = 0;

export const useInputModality = () => {
  React.useEffect(() => {
    if (mountedConsumers++ === 0) {
      document.addEventListener('pointerdown', onPointerDown, true);
      document.addEventListener('keydown', onKeyDown, true);
    }

    return () => {
      if (--mountedConsumers > 0) return;
      document.removeEventListener('pointerdown', onPointerDown, true);
      document.removeEventListener('keydown', onKeyDown, true);
      delete document.documentElement.dataset.inputModality;
    };
  }, []);
};
