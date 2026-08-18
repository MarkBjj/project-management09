import { createPortal } from "react-dom";
// createPortal renders this component's JSX into a different DOM node (e.g. document.body)
// instead of the parent's DOM hierarchy, so the modal can escape parent CSS (overflow/z-index) while staying in the React tree.
import { forwardRef, useImperativeHandle, useRef } from "react";
// forwardRef lets a parent attach a ref to this component and have it forwarded to a DOM node
// (or exposed via useImperativeHandle) inside, since refs aren't passed through props by default. - you gotta WRAP the function with forwardRef(function Modal)) to use it
const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  // `ref` is the second argument forwardRef supplies (after props) — it's whatever ref
  // the parent attached via <Modal ref={...} />, forwarded here so it can be attached to
  // this component's own DOM node or exposed via useImperativeHandle.
  const dialog = useRef(); // ref to the <dialog> DOM node, so we can call dialog.current.showModal() and dialog.current.close() to open/close the modal

  // useImperativeHandle(ref,)
  // Defines what the parent actually gets when it calls methods/reads props on the forwarded ref:
  // instead of exposing the raw DOM node, it exposes a custom object ({ ref: ref.current }).
  // Re-runs only when `ref` changes (the dependency array), like useMemo/useEffect.
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  }, [ref]);

  //return completed Modal
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 rounded-md p-4 backdrop:bg-opacity-50 backdrop:backdrop-blur-sm"
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {children}
          <form method="dialog" className="flex justify-end">
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              {buttonCaption}
            </button>
          </form>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
