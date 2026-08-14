import { useEffect, useRef, type FC } from "react";

// Store Event Handlers in Refs to avoid re-creating them on each render
/***
 * In react functions change identity on each render unless memoized
 * - so should have ref for - eventListeners , websockets , observers , setTimeout , setInterval
 */

interface AdvancedEventHandlerRefsProps {
  event: string;
  handler: () => void;
}
const AdvancedEventHandlerRefs: FC<AdvancedEventHandlerRefsProps> = (
  event: string,
  handler: () => void,
) => {
  const handleRef = useRef(handler);

  useEffect(() => {});
  return <></>;
};

export default AdvancedEventHandlerRefs;
