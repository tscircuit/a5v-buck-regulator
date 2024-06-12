import { layout } from "tscircuit"
import manual_edits from "./MyCircuit.manual-edits"
import AP63357 from "./AP63357"

export const MyCircuit = () => {
  return (
    <group layout={layout().manualEdits(manual_edits)}>
      <AP63357 name="U1" />
    </group>
  )
}
