import { layout, useResistor } from "tscircuit"

/**
 * Synchronous Buck Converter
 *
 * https://www.diodes.com/assets/Datasheets/AP63356-AP63357.pdf
 */
export const AP63357 = ({ name }: { name: string }) => {
  const R3 = useResistor("R3", { resistance: "93.1k", footprint: "0402" })
  const R4 = useResistor("R4", { resistance: "22k", footprint: "0402" })

  return (
    <group name={name} layout={layout().autoLayoutSchematic()}>
      <bug
        name="U1"
        footprint="dfn8"
        pinLabels={{
          1: "VIN",
          2: "EN",
          3: "FB",
          4: "COMP",
          5: "PG",
          6: "BST",
          7: "NC",
          8: "GND",
          9: "SW",
        }}
        schPortArrangement={{
          leftSide: { pins: [1, 2, 4, 8], direction: "top-to-bottom" },
          rightSide: {
            pins: [6, 9, 3, 5],
            direction: "top-to-bottom",
          },
        }}
      />
      <netalias net="GND" />
      <R4
        pcbX={-10}
        pcbY={10}
        schRotation="-90deg"
        left=".U1 > .EN"
        right=".U1 > .COMP"
      />
      <R3
        pcbX={-10}
        pcbY={-10}
        schRotation="-90deg"
        left=".U1 > .VIN"
        right=".U1 > .EN"
      />
      <trace from=".U1 > .GND" to=".GND" />
      <trace from=".U1 > .COMP" to=".GND" />
    </group>
  )
}

export default AP63357
