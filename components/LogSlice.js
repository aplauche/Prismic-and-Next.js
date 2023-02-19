

// Output a slice in json format for debugging
const LogSlice = ({slice}) => {
  return (
    <div style={{textAlign: "left"}}>
      <pre>{JSON.stringify(slice, null, 2)}</pre>
    </div>
  )
}

export default LogSlice