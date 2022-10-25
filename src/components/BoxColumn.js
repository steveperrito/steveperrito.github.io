export const BoxColumn = ({children}) => {
  return <div className="column">
    <div className="box" style={{height: '100%'}}>
      {children}
    </div>
  </div>
}