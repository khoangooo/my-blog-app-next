import { ReactNode, createContext, useContext, useState } from "react";

interface IProps {
  checked?: boolean,
  onChange?: () => void
}

// type Condition = {
//   if: boolean,
//   elseIf?: boolean
// }

// interface IControlFlowProps {
//   condition: Condition,
//   children: ReactNode
// }
// const ControlFlowContext = createContext<Condition | null>(null);

// function ControlFlow({ condition, children }: IControlFlowProps) {
//   return (
//     <ControlFlowContext.Provider value={condition}>
//       {children}
//     </ControlFlowContext.Provider>
//   )
// }

// ControlFlow.If = ({ children }: { children: ReactNode }) => {
//   const condition = useContext(ControlFlowContext);
//   return condition?.if ? <>{children}</> : <></>
// }

// ControlFlow.ElseIf = ({ children }: { children: ReactNode }) => {
//   const condition = useContext(ControlFlowContext);
//   return condition?.elseIf ? <>{children}</> : <></>
// }

// ControlFlow.Else = ({ children }: { children: ReactNode }) => {
//   const condition = useContext(ControlFlowContext);
//   return (!condition?.if && !condition?.elseIf) ? <>{children}</> : <></>
// }

function Toggle({ checked = false, onChange = () => { } }: IProps) {

  const [selfChecked, setSelfChecked] = useState<boolean>(checked ?? false);

  const handleChange = () => {
    setSelfChecked(!selfChecked);
    onChange();
  }

  return (
    <label htmlFor="defaultToggle" className="relative h-8 w-14 cursor-pointer">
      <input
        type="checkbox"
        checked={selfChecked}
        id="defaultToggle"
        className="peer sr-only"
        onChange={handleChange}
      />

      <span
        className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600"
      >
        {/* <ControlFlow condition={{ if: selfChecked, elseIf: false }}>
          <ControlFlow.If>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-900"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
            </svg>
          </ControlFlow.If>
          <ControlFlow.Else>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-900"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </ControlFlow.Else>
        </ControlFlow> */}
        {selfChecked
          ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-900"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-900"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
      </span>

      <span
        className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"
      ></span>
    </label>

  )
}

export default Toggle;