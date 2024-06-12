import { layout } from "tscircuit"
import manual_edits from "./MyCircuit.manual-edits"
import AP63357 from "./AP63357"

export const MyCircuit = () => {
  return (
    <group layout={layout().manualEdits(manual_edits)}>
      {/* <resistor resistance="10kohm" name="R1" footprint="0805" />
      <resistor
        resistance="10kohm"
        name="R2"
        footprint="0805"
        pcbX={"10mm"}
        pcbY={0}
      />
      <trace from=".R1 > .left" to=".R2 > .right" /> */}
      <AP63357 name="U1" />
    </group>
  )
}
