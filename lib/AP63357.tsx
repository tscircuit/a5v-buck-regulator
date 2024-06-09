// https://www.diodes.com/assets/Datasheets/AP63356-AP63357.pdf
export const AP63357 = ({ name }: { name: string }) => (
  <group name={name}>
    <bug
      name="U1"
      footprint="dfn8"
      pinLabels={{
        1: "VIN",
      }}
      schPortArrangement={{
        leftSize: undefined,
        topSize: undefined,
        rightSize: undefined,
        bottomSize: undefined,
      }}
    />
  </group>
)

export default AP63357
