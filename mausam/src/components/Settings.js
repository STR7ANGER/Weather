import '../styles/components/Settings.scss';
function Settings() {
  return (
    <div className='Settings'>
      <div className="theme-toggler">
        <div className="theme-buttons">
          <div className="light-theme-btn ">
            <i class="bi bi-brightness-high"></i>
          </div>
          <div className="dark-theme-btn active">
            <i class="bi bi-moon-stars"></i>
          </div>
        </div>
      </div>
      <div className="Settings-btn">
        <i class="bi bi-gear"></i>
      </div>
    </div>
  )
}

export default Settings