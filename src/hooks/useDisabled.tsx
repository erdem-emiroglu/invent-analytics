import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

/**
 * Custom hook to manage the disabled state during navigation.
 *
 * @returns {Object} The disabled state and a function to update it.
 * @property {boolean} disabled - The current disabled state.
 * @property {function} disable - Function to set the disabled state to true.
 *
 * @example
 * const { disabled, disable } = useDisabled();
 * disable(); // sets disabled state to true
 */
const useDisabled = () => {
  const params = useSearchParams();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(false);
  }, [params]);

  const disable = () => {
    setDisabled(true);
  };

  return { disabled, disable };
};

export default useDisabled;
