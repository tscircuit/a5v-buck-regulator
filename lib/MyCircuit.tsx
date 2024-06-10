import { layout } from "tscircuit"
import manual_edits from "./MyCircuit.manual-edits"

export const MyCircuit = () => (
  <group layout={layout().manualEdits(manual_edits)}>
    <resistor resistance="10kohm" name="R1" footprint="0805" />
    <resistor
      resistance="10kohm"
      name="R2"
      footprint="0805"
      pcbX={"10mm"}
      pcbY={0}
    />
    <trace from=".R1 > .left" to=".R2 > .right" />
  </group>
)
