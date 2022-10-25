export const Spinner = () => {
  return <div className="is-overlay has-background-dark"
              style={{
                opacity: '0.8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
    <span className="icon has-text-white is-size-1">
      <i className="fa-solid fa-gear fa-spin"></i>
    </span>
  </div>
};